// const express = require("express");
// const app = express();
// const port = process.env.PORT || 3001;
// const shows = require("./LanguageGallery");
// const path = require("path");

// app.get("/LanguageGallery", (req, res) => res.send(shows));

// app.use(express.static(path.join(__dirname, "../../build")));

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "../../build/index.html"));
// });

// app.listen(port, () =>
//   console.log(`Example app listening at http://localhost:${port}`)
// );

// // app.get("/LanguageGallery/:langId", (req, res) => {
// //   dbo.collection("langs").findOne({ id: req.params.langId }, (err, doc) => {
// //     if (err) throw err;
// //     res.send(doc);
// //   });
// // });
