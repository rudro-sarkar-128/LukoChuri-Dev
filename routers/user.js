
const userRouter = require('express').Router();

// Controllers
const { serveLoginPage } = require("../controllers/login.controller");

userRouter.get('/login');