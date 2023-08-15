const { default: mongoose } = require("mongoose");

// Define DoctorOrganization schema
const doctorOrganizationSchema = new mongoose.Schema({
  id: {},
  name: {},
});
module.exports = doctorOrganizationSchema;
