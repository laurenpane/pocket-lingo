const express = require("express");
// const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
// const assert = require('assert');
require("dotenv").config();

const MongoClient = require("mongodb").MongoClient;
// var key = process.env.API_KEY;
const url = process.env.MONGODB_URL;
const client = new MongoClient(url, { useUnifiedTopology: true });
client.connect((err, db) => {
  if (err) throw err;
  var dbo = db.db("german");
  app.get("/rest/questions", (req, res) => {
    dbo
      .collection("questions")
      .find({})
      .toArray((err, result) => {
        if (err) throw err;
        res.send(result);
        db.close();
      });
  });

  app.use(express.static(path.join(__dirname, "../build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../build/index.html"));
  });

  app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
  });
});
