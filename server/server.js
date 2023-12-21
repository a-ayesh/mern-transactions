const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = 4000;
const app = express();
app.use(cors);

mongoose
  .connect(
    "mongodb+srv://admin:admin123@cluster0.nyroej7.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
