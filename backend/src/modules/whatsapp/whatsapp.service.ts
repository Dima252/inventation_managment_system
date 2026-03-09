import { Injectable } from '@nestjs/common';

@Injectable()
export class WhatsappService {
    async sendMessage(to: string, message: string) {
        // Logic to talk to Meta API
        console.log(`Sending message to ${to}: ${message}`);
        return true;
    }
}
