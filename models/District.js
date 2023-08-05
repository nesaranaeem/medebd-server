const { default: mongoose } = require("mongoose");
const districtSchema = require("../schemas/districtSchema");

const District = mongoose.model("District", districtSchema, "District");
module.exports = District;
