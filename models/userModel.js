const db = require("../data/db-configs")

module.exports = {
    getAll,
    getById,
    getBy,
    add
}

function getAll() {
    return db("users")
}

function getById(id) {
    return db("users").where({id})
}

function getBy(filter) {
    return db("users").where(filter)
}

async function add(user) {
    const [id] = await db("users").insert(user)
    return getById(id)
}