//Test Code
// require("dotenv").config();

// const express = require("express");
// const app = express();
// const port = process.env.PORT || 3001;
// const path = require("path");

// const MongoClient = require("mongodb").MongoClient;
// const assert = require("assert");

// const url = process.env.MONGODB_URL;
// const dbName = "german";

// const client = new MongoClient(url, { useUnifiedTopology: true });

// client.connect(function (err) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   const db = client.db(dbName);

//   app.get("/rest/questions", (req, res) => {
//     db.collection("questions")
//       .find({})
//       .toArray((err, results) => {
//         if (err) throw err;
//         res.send(results);
//       });
//   });

//   app.use(express.static(path.join(__dirname, "../build")));

//   app.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, "../build/static/index.html"));
//   });

//   app.listen(port, () =>
//     console.log(`Example app listening at http://localhost:${port}`)
//   );
// });

//my code
const express = require("express");
// const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");
const MongoClient = require("mongodb").MongoClient;
// var key = process.env.API_KEY;
const url = process.env.MONGODB_URL;
const client = new MongoClient(url, { useUnifiedTopology: true });

require("dotenv").config();

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

  app.use(express.static(path.join(__dirname, "../build/static")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../build/static/index.html"));
  });

  app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`);
  });
});
