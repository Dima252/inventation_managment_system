// backend/src/modules/guests/guest.module.ts

import { Module } from '@nestjs/common';
import { GuestController } from './guest.controller';
import { GuestService } from './guest.service';
import { GuestStateService } from './guest-state.service';

@Module({
    controllers: [GuestController],
    providers: [GuestService, GuestStateService],
    exports: [GuestService, GuestStateService], // Optional, but good practice if other modules need these later
})
export class GuestModule { }