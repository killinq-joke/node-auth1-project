const express = require("express")
const bc = require("bcryptjs")
const authRouter = express.Router()
const userModel = require("../models/userModel")

authRouter.get("/logout", (req, res) => {

})

authRouter.post("/register", (req, res) => {
    const {username, password} = req.body
    const hashPassword = bc.hashSync(password, 12)
    userModel.add({username, password: hashPassword})
    .then(response => {
        res.json(response)
    })
    .catch(err => {
        res.status(500).end()
    })
})

authRouter.post("/login", (req, res) => {
    
})

module.exports = authRouter
