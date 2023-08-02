const { default: mongoose } = require("mongoose");

// Define medicine schema
const medicineSchema = new mongoose.Schema({
  brand_name: { type: String, required: true },
  brand_id: { type: String, required: true },
  form: { type: String, required: true },
  generic_id: { type: String, required: true },
  packsize: { type: String, required: true },
  price: { type: String, required: true },
  strength: { type: String, required: true },
  // specifications: [
  //   {
  //     // other fields
  //     LaunchAnnouncement: {
  //       type: Date,
  //     },
  //     // other fields
  //   },
  // ],
});
module.exports = medicineSchema;
