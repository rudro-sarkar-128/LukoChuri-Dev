
const landingRouter = require('express').Router();

// Placeholder
let currentUserCount = 760;

landingRouter.get('/', (req, res) => {
    res.render('landing', { userCount: currentUserCount });
});

module.exports = landingRouter;
