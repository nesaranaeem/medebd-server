const { default: mongoose } = require("mongoose");
const doctorSpecialitySchema = require("../schemas/doctorSpecialitySchema");

const DoctorSpeciality = mongoose.model(
  "DoctorSpeciality",
  doctorSpecialitySchema,
  "DoctorSpeciality"
);
module.exports = DoctorSpeciality;
