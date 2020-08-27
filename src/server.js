const express = require("express"),
  bodyParser = require("body-parser");

const db = require("./Backend/models");

const app = express();

const port = process.env.PORT || 5000;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/api/germanQs", (req, res) => {
  db.GermanQ.find(err, (allGermanQs) => {
    if (err) {
      console.log(`index error: ${err}`);
    } else {
      res.json({ germanQs: allGermanQs });
    }
  });
});

app.get("/api/germanQs/:id", (req, res) => {
  db.GermanQ.findOne(
    {
      _id: req.params.id,
    },
    (err, germanQ) => {
      if (err) {
        console.log(`show error: ${err}`);
      }
      res.json(germanQ);
    }
  );
});

app.post("/api/germanQS", (req, res) => {
  let newGermanQ = new db.GermanQ(req.body);
  newGermanQ.save((err, germanQ) => {
    if (err) {
      console.log(`save error: ${err}`);
    }
    console.log(`new germanQ saved: ${germanQ.q}`);
    res.json(germanQ);
  });
});

app.delete("/api/germanQs:id", (req, res) => {
  let germanQId = req.params.id;
  db.GermanQ.findOneAndRemove({
    _id: germanQId,
  })
    .populate("germanQ")
    .exec((err, deletedGermanQ) => {
      res.json(deletedGermanQ);
    });
});

app.put("/api/germanQs:id", (req, res) => {
  let germanQId = req.params.id;
  db.GermanQ.findOne(
    {
      _id: germanQId,
    },
    (err, foundGermanQ) => {
      if (err) {
        console.log(`German question not found`);
      }
      foundGermanQ.q = req.body.q || foundGermanQ.q;
      foundGermanQ.difficulty = req.body.difficulty || foundGermanQ.difficulty;
      foundGermanQ.topic = req.body.topic || foundGermanQ.topic;
      console.log(`updating: ${foundGermanQ.q}`);
      foundGermanQ.save((err, germanQ) => {
        if (err) {
          console.log(`error: ${err}`);
        }
        console.log(`updated: ${germanQ.q}`);
        res.json(germanQ);
      });
    }
  );
});

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
