const express = require("express");
const router = express.Router();
const hospitalsController = require("../controllers/hospitals.controller");
const whiteListedDomain = require("../middleware/whiteListedDomain");
/* 
http://localhost:5000/api/v2/hospital?page=1&limit=10
http://localhost:5000/api/v2/hospital/7
*/
// Route to get list of all hospital
router.get("/", hospitalsController.getHospitalsInfo);

// Route to get details of a specific hospital by ID
router.get("/:id", hospitalsController.getHospitalDetails);

module.exports = router;
