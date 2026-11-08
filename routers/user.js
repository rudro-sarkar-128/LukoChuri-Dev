
const userRouter = require('express').Router();

// Controllers
const { serveLoginPage } = require("../controllers/login.controller");
const { serveJoinPage } = require("../controllers/join.controller");

// Middlewares
const { authCheck, inAuthCheck } = require("../middlewares/authChecker");

userRouter.get('/login', inAuthCheck, serveLoginPage);
userRouter.get('/join', inAuthCheck, serveJoinPage);

module.exports = userRouter;