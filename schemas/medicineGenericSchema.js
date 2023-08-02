const { default: mongoose } = require("mongoose");

// Define medicine schema
const medicineGenericSchema = new mongoose.Schema({
  generic_name: { type: String, required: true },
  generic_name_bangla: { type: String, required: true },
  generic_id: { type: Number, required: true },
  contra_indication: { type: String, required: true },
  contra_indication_bangla: { type: String, required: true },
  dose: { type: String, required: true },
  dose_bangla: { type: String, required: true },
  indication: { type: String, required: true },
  indication_bangla: { type: String, required: true },
  overdose: { type: String, required: true },
  overdose_bangla: { type: String, required: true },
  precaution: { type: String, required: true },
  precaution_bangla: { type: String, required: true },
  pregnancy_category: { type: String, required: true },
  pregnancy_category_bangla: { type: String, required: true },
  side_effect: { type: String, required: true },
  side_effect_bangla: { type: String, required: true },
});
module.exports = medicineGenericSchema;
