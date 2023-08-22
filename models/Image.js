const { default: mongoose } = require("mongoose");
const imageSchema = require("../schemas/imageSchema");

const Image = mongoose.model("Image", imageSchema, "Image");
module.exports = Image;
