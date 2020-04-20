const db = require("../data/dbConfigs")

module.exports = {
    findAll,
    findBy,
    add
}

function findAll() {
    return db("users")
}

function findBy(filter) {
    return db("users").where(filter)
}

function add(user) {
    return db("users").insert(user)
}