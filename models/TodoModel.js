const mongoose = require("mongoose");

const  TodoSchema = new mongoose.Schema({
  emailAddress: {
    type: String,
    required: true
  },
  assignUserEmailAddress: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: [true, "Kindly,enter the title"],
  },
  desc: {
    type: String,
    required: [true, "Kindly,enter the description "],
  },
  status: {
    type: String,
    default:'Active'
  },
  tag: {
    type: String,
    default:"feature"
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});



module.exports = mongoose.model("Todo", TodoSchema);