// backend/src/modules/whatsapp/whatsapp.module.ts

import { Module } from '@nestjs/common';
import { WhatsappService } from './whatsapp.service';

@Module({
    providers: [WhatsappService],
    exports: [WhatsappService], // We export this so your Guest logic can use the validation math!
})
export class WhatsappModule { }