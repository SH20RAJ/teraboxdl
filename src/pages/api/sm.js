// pages/api/sendMessage.js

export default async function handler(req, res) {
    const { chatId, message } = { chatId: "1479193538", message: "Hello from Vercel!"};
  
    if (!chatId || !message) {
      return res.status(400).json({ error: "chatId and message are required" });
    }
  
    const botToken = "6668998731:AAEQlZFKeNeQTsfnXE97H-nkzoTayMPYbmg";
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
  
    try {
      const response = await fetch(telegramApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Telegram API error: ${errorData.description}`);
      }
  
      const data = await response.json();
      res.status(200).json({ message: "Message sent successfully", data });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  