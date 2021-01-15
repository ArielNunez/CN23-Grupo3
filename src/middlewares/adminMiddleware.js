module.exports = (req,res,next) => {
    if(req.session.user && req.session.user.category == 'admin') {
        next();
    } else {
        return res.redirect('/');
    }
}