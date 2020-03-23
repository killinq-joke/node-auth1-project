const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const session = require("express-session")
const userRouter = require("./routers/userRouter")
const authRouter = require("./routers/authRouter")

const server = express()

const sessionConfig = {
  name: 'sessionId',
  secret: 'keep it secret, keep it safe!',
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: false,   // https
    httpOnly: true,  // when true, js can't get to the cookie
  },
  // we should only save sessions when user allows it
  resave: false,
  saveUninitialized: false,
  // store: new KnexSessionStore({
  //   knex: require('../database/dbConfig.js'), // configured instance of knex
  //   tablename: 'sessions', // table that will store sessions inside the db, name it anything you want
  //   sidfieldname: 'sid', // column that will hold the session id, name it anything you want
  //   createtable: true, // if the table does not exist, it will create it automatically
  //   clearInterval: 1000 * 60 * 60, // time it takes to check for old sessions and remove them from the database to keep it clean and performant
  // }),
}
server.use(session(sessionConfig))
server.use(express.json())
server.use(cors())
server.use(helmet())
server.use("/api/users", userRouter)
server.use("/auth", authRouter)


module.exports = server