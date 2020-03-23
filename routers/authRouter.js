const express = require("express")
const bc = require("bcryptjs")
const authRouter = express.Router()
const userModel = require("../models/userModel")

authRouter.get("/logout", (req, res) => {
    if (req.session) {
        req.session.destroy(err => {
            if(err) {
                res.json("YOU CANNOT LEAVE")
            } else {
                res.json("good bye")
            }
        })
    }
})

authRouter.post("/register", (req, res) => {
    const {username, password} = req.body
    const hashPassword = bc.hashSync(password, 12)
    userModel.add({username, password: hashPassword})
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).end()
    })
})

authRouter.post("/login", (req, res) => {
    const {username, password} = req.body
    userModel.getBy({username}).first()
    .then(user => {
        console.log("yo")
        if (user && bc.compareSync(password, user.password)) {
            req.session.user = user
            res.json(`Welcome ${user.username}`)
        } else {
            res.status(401).end()
        }
        
    })
    .catch(err => {
        res.status(500).end()
    })
})

module.exports = authRouter
