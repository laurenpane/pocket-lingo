const express = require("express"),
  bodyParser = require("body-parser");

const db = require("./models");

const app = express();

const port = process.env.PORT || 5000;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/api/germanQs", (req, res) => {});

app.get("/api/germanQs/:id", (req, res) => {});

app.post("/api/germanQS", (req, res) => {});

app.delete("/api/germanQs:id", (req, res) => {});

app.put("/api/germanQs:id", (req, res) => {});

app.listen(port, () => {
  console.log(`API running on http:localhost:${port}`);
});
