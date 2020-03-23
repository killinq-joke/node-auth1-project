const express = require("express")
const userRouter = express.Router()
const userModel = require("../models/userModel")

userRouter.get("/", (req, res) => {
    userModel.getAll()
    .then(response => {
        res.json(response)
    })
    .catch(err => {
        res.status(500).end()
    })
})

userRouter.get("/:id", (req, res) => {
    
})

userRouter.post("/", (req, res) => {
    const user = req.body
    userModel.add(user)
    .then(response => {
        res.status(201).json(response)
    })
    .catch(err => {
        res.status(500).end()
    })
})

module.exports = userRouter