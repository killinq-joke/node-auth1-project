const db = require("../data/dbConfigs")

module.exports = {
    findAll,
    add
}

function findAll() {
    return db("users")
}

function add(user) {
    return db("users").insert(user)
}