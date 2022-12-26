const mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 5,
  },
  id: {
    type: Number,
    required: true,
  },
  dept: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    min: 10,
  },
});

module.exports = mongoose.model("Student", studentSchema);
