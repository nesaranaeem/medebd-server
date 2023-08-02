const express = require("express");
const router = express.Router();
const medicineController = require("../controllers/medicine.controller");
const whiteListedDomain = require("../middleware/whiteListedDomain");
/* 
API Lists:
http://localhost:5000/api/v2/medicine?page=1&limit=24
http://localhost:5000/api/v2/medicine?medicineName=napa&page=1&limit=10
http://localhost:5000/api/v2/medicine/search?symptom=allergy&page=1&limit=10
http://localhost:5000/api/v2/medicine/generic?limit=5&page=2
http://localhost:5000/api/v2/medicine/searchByGeneric?id=123&page=1&limit=10
http://localhost:5000/api/v2/medicine/company?limit=5&page=2
http://localhost:5000/api/v2/medicine/searchByCompanyId?id=37&page=2&limit=10
*/
router.get("/", medicineController.getAllMedicine);
router.get("/search", medicineController.searchMedicine);
router.get("/generic", medicineController.displayGeneric);
router.get("/searchByGeneric", medicineController.searchByGeneric);
router.get("/company", medicineController.displayCompany);
router.get("/searchByCompanyId", medicineController.searchByCompanyId);

module.exports = router;
