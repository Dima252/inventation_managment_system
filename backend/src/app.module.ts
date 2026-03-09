// backend/src/app.module.ts

import { Module } from '@nestjs/common';
import { GuestModule } from './modules/guests/guest.module';
// Later, we will add WhatsappModule here too!

@Module({
    // 1. We PLUG IN the feature modules here
    imports: [GuestModule],

    // 2. We leave these EMPTY in the root module
    controllers: [],
    providers: [],
})
export class AppModule { }