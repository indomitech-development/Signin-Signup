const express = require("express");
const dotenv = require("dotenv").config();
const connect = require("./connection/connect");
const dataRoutes = require("./routes/userRoute");
const app = express();
connect();
app.use(express.json());
app.use("/", dataRoutes);
app.listen(3090, () => {
  console.log("Database PORT Connected");
});
