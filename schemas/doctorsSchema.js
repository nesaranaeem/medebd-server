const { default: mongoose } = require("mongoose");

// Define Doctors schema
const doctorsSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  gender: { type: Number, required: true },
  name: { type: String, required: true },
  organization: { type: String, required: true },
  qualification: { type: String, required: true },
  specialty: { type: String, required: true },
  title: { type: String, required: true },
});
module.exports = doctorsSchema;
