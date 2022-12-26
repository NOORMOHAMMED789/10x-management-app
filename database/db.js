const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const url = process.env.DATABASE_URL || "mongodb://localhost:27017/myClass";

const connection = async () => {
  try {
    await mongoose.connect(url);
    const type = url === process.env.DATABASE_URL ? "remote" : "local";
    console.log(`connected with ${type} database`);
  } catch (err) {
    console.log("error while connecting to the database");
  }
};

module.exports = connection;
