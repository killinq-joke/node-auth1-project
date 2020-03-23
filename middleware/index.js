module.exports = {
    logValidation
}

function logValidation(req, res, next) {
    if(req.session && req.session.user) {
        next()
    } else {
        res.status(401).end()
    }
}