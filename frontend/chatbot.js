const input = document.getElementById("userInput");
const messages = document.getElementById("messages");

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let userText = input.value;
    addMessage("You: " + userText);

    let botReply = getReply(userText);
    addMessage("Bot: " + botReply);

    input.value = "";
  }
});

function addMessage(text) {
  let msg = document.createElement("div");
  msg.innerText = text;
  messages.appendChild(msg);
}

function getReply(text) {
  text = text.toLowerCase();

  if (text.includes("hello")) return "Hi! How can I help?";
  if (text.includes("services")) return "We provide web development services.";
  if (text.includes("contact")) return "Please fill contact form.";

  return "Sorry, I didn't understand.";
}
