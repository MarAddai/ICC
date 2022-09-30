const mongoose = require("mongoose");

const dataModelICC = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  message: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Data", dataModelICC );
