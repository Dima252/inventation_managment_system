// backend/src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // ALLOW FRONTEND CONNECTION
    app.enableCors();

    // Start the backend on port 3001 (so it doesn't fight with Next.js on 3000)
    await app.listen(3001);
    console.log('Backend is running on http://localhost:3001');
}
bootstrap();