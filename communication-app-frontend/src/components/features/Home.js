import React from "react";
import { Header } from "./Header";

function Home() {
  return (
    <div className="home-container">
      {/* Header */}
      <Header />

      {/* Message and Calls Columns */}
      <div className="columns-container">
        <div className="messages-column">
          {/* Placeholder for Messages */}
          <h3>Messages</h3>
          {/* Display messages here */}
        </div>
        <div className="calls-column">
          {/* Placeholder for Calls */}
          <h3>Calls</h3>
          {/* Display calls here */}
        </div>
      </div>

      {/* Floating Button for New Chat */}
      <div
        className="new-chat-button"
        onClick={() => console.log("New Chat clicked")}
      >
        +
      </div>
    </div>
  );
}

export default Home;
