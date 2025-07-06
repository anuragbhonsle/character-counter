import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const paragraph = req.body["paragraph"];
  const numLetters = paragraph.length;
  const numWords = paragraph.trim().split(/\s+/).length;
  const numSentences = paragraph.split(/[.!?]+/).filter(Boolean).length;

  res.render("index.ejs", {
    number: numLetters,
    words: numWords,
    sentences: numSentences,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
