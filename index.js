const express = require("express");
const path = require("path");

const server = express();
const PORT = 3500;

server.use(express.static("public"));

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

server.get("/index.html", (req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

server.get("/error404.html", (req, res) => {
  res.status(404);
  res.sendFile(path.join(__dirname, "public", "error404.html"));
});

server.listen(PORT, () => {
  console.log(`Server created successfully on port ${PORT}`);
});