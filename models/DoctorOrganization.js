const { default: mongoose } = require("mongoose");
const doctorOrganizationSchema = require("../schemas/doctorOrganizationSchema");

const DoctorOrganization = mongoose.model(
  "DoctorOrganization",
  doctorOrganizationSchema,
  "DoctorOrganization"
);
module.exports = DoctorOrganization;
