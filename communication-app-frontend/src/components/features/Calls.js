// communication-app-frontend/src/components/features/Calls.js

import React, { useState } from "react";

function Calls() {
  const [callType, setCallType] = useState("audio"); // State to track call type
  const [callState, setCallState] = useState("idle"); // State to track call state

  const handleToggleCallType = () => {
    // Toggle between audio and video call types
    setCallType((prevType) => (prevType === "audio" ? "video" : "audio"));
  };

  const handleStartCall = () => {
    // Logic to start the call
    setCallState("ongoing");
  };

  const handleEndCall = () => {
    // Logic to end the call
    setCallState("ended");
  };

  return (
    <div>
      <h1>Calls</h1>
      {/* UI elements for initiating calls and handling call states */}
      <div>
        {callType === "audio" ? (
          <span>Audio Call</span>
        ) : (
          <span>Video Call</span>
        )}
        <button onClick={handleToggleCallType}>
          {callType === "audio" ? "Switch to Video" : "Switch to Audio"}
        </button>
      </div>

      <div>
        <button onClick={handleStartCall} disabled={callState === "ongoing"}>
          Start Call
        </button>
        <button onClick={handleEndCall} disabled={callState !== "ongoing"}>
          End Call
        </button>
      </div>

      <div>
        <p>Call State: {callState}</p>
      </div>
    </div>
  );
}

export default Calls;
