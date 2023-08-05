const { default: mongoose } = require("mongoose");
const hospitalsSchema = require("../schemas/hospitalsSchema");

const Hospitals = mongoose.model("Hospitals", hospitalsSchema, "Hospitals");
module.exports = Hospitals;
