
import React, { useState } from "react";

function MessageForm() {
  const [message, setMessage] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    try {
      const response = await fetch("http://localhost:4001/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (response.ok) {
        console.log("Message sent to the server successfully");
        
        setMessage("");
      } else {
        console.error("Failed to send message to the server");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div>
      <h2>Send a Message</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Type your message here to the database..."
          value={message}
          onChange={handleMessageChange}
        />
        <button type="submit">Send to DB</button>
      </form>
    </div>
  );
}

export default MessageForm;
