const { default: mongoose } = require("mongoose");
const medicineSchema = require("../schemas/medicineSchema");

const Medicine = mongoose.model("Medicine", medicineSchema, "MedicineBrand");
module.exports = Medicine;
