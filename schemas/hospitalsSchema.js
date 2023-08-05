const { default: mongoose } = require("mongoose");

// Define Hospitals schema
const hospitalsSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  address: { type: String, required: true },
  area: { type: String, required: true },
  district_id: { type: Number, required: true },
  latitude: { type: String, required: true },
  longitude: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  specialty: { type: String, required: true },
  type: { type: String, required: true },
  web: { type: String, required: true },
});
module.exports = hospitalsSchema;
