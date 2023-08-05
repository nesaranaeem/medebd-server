const { default: mongoose } = require("mongoose");

// Define Area schema
const areaSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  district_id: { type: Number, required: true },
  name: { type: String, required: true },
});
module.exports = areaSchema;
