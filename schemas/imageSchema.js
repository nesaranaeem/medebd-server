const { default: mongoose } = require("mongoose");

// Define Image schema
const imageSchema = new mongoose.Schema({
  imageSlug: { type: String, required: true },
  imageURL: { type: String, required: true },
});
module.exports = imageSchema;
