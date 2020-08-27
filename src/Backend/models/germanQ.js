const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const GermanQSchema = new Schema({
  q: String,
  difficulty: Number,
  topic: String,
});

const GermanQ = mongoose.model("GermanQ", GermanQSchema);

module.exports = GermanQ;
