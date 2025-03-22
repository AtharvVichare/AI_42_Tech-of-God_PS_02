import { useState } from "react";
import "./App.css";
import { FiSend } from "react-icons/fi"; // Import send icon

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;

    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Hello! How can I assist you today?", sender: "bot" },
      ]);
    }, 1000);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">Chat with AI</div>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>
          <FiSend /> {/* Send button icon */}
        </button>
      </div>
    </div>
  );
}

export default App;
