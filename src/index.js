const express = require("express");
const bodyParser = require("body-parser");
const authRouter = require("./routes/auth");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", authRouter);
app.get("/", (req, res) => {
  res.send("Home page");
});

const PORT = 8000;
app.listen(PORT, () =>
  console.log(`app is listening on the port ${PORT} ....`)
);
