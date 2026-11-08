
const { sendOTP } = require("../config/mailer");

async function serveJoinPage(req, res) {
    res.render('join');
}

module.exports = {
    serveJoinPage,
}