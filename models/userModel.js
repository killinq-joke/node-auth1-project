const db = require("../data/db-configs")

module.exports = {
    getAll,
    add
}

function getAll() {
    return db("users")
}

function getById(id) {
    return db("users").where({id})
}

async function add(user) {
    const [id] = await db("users").insert(user)
    return getById(id)
}