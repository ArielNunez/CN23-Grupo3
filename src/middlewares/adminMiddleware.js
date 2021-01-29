module.exports = (req,res,next) => {
    if(req.session.user && req.session.user.categoria == 2) {
        next();
    } else {
        return res.redirect('/');
    }
}