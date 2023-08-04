const { default: mongoose } = require("mongoose");

// Define DoctorOrganization schema
const doctorOrganizationSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
});
module.exports = doctorOrganizationSchema;
