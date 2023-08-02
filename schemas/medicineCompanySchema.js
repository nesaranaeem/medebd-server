const { default: mongoose } = require("mongoose");

// Define medicine schema
const medicineCompanySchema = new mongoose.Schema({
  company_name: { type: String, required: true },
  company_id: { type: String, required: true },
});
module.exports = medicineCompanySchema;
