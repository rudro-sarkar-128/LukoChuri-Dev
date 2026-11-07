require('dotenv').config();
const express = require('express');
const path = require("path");

const app = express();

const staticPath = path.join(`${__dirname}/public`);
app.use(express.static(staticPath));

app.set('view engine', 'ejs');

// Routers
const landingRouter = require("./routers/landing");

app.use(landingRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});

