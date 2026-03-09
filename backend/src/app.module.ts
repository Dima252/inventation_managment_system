// backend/src/app.module.ts

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // <--- 1. Import this
import { GuestModule } from './modules/guests/guest.module';
import { WhatsappModule } from './modules/whatsapp/whatsapp.module';

@Module({
    imports: [
        // 2. Add ConfigModule.forRoot() at the very top of your imports
        ConfigModule.forRoot({ isGlobal: true }),
        GuestModule,
        WhatsappModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }