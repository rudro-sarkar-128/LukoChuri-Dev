
async function serveLoginPage(req, res) {
    res.render('login');
}

module.exports = {
    serveLoginPage,
}