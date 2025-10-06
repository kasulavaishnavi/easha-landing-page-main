import React, { useState } from "react";
import { FaRobot } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Chatbot = () => {
  const initialMessages = [
    { sender: "bot", text: "Hi there!" },
    { sender: "bot", text: "I'm eAsha AI. What's your name?" },
  ];

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [stage, setStage] = useState("awaitingName");
  const [loading, setLoading] = useState(false);
  const [hover, setHover] = useState(false);

  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    query: "",
  });

  const openBot = () => setOpen(true);
  const closeBot = () => {
    setOpen(false);
    setMessages(initialMessages);
    setInput("");
    setStage("awaitingName");
    setLoading(false);
    setUserData({ name: "", phone: "", email: "", query: "" });
  };

  const handleInputChange = (e) => {
    let val = e.target.value;
    if (stage === "awaitingName") val = val.replace(/[^a-zA-Z\s]/g, "");
    if (stage === "awaitingNumber") val = val.replace(/\D/g, "").slice(0, 10);
    setInput(val);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    // Stage validation
    if (stage === "awaitingName" && !/^[a-zA-Z\s]+$/.test(input.trim())) {
      alert("Please enter only alphabets for your name.");
      return;
    }
    if (stage === "awaitingNumber" && !/^\d{10}$/.test(input.trim())) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    if (stage === "awaitingEmail" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.trim())) {
      alert("Please enter a valid email address.");
      return;
    }

    // Add user message
    const userMessage = { sender: "user", text: input.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    // Save data per stage
    const updatedUserData = { ...userData };
    if (stage === "awaitingName") updatedUserData.name = input.trim();
    if (stage === "awaitingNumber") updatedUserData.phone = input.trim();
    if (stage === "awaitingEmail") updatedUserData.email = input.trim();
    if (stage === "awaitingQuery") updatedUserData.query = input.trim();
    setUserData(updatedUserData);
    setInput("");

    // Stage transitions
    if (stage === "awaitingName") {
      setMessages([
        ...updatedMessages,
        { sender: "bot", text: `Nice to meet you, ${input.trim()}! Can I have your phone number?` },
      ]);
      setStage("awaitingNumber");
    } else if (stage === "awaitingNumber") {
      setMessages([...updatedMessages, { sender: "bot", text: "Thanks! Can I also get your email address?" }]);
      setStage("awaitingEmail");
    } else if (stage === "awaitingEmail") {
      setMessages([...updatedMessages, { sender: "bot", text: "Great! What health-related question can I help you with today?" }]);
      setStage("awaitingQuery");
    } else if (stage === "awaitingQuery") {
      setLoading(true);

      const payload = {
        access_key: "05f47beb-d9e4-4c10-8916-67a61e02676a",
        name: updatedUserData.name,
        email: updatedUserData.email,
        phone: updatedUserData.phone,
        message: updatedUserData.query,
        to: "0099vaish@gmail.com", // Correct email
        subject: "New Health Query from eAsha AI Chatbot",
      };

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const data = await response.json();
        console.log("Form submitted:", data);

        setMessages([
          ...updatedMessages,
          { sender: "bot", text: "Thanks for your query! Our team will contact you soon." },
        ]);
      } catch (err) {
        console.error("Failed to send form:", err);
        setMessages([...updatedMessages, { sender: "bot", text: "Oops! Something went wrong. Please try again later." }]);
      }

      setLoading(false);
      setStage("done");
    }
  };

  const styles = {
    container: { position: "fixed", bottom: "60px", right: "6px", marginRight: "30px", zIndex: 9999 },
    toggleBtn: {
      backgroundColor: "#cf7e06ff",
      color: "white",
      border: "none",
      padding: "20px",
      borderRadius: "50%",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transition: "0.2s",
    },
    window: {
      width: "300px",
      height: "420px",
      background: "#fff",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
      display: "flex",
      flexDirection: "column",
    },
    header: { background: "#00A99D", color: "white", padding: "11px", display: "flex", justifyContent: "space-between", alignItems: "center" },
    body: { flex: 1, padding: "10px", overflowY: "auto", fontSize: "14px", display: "flex", flexDirection: "column", gap: "8px" },
    footer: { display: "flex", borderTop: "1px solid #ddd" },
    input: { flex: 1, border: "none", padding: "10px", outline: "none", backgroundColor: "#f8f9fa" },
    sendBtn: { background: "#00A99D", color: "white", border: "none", padding: "0 15px", cursor: "pointer" },
    messageBot: { backgroundColor: "#f1f1f1", padding: "8px 12px", borderRadius: "12px", maxWidth: "80%", alignSelf: "flex-start" },
    messageUser: { backgroundColor: "#198754", color: "white", padding: "8px 12px", borderRadius: "12px", maxWidth: "80%", alignSelf: "flex-end" },
  };

  return (
    <div style={styles.container}>
      {open ? (
        <div style={styles.window}>
          <div style={styles.header}>
            <h6>eAsha AI</h6>
            <button onClick={closeBot} style={{ background: "none", border: "none", color: "white" }}>
              <IoMdClose size={20} />
            </button>
          </div>
          <div style={styles.body}>
            {messages.map((msg, idx) => (
              <div key={idx} style={msg.sender === "bot" ? styles.messageBot : styles.messageUser}>
                {msg.text}
              </div>
            ))}
            {loading && <div style={styles.messageBot}>Typing...</div>}
          </div>
          <div style={styles.footer}>
            <input
              type="text"
              placeholder={
                stage === "awaitingName"
                  ? "Enter your name..."
                  : stage === "awaitingNumber"
                  ? "Enter your 10-digit phone number..."
                  : stage === "awaitingEmail"
                  ? "Enter your email..."
                  : "Type your query..."
              }
              value={input}
              onChange={handleInputChange}
              style={styles.input}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              disabled={loading || stage === "done"}
            />
            <button style={styles.sendBtn} onClick={handleSend} disabled={loading || stage === "done"}>
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          style={styles.toggleBtn}
          onClick={openBot}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <FaRobot size={hover ? 28 : 24} />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
