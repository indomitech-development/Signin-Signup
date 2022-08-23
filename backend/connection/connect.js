const mongoose = require("mongoose");

const connect = async () => {
  await mongoose.connect(
    "mongodb+srv://admin:admin12@cluster0.bi1f3lr.mongodb.net/?retryWrites=true&w=majority",
    () => console.log("database COnnected")
  );
};
module.exports = connect;
