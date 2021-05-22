const { PORT } = require("./env-fallbacks");

const path = require("path");
const express = require("express");

const server = require("./api/server");

server.use(express.static(path.join(__dirname, "client/dist")));

server.get("*", (_req, res) => {
  // if you want to serve a SPA using Express you totally can!
  res.sendFile(path.join(__dirname, "client/dist", "index.html"));
});

server.listen(PORT, () => {
  console.log("listening on " + PORT);
});
