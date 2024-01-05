import { Telegraf, Markup } from "telegraf"

const token = "6801500269:AAHiSVv0nRxY-cGunncIGP1Sh_RAfmK_p90"
const webAppUrl = "https://app-for-bot.web.app/"

const bot = new Telegraf(token)

bot.command("start", (ctx) => {
  ctx.reply(
    "Welcome! Click button below to start APP",
    Markup.keyboard([Markup.button.webApp("Send message", webAppUrl)])
  )
})

bot.launch()
