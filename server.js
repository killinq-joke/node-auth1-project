const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session");

const userRouter = require("./users/user-router");
const authRouter = require("./auth/auth-router");

const midware = require("./middleware")

const server = express();

const sessionConfig = {
  name: "bruh",
  secret: process.env.SECRET || "secret",
  resave: false,
  saveUninitialized: process.env.SEND_COOKIES || true,
  cookie: {
    maxAge: 1000 * 30,
    secure: process.env.SECURE || false,
    httpOnly: true,
  },
};

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(session(sessionConfig))
server.use("/api/users", midware.authenticate, userRouter);
server.use(authRouter);

module.exports = server;
