// backend/src/modules/guests/guest-state.service.ts

import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as path from 'path';
import { Guest } from './guest.types';

@Injectable()
export class GuestStateService {
    // We tell it exactly where to save the file on your computer
    private readonly filePath = path.join(process.cwd(), 'data', 'guest_state.json');

    // ------------------------------------------------------
    // 1. READ FROM HARD DRIVE
    // ------------------------------------------------------
    // ------------------------------------------------------
    // 1. READ FROM HARD DRIVE (Bulletproof Version)
    // ------------------------------------------------------
    async loadState(): Promise<Guest[]> {
        try {
            // Try to read the file
            const fileData = await fs.readFile(this.filePath, 'utf-8');

            // If the file exists but is completely empty, return an empty array
            if (!fileData || fileData.trim() === '') {
                return [];
            }

            const parsedData = JSON.parse(fileData);

            // If the file has data, but it's not a proper list/array, force it to be one
            return Array.isArray(parsedData) ? parsedData : [];

        } catch (error: any) {
            // If the file doesn't exist yet, start fresh
            if (error.code === 'ENOENT') {
                console.log('No existing guest list found. Starting fresh.');
                return [];
            }

            // If the JSON is completely corrupted, don't crash, just start fresh
            console.log(`Error reading JSON, starting fresh. Details: ${error.message}`);
            return [];
        }
    }

    // ------------------------------------------------------
    // 2. WRITE TO HARD DRIVE
    // ------------------------------------------------------
    async saveState(guests: Guest[]): Promise<void> {
        try {
            // Ensure the 'data' folder exists before saving
            const dirPath = path.dirname(this.filePath);
            await fs.mkdir(dirPath, { recursive: true });

            // Convert the RAM array into beautifully formatted JSON (the "2" adds indents)
            const jsonData = JSON.stringify(guests, null, 2);

            // Write it permanently to the hard drive
            await fs.writeFile(this.filePath, jsonData, 'utf-8');
            console.log(`Successfully saved ${guests.length} guests to local drive.`);
        } catch (error: any) {
            throw new Error(`Failed to save guest state: ${error.message}`);
        }
    }
}