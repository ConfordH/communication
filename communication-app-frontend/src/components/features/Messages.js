// Function to handle sending a message
function sendMessage() {
  // Get the input element containing the message
  var messageInput = document.querySelector(".chatbox-input input");

  // Get the value of the input
  var messageText = messageInput.value.trim();

  // Check if the message is not empty
  if (messageText !== "") {
    // Create a new message box for the user's message
    var myMessageBox = document.createElement("div");
    myMessageBox.className = "message-box my-message";
    myMessageBox.innerHTML = "<p>" + messageText + "<br /><span>Now</span></p>";

    // Append the message box to the chat container
    var chatContainer = document.querySelector(".chat-container");
    chatContainer.appendChild(myMessageBox);

    // Clear the input field
    messageInput.value = "";

    // Scroll to the bottom to show the latest message
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
}

// Event listener for sending a message on Enter key press
document
  .querySelector(".chatbox-input input")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevents adding a new line in the input
      sendMessage();
    }
  });

// receiving a message
function receiveMessage(messageText) {
  // Create a new message box for the friend's message
  var friendMessageBox = document.createElement("div");
  friendMessageBox.className = "message-box friend-message";
  friendMessageBox.innerHTML =
    "<p>" + messageText + "<br /><span>Now</span></p>";

  // Append the message box to the chat container
  var chatContainer = document.querySelector(".chat-container");
  chatContainer.appendChild(friendMessageBox);

  // Scroll to the bottom to show the latest message
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

//simulating receiving a message after a delay
setTimeout(function () {
  receiveMessage("Hello! This is a sample message.");
}, 200000);
