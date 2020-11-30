const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const authRouter = require("./routes/auth");
const delay = require("./middleware/delay");
const envConfig = require("./utils/env");
const uncaughtException = require("./exceptions/uncaught_exceptions");

process.on("uncaughtException", uncaughtException);
envConfig();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(delay);
app.use("/auth", authRouter);
app.get("/", (req, res) => {
  res.send("Home page");
});

const PORT = 8000;
app.listen(PORT, () =>
  console.log(`app is listening on the port ${PORT} ....`)
);
