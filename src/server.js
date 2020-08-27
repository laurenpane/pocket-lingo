const express = require("express");
// const bodyParser = require("body-parser");
// const db = require("./Backend/models");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
require("dotenv").config();

var MongoClient = require("mongodb").MongoClient;
// var key = process.env.API_KEY;
var url = process.env.MONGODB_URL;

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db("german");
  dbo
    .collection("questions")
    .find({})
    .toArray((err, result) => {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
