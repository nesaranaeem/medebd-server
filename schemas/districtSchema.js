const { default: mongoose } = require("mongoose");

// Define District schema
const districtSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
});
module.exports = districtSchema;
