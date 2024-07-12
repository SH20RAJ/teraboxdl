


// app/api/sendMessages/route.js

import { PrismaClient } from '@prisma/client';
import TelegramBot from 'node-telegram-bot-api';

const prisma = new PrismaClient();
const token = process.env.TERASOP;
const bot = new TelegramBot(token);
const botlogger = "-1002221558664";

export const GET = async (req) => {
  try {
    console.log('Bot token:', token); // Check if the bot token is correctly loaded

    const MESSAGE_TEXT = 'Check the logs of @terasop_bot. Join here: https://t.me/+AXbG2ERsby8xZWM1';
    const testChatId = 1479193538;

    // Test sending a message
    await bot.sendMessage(testChatId, MESSAGE_TEXT);
    await bot.sendMessage(botlogger, MESSAGE_TEXT);

    return new Response(JSON.stringify({ message: 'Message sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending message:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};











// import prisma from "../../../../prisma";
// import TelegramBot from "node-telegram-bot-api";

// const token = process.env.TERASOP;
// const bot = new TelegramBot(token);
// const botlogger = "-1002221558664"


// export const GET = async (req, res) => {
//   // get text from the request
//   const { text } =  { text : "Hello World!"};
//   // send the text to the bot
//   bot.sendMessage(1479193538, text);
//   return res.json({ message: 'Message sent' });

//   const MESSAGE_TEXT = 'Check the logs of @terasop_bot. Join here: https://t.me/+AXbG2ERsby8xZWM1';

//     // const users = await prisma.video.findMany({
//     //     distinct: ['user'],
//     //     select: { user: true },
//     //   });

//       // console.log(users[45]);
//       // users.forEach((user) => {
//       //   bot.sendMessage(user.user, MESSAGE_TEXT);
//       // });
//       let i = await bot.sendMessage("1479193538", MESSAGE_TEXT);


//       return Response.json({ message: 'Messages sent', i});
//     }