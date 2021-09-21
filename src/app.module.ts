import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegrafModule } from 'nestjs-telegraf';
import { BotService } from './bot.service';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    TelegrafModule.forRoot({
      token: process.env.TELEGRAM_BOT_TOKEN,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, BotService],
})
export class AppModule {}
