import prisma from "../../../../prisma";
import TelegramBot from "node-telegram-bot-api";

const token = process.env.TERASOP;
const bot = new TelegramBot(token);
const botlogger = "-1002221558664";
const userid = 1479193538

export const POST = async (req, res) => {

  let response = await req.json();

  let message = response.message;
  
  // get text from the request
  // const { text } = { text: "Hello World!" };
  // send the text to the bot
  // bot.sendMessage(1479193538, text);
  // return Response.json({ message: 'Message sent' });

  const MESSAGE_TEXT =
    "Check the logs of @terasop_bot. Join here: https://t.me/+AXbG2ERsby8xZWM1";

  const users = await prisma.video.findMany({
    distinct: ["user"],
    select: { user: true },
  });
  let successfullusers = [];
  let failedusers = [];
  users.forEach((user) => {
    try {
      bot.sendMessage(user.user, message || MESSAGE_TEXT);
      console.log(`Message sent to user ${user.user}`);
      successfullusers.push(user.user);

    } catch (error) {
      console.error(`Error sending message to user ${user.user}`);
      failedusers.push(user.user);
    }
  });

  bot.sendMessage(userid, message || MESSAGE_TEXT);

  return Response.json({ message: "Messages sent", i:successfullusers.length , j : failedusers.length, successfullusers, failedusers});
};


export const TEST = async (req, res) => {

  let response = await req.json();

  let message = response.message;
  
  // get text from the request
  // const { text } = { text: "Hello World!" };
  // send the text to the bot
  // bot.sendMessage(1479193538, text);
  // return Response.json({ message: 'Message sent' });

  const MESSAGE_TEXT =
    "Check the logs of @terasop_bot. Join here: https://t.me/+AXbG2ERsby8xZWM1";

  // const users = await prisma.video.findMany({
  //   distinct: ["user"],
  //   select: { user: true },
  // });
  let successfullusers = [];
  let failedusers = [];
  // users.forEach((user) => {
  //   try {
  //     bot.sendMessage(user.user, message || MESSAGE_TEXT);
  //     console.log(`Message sent to user ${user.user}`);
  //     successfullusers.push(user.user);

  //   } catch (error) {
  //     console.error(`Error sending message to user ${user.user}`);
  //     failedusers.push(user.user);
  //   }
  // });

  bot.sendMessage(userid, message || MESSAGE_TEXT);

  return Response.json({ message: "Messages sent", i:successfullusers.length , j : failedusers.length, successfullusers, failedusers});
};
