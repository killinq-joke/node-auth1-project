const express = require("express")
const userRouter = express.Router()
const userModel = require("../models/userModel")
const midW = require("../middleware")

userRouter.get("/", midW.logValidation, (req, res) => {
    userModel.getAll()
    .then(response => {
        res.json(response)
    })
    .catch(err => {
        res.status(500).end()
    })
})

module.exports = userRouter