const express = require("express");

const app = express();

app.get("/api/home", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Hello World...it's kind of working...",
  });
});

app.listen(8080, () => {
  console.log("Listening on 8080");
});
