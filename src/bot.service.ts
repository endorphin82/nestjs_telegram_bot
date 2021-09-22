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
    console.log(ctx);
    console.log(ctx.from.id, ctx.from.first_name, ctx.from.username);
    // await ctx.reply('Welcome, i m-integration bot, please press /help to help');
    await ctx.reply(
      `Welcome, please press /help to help`,
      { parse_mode: "Html" }
    );
  }

  @Help()
  async help(@Ctx() ctx) {
    console.log(ctx);
    console.log(ctx.from.id, ctx.from.first_name, ctx.from.username);
    await ctx.reply("Send me a sticker или скажи hi, нажми /id что бы узнать свой ID");
  }

  @On([
    'sticker',
    // 'delete_chat_photo'
  ])
  async on(@Ctx() ctx) {
    console.log(ctx);
    console.log(ctx.from.id, ctx.from.first_name, ctx.from.username);
    await ctx.reply('👍');
  }

  @Hears(['hi', '/id', 'Id'])
  async hears(@Ctx() ctx) {
    console.log(ctx.from);
    console.log(ctx.from.id, ctx.from.first_name, ctx.from.username);
    if (ctx.match[0] == 'hi') {
      await ctx.reply('Hey there');
    }
    if (ctx.match[0] == '/id' || ctx.match[0] == 'Id') {
      await ctx.reply(
        `you're ID ${ctx.from.id}, name: ${ctx.from.first_name}, username:  ${ctx.from.username} `,
      );
    }
  }
}
