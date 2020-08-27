const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pocket-lingo");

const GermanQ = require("./germanQ");

module.exports.GermanQ = GermanQ;
