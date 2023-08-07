const Medicine = require("../models/Medicine");
const MedicineCompanyName = require("../models/MedicineCompany");
const MedicineGeneric = require("../models/MedicineGeneric");
const Doctors = require("../models/Doctors");
const Hospitals = require("../models/Hospitals");

const displayCount = async (req, res) => {
  try {
    // Count the total number of documents for each model
    const totalMedicine = await Medicine.countDocuments();
    const totalCompanyName = await MedicineCompanyName.countDocuments();
    const totalMedicineGeneric = await MedicineGeneric.countDocuments();
    const totalDoctors = await Doctors.countDocuments();
    const totalHospitals = await Hospitals.countDocuments();

    // Format the data for the response
    const result = {
      status: true,
      details: [
        {
          totalMedicine: totalMedicine,
          totalMedicineCompanyName: totalCompanyName,
          totalMedicineGeneric: totalMedicineGeneric,
          totalDoctors: totalDoctors,
          totalHospitals: totalHospitals,
        },
      ],
    };

    // Send the JSON response containing the count details
    res.json(result);
  } catch (error) {
    // Handle any errors that might occur during counting
    res.status(500).json({ status: false, error: "Internal Server Error" });
  }
};

module.exports = { displayCount };
