const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use("/", (req, res, next) => {
    res.send("app is running");
});

mongoose
    .connect(
        "mongodb+srv://admin:xodEn3oviNvP9iBm@cluster0.0ciydyk.mongodb.net/test"
    )
    .then(() => console.log("Connected to Database"))
    .then(() => {
        app.listen(5000);
    })
    .catch((err) => console.log(err));
