const { default: mongoose } = require("mongoose");
const medicineCompanySchema = require("../schemas/medicineCompanySchema");

const MedicineCompanyName = mongoose.model(
  "MedicineCompanyName",
  medicineCompanySchema,
  "MedicineCompanyName"
);
module.exports = MedicineCompanyName;
