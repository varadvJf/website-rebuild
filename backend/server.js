const express = require("express");
const app = express();

app.use(express.json());

app.post("/chat", (req, res) => {
  const msg = req.body.message;

  let reply = "Default reply";

  if (msg.includes("hello")) reply = "Hello from server!";
  if (msg.includes("services")) reply = "We offer AI + Web services";

  res.json({ reply });
});

app.listen(5000, () => console.log("Server running"));
