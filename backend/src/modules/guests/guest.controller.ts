// backend/src/modules/guests/guest.controller.ts

import { Controller, Post, Get, Body } from '@nestjs/common';
import { GuestService } from './guest.service';
import { GuestStateService } from './guest-state.service';

@Controller('guests') // This means all routes start with http://localhost:3000/guests
export class GuestController {
    constructor(
        private readonly guestService: GuestService,
        private readonly stateService: GuestStateService,
    ) { }

    // ------------------------------------------------------
    // ROUTE 1: FETCH THE GUEST LIST (For your Next.js Table)
    // GET http://localhost:3000/guests
    // ------------------------------------------------------
    @Get()
    async getGuests() {
        // This instantly reads your guest_state.json and sends it to your website
        // so you can see all your green and red checkmarks on the screen.
        const guests = await this.stateService.loadState();
        return { guests };
    }

    // ------------------------------------------------------
    // ROUTE 2: UPLOAD THE CSV TEXT
    // POST http://localhost:3000/guests/upload
    // ------------------------------------------------------
    @Post('upload')
    async uploadCsv(@Body('csvText') csvText: string) {
        // 1. Safety check
        if (!csvText) {
            return { error: 'No CSV text provided in the request.' };
        }

        // 2. Hand the text over to the Ingestion Engine we wrote earlier
        const result = await this.guestService.processCsvUpload(csvText);

        // 3. Send a success receipt back to the frontend
        return {
            message: 'Upload processed successfully!',
            newContactsAdded: result.added,
            totalContactsNow: result.total,
        };
    }
}