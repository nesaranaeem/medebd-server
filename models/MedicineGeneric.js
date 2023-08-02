const { default: mongoose } = require("mongoose");
const medicineGenericSchema = require("../schemas/medicineGenericSchema");

const MedicineGeneric = mongoose.model(
  "MedicineGeneric",
  medicineGenericSchema,
  "MedicineGeneric"
);
module.exports = MedicineGeneric;
