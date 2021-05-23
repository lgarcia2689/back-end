const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

const authRouter = require("./auth/auth-router");
const usersRouter = require("./users/users-router");
const recipesRouter = require("./recipes/recipes-router");

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/recipes", recipesRouter);

server.use("*", (_req, res) => {
  res.status(200).json({ message: "server up" });
});

module.exports = server;
