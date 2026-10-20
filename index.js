const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, {polling: true});

// ពេល User វាយ /start
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "👋 សួស្តី! ខ្ញុំជា Bot របាយការណ៍សូឡា។ សូមចុច /today ដើម្បីមើលរបាយការណ៍។");
});

// ពេល User វាយ /today
bot.onText(/\/today/, (msg) => {
  bot.sendMessage(msg.chat.id, "📊 **របាយការណ៍សូឡាថ្ងៃនេះ៖**\n• ថាមពលផលិតបាន៖ 150 kWh\n• ស្ថានភាពប្រព័ន្ធ៖ ដំណើរការធម្មតា");
});

// ពេល User វាយ /faults
bot.onText(/\/faults/, (msg) => {
  bot.sendMessage(msg.chat.id, "⚠️ **ស្ថានភាពម៉ាស៊ីន៖** មិនមានការខូចខាត ឬបញ្ហាអ្វីឡើយចំពោះថ្ងៃនេះ។");
});
