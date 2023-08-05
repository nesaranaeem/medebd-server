const Hospitals = require("../models/Hospitals");
const Area = require("../models/Area");
const District = require("../models/District");

const getHospitalsInfo = async (req, res) => {
  /*
    Sample API call:
    GET http://localhost:5000/api/v2/hospitals?page=1&limit=10
    This call will fetch a list of hospitals with pagination and 10 results per page.
  */

  // Get the page number and limit from query parameters, with default values if not provided
  const page = parseInt(req.query.page) || 1;
  let limit = parseInt(req.query.limit) || 10;
  if (limit > 20) {
    limit = 10;
  }
  // Calculate the number of documents to skip based on the current page and limit
  const skip = (page - 1) * limit;

  try {
    // Fetch the list of hospitals from the database with pagination
    const hospitalsList = await Hospitals.find()
      .skip(skip)
      .limit(limit)
      .lean()
      .exec();

    // Fetch and add areaName and districtName data to each hospital
    await Promise.all(
      hospitalsList.map(async (hospital) => {
        // Get Area's "name" based on "area" ID
        const areaId = parseInt(hospital.area, 10);
        const areaData = await Area.findOne({ id: areaId }).lean().exec();
        hospital.areaName = areaData?.name || "Unknown";

        // Get District's "name" based on "district_id"
        const districtId = parseInt(hospital.district_id, 10);
        const districtData = await District.findOne({ id: districtId })
          .lean()
          .exec();
        hospital.districtName = districtData?.name || "Unknown";
      })
    );

    // Count the total number of hospitals in the database
    const totalCount = await Hospitals.countDocuments();

    // Calculate total number of pages for the hospital list
    const totalPages = Math.ceil(totalCount / limit);

    // Send the JSON response containing the hospital list, total count, and pagination details
    res.json({
      status: true,
      hospitalsList: hospitalsList,
      total_count: totalCount,
      total_pages: totalPages,
      current_page: page,
    });
  } catch (error) {
    console.error("Error fetching hospitals:", error);
    res.status(500).json({ status: false, message: "Internal server error." });
  }
};

const getHospitalDetails = async (req, res) => {
  /*
    Sample API call:
    GET http://localhost:5000/api/v2/hospitals/:ID
    This call will fetch a hospital info by id.
  */
  const hospitalId = parseInt(req.params.id, 10);

  if (isNaN(hospitalId)) {
    return res
      .status(400)
      .json({ status: false, message: "Invalid hospital ID." });
  }

  try {
    // Fetch the hospital details from the database based on the provided ID
    const hospitalDetails = await Hospitals.findOne({ id: hospitalId })
      .lean()
      .exec();

    if (!hospitalDetails) {
      return res
        .status(404)
        .json({ status: false, message: "Hospital not found." });
    }

    // Get Area's "name" based on "area" ID
    const areaId = parseInt(hospitalDetails.area, 10);
    const areaData = await Area.findOne({ id: areaId }).lean().exec();
    hospitalDetails.areaName = areaData?.name || "Unknown";

    // Get District's "name" based on "district_id"
    const districtId = parseInt(hospitalDetails.district_id, 10);
    const districtData = await District.findOne({ id: districtId })
      .lean()
      .exec();
    hospitalDetails.districtName = districtData?.name || "Unknown";

    // Send the JSON response containing the hospital details
    res.json({ status: true, hospitalDetails });
  } catch (error) {
    console.error("Error fetching hospital details:", error);
    res.status(500).json({ status: false, message: "Internal server error." });
  }
};

module.exports = { getHospitalsInfo, getHospitalDetails };
