import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/message", { message: input });
      setInput("");
    } catch (error) {
      console.error("Error creating message:", error);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
