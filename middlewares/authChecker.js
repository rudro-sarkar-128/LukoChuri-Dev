
async function authCheck(req, res, next) {
    let is_logged_in = true;
    if (is_logged_in) {
        next();
    } else {
        res.redirect('/login');
    }
}

async function inAuthCheck(req, res, next) {
    let is_logged_in = false;
    if (is_logged_in) {
        res.redirect('/home')
    } else {
        next();
    }
}

module.exports = {
    authCheck,
    inAuthCheck
};