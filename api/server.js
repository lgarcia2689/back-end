const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("*", (_req, res) => {
  res.status(200).json({ message: "server up" });
});

module.exports = server;
