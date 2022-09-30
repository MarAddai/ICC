require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
const app = express();

app.use(express.json());

//imports route.js into this file
const routes = require("./routes/routes");
// /api is the base endpoint and the 2nd param is the content of
app.use(routes);

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
