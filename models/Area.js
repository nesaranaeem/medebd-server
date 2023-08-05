const { default: mongoose } = require("mongoose");
const areaSchema = require("../schemas/areaSchema");

const Area = mongoose.model("Area", areaSchema, "Area");
module.exports = Area;
