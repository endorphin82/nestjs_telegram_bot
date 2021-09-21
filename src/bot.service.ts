import {
  Update,
  Ctx,
  Start,
  Help,
  On,
  Hears
} from "nestjs-telegraf";

@Update()
export class BotService {
  @Start()
  async start(@Ctx() ctx) {
    await ctx.reply('Welcome');
  }

  @Help()
  async help(@Ctx() ctx) {
    await ctx.reply('Send me a sticker');
  }

  @On('sticker')
  async on(@Ctx() ctx) {
    await ctx.reply('👍');
  }

  @Hears('hi')
  async hears(@Ctx() ctx) {
    await ctx.reply('Hey there');
  }
}