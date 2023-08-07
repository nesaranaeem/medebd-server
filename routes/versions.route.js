const express = require("express");
const router = express.Router();
const versionController = require("../controllers/versions.controller");
const countController = require("../controllers/count.controller");
const whiteListedDomain = require("../middleware/whiteListedDomain");

router.get("/statistics", whiteListedDomain, countController.displayCount);
router.get("/", whiteListedDomain, versionController.getVersions);

module.exports = router;
