const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const dotenv = require("dotenv").config();
app.use(express.json());
const connection = require("./database/db");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/myClass", require("./routers/newClass"));
connection();

app.listen(PORT, () => {
  console.log(`server is running at the ${PORT}`);
});
