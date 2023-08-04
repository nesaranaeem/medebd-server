const { default: mongoose } = require("mongoose");
const doctorsSchema = require("../schemas/doctorsSchema");

const Doctors = mongoose.model(
  "Doctors",
  doctorsSchema,
  "Doctors"
);
module.exports = Doctors;
