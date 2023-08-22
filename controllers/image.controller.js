const Image = require("../models/Image");

const getImageStatus = async (req, res) => {
  console.log("Request received with imageSlug:", req.params.imageSlug);
  try {
    const imageSlug = req.params.imageSlug; // Get the imageSlug from the URL parameter

    const image = await Image.findOne({ imageSlug }); // Find the image with the given imageSlug

    if (!image) {
      return res.json({
        status: false,
        imageSlug: imageSlug,
        imageSlug:
          "https://res.cloudinary.com/draz5dcbl/image/upload/v1692710189/medebd/medicines/medicine.png",
        message: "No image found",
      });
    }

    res.json({
      status: true,
      imageSlug: image.imageSlug,
      imageURL: image.imageURL,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
};

module.exports = {
  getImageStatus,
};
