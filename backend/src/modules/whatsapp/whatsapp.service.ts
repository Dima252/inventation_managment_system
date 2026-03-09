// backend/src/modules/whatsapp/whatsapp.service.ts

import { Injectable } from '@nestjs/common';
import { PhoneNumberUtil, PhoneNumberFormat } from 'google-libphonenumber';

@Injectable()
export class WhatsappService {
    // Initialize the Google phone number math engine
    private phoneUtil = PhoneNumberUtil.getInstance();

    // ------------------------------------------------------
    // 1. FORMAT VALIDATOR
    // ------------------------------------------------------
    public validateAndFormatNumber(rawNumber: string): { isValid: boolean; formattedNumber?: string } {
        try {
            // Parse the number. 'IL' tells it to assume an Israeli number (+972) if the country code is missing
            const parsedNumber = this.phoneUtil.parseAndKeepRawInput(rawNumber, 'IL');

            // Check if it's mathematically a possible and valid number
            const isValid = this.phoneUtil.isValidNumber(parsedNumber);

            if (isValid) {
                // If it's valid, format it perfectly for the Meta API (E.164 format: +972501234567)
                const formatted = this.phoneUtil.format(parsedNumber, PhoneNumberFormat.E164);
                return { isValid: true, formattedNumber: formatted };
            }

            // If the math fails (e.g., too few digits)
            return { isValid: false };

        } catch (error) {
            // If the parser completely chokes on the string (e.g., they typed letters like "pizza")
            return { isValid: false };
        }
    }
}