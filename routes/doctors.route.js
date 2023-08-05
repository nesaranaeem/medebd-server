const express = require("express");
const router = express.Router();
const doctorsController = require("../controllers/doctors.controller");
const whiteListedDomain = require("../middleware/whiteListedDomain");
/* 
http://localhost:5000/api/v2/doctor?page=1&limit=10
http://localhost:5000/api/v2/doctor/7
*/
// Route to get list of all doctors
router.get("/", doctorsController.getDoctorsInfo);

// Route to get details of a specific doctor by ID
router.get("/:id", doctorsController.getDoctorDetails);

module.exports = router;
