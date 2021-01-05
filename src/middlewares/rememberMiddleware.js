function rememberMiddleware (req, res, next) {
    next();

    if (req.cookies.recordarme != undefined && req.session.user == undefined) {
        req.session.user = req.cookies.recordarme;
    }
}

module.exports = rememberMiddleware;