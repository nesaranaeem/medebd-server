const { default: mongoose } = require("mongoose");

// Define DoctorSpeciality schema
const doctorSpecialitySchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  bangla_name: { type: String, required: true },
});
module.exports = doctorSpecialitySchema;
