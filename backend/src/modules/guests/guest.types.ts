// backend/src/modules/guests/guest.types.ts

export interface Guest {
    id: string;              // A unique ID (UUID)
    phoneNumber: string;     // The raw number string
    name?: string;           // Optional, in case the CSV is missing a name

    // Validation Flags
    isFormatValid: boolean;
    hasWhatsApp: boolean;

    // Wedding Specific Trackers
    rsvpStatus: 'PENDING' | 'ATTENDING' | 'DECLINED';
    messagesSent: {
        twoMonthsBefore: boolean;
        monthBefore: boolean;
        weekBefore: boolean;
        dayBefore: boolean;
        sameDay: boolean;
    };
}