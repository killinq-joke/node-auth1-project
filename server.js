const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const session = require("express-session")
const userRouter = require("./routers/userRouter")
const authRouter = require("./routers/authRouter")

const server = express()

server.use(express.json())
server.use(cors())
server.use(helmet())
server.use("/api/users", userRouter)
server.use("/auth", authRouter)
server.use(session)

module.exports = server