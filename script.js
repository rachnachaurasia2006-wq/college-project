const eventData = {
  venue: "Shree Swaminayan Institute Of Technology,Nr.Bhat circle,Ahmedabad,Gujarat",
  date: "September 5, 2026",
  time: "10:00 AM ",
  day: "Saturday",
  venue: "Shree Swaminayan Institute Of Technology,Nr.Bhat circle,Ahmedabad,Gujarat",
  date: "September 15, 2026",
  time: "10:00 AM ",
  day: "Tuesday",
venue: "Shree Swaminayan Institute Of Technology,Nr.Bhat circle,Ahmedabad,Gujarat",
  date: "September 15, 2026",
  time: "10:00 AM ",
  day:"Tuesday",
venue: "Shree Swaminayan Institute Of Technology,Nr.Bhat circle,Ahmedabad,Gujarat",
  date: "October 11, 2026",
  time: "8:00 PM ",
  day: "Sunday",
venue: "Shree Swaminayan Institute Of Technology,Nr.Bhat circle,Ahmedabad,Gujarat",
  date: "August 29, 2026",
  time: "9:00 AM ",
  day: "Saturday",
venue: "Shree Swaminayan Institute Of Technology,Nr.Bhat circle,Ahmedabad,Gujarat",
  date: "February 11, 2027",
  time: "11:00 AM ",
  day: "Wednesday",


  tickets: {
    regular: "₹300",
    vip: "₹800"
  },

schedule: `📝 8:00 AM - Registration

👩‍🏫 10:00 AM - Celebration of Teacher's Day

⚙️ 10:00 AM - Celebration of Engineer's Day

💻 10:00 AM - Hackathon Competition for Hackertz

🎉 8:00 PM - Navratri Dandiya & Garba Night

🏆 9:00 AM - Sports Competition

🤖 11:00 AM - Robo Fight`

};


function toggleChat() {

  const chatBox = document.getElementById("chatBox");

  chatBox.style.display =
    chatBox.style.display === "flex"
      ? "none"
      : "flex";
}


function handleEnter(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendMessage();
  }
}


function askQuestion(question) {

  document.getElementById("messageInput").value = question;

  sendMessage();
}
function sendMessage() {
  const input = document.getElementById("messageInput");
  const messages = document.getElementById("messages");

  if (!input || !messages) {
    console.error("Chatbot input or message area was not found.");
    return;
  }

  const originalQuestion = input.value.trim();

  if (!originalQuestion) return;

  addMessage(originalQuestion, "user");

  input.value = "";

  try {
    const answer = getAnswer(originalQuestion.toLowerCase());

    setTimeout(() => {
      addMessage(answer, "bot");
    }, 400);
  } catch (error) {
    console.error("Chatbot error:", error);
    addMessage("Sorry, something went wrong. Please try again.", "bot");
  }
}



function getAnswer(question) {

  if (
    question.includes("where") ||
    question.includes("venue") ||
    question.includes("location")
  ) {

    return `📍 The event will be held at ${eventData.venue}.`;

  }


  if (
    question.includes("when") ||
    question.includes("date")
  ) {

    return `📅 The event is on ${eventData.date}.`;

  }


  if (
    question.includes("time") ||
    question.includes("start")
  ) {

    return `🕐 The event runs from ${eventData.time}.`;

  }


  if (
    question.includes("ticket") ||
    question.includes("price") ||
    question.includes("cost")
  ) {

    return `
🎟️ Ticket prices:

Regular: ${eventData.tickets.regular}
VIP: ${eventData.tickets.vip}
`;

  }


  if (
    question.includes("schedule") ||
    question.includes("session")
  ) {

    return `📅 Event schedule:\n${eventData.schedule}`;

  }


  if (
    question.includes("hello") ||
    question.includes("hi")
  ) {

    return "Hello! 👋 How can I help you with the event?";

  }


  return `
Sorry, I don't have that information yet.

You can ask me about:
📍 Venue
📅 Date
🕐 Timing
🎟️ Tickets
📋 Schedule
`;

}


function addMessage(text, sender) {

  const messages =
    document.getElementById("messages");

  const div =
    document.createElement("div");

  div.className =
    sender === "user"
      ? "user-message"
      : "bot-message";

  div.textContent = text;

  messages.appendChild(div);

  messages.scrollTop =
    messages.scrollHeight;
}
document.addEventListener("DOMContentLoaded", function () {
const input = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");

if (!input || !sendButton) {
console.error("Chatbot input or Send button not found.");
return;
}

sendButton.addEventListener("click", function (event) {
event.preventDefault();
sendMessage();
});

input.addEventListener("keydown", function (event) {
if (event.key === "Enter") {
event.preventDefault();
sendMessage();
}
});
});