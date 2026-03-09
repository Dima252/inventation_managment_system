// backend/src/modules/guests/guest.service.ts

import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { GuestStateService } from './guest-state.service';
import { Guest } from './guest.types';

@Injectable()
export class GuestService {
    constructor(private readonly stateService: GuestStateService) { }

    // ------------------------------------------------------
    // THE INGESTION LOOP
    // ------------------------------------------------------
    async processCsvUpload(rawCsvText: string): Promise<{ added: number; total: number }> {
        // 1. Load the permanent database from your hard drive
        const existingGuests = await this.stateService.loadState();

        // 2. The RAM Engine: Put existing guests into a Map
        // We use the phone number as the unique "Key" to prevent duplicates
        const guestMap = new Map<string, Guest>();
        for (const guest of existingGuests) {
            guestMap.set(guest.phoneNumber, guest);
        }

        // 3. Parse the incoming CSV file (Row by Row)
        // We expect the CSV to look like: "David, +972501234567" OR just "+972501234567"
        const lines = rawCsvText.split('\n');
        let newlyAddedCount = 0;

        for (const line of lines) {
            const cleanLine = line.trim();
            if (!cleanLine) continue; // Skip completely empty rows

            const parts = cleanLine.split(',');
            let name: string | undefined = undefined;
            let phone = '';

            if (parts.length === 1) {
                // Only a phone number was found in this row
                phone = parts[0].trim();
            } else {
                // Name and Phone were found
                name = parts[0].trim();
                phone = parts[1].trim();
            }

            // Basic cleanup: Strip out spaces or dashes so +972 50-123 is just +97250123
            phone = phone.replace(/[\s-]/g, '');

            // 4. The Duplicate Catcher
            // If the Map doesn't already have this phone number, we create a new Guest!
            if (!guestMap.has(phone)) {
                const newGuest: Guest = {
                    id: randomUUID(), // Built-in Node.js ID generator
                    phoneNumber: phone,
                    name: name,
                    isFormatValid: false, // We haven't run the Meta validation yet
                    hasWhatsApp: false,   // We haven't run the Meta validation yet
                    rsvpStatus: 'PENDING',
                    messagesSent: {
                        twoMonthsBefore: false,
                        monthBefore: false,
                        weekBefore: false,
                        dayBefore: false,
                        sameDay: false,
                    },
                };

                // Add the new guest to our RAM Engine
                guestMap.set(phone, newGuest);
                newlyAddedCount++;
            }
        }

        // 5. Unload the RAM Engine back to the Hard Drive
        const updatedGuestList = Array.from(guestMap.values());
        await this.stateService.saveState(updatedGuestList);

        return {
            added: newlyAddedCount,
            total: updatedGuestList.length,
        };
    }
}