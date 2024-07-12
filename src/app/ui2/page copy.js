// app/send-messages/page.js

'use client';

import { useState } from 'react';

export default function SendMessagesPage() {
  const [loading, setLoading] = useState(false);

  const sendMessages = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/sendMessages', {
        // method: 'POST',
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error(error);
      alert('Error sending messages');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Send Telegram Messages</h1>
      <button onClick={sendMessages} disabled={loading}>
        {loading ? 'Sending...' : 'Send Messages'}
      </button>
    </div>
  );
}
