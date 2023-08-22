const express = require("express");
const router = express.Router();
const imageController = require("../controllers/image.controller");
const whiteListedDomain = require("../middleware/whiteListedDomain");
router.get("/:imageSlug", whiteListedDomain, imageController.getImageStatus);
module.exports = router;
