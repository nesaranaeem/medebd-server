const Doctors = require("../models/Doctors");
const DoctorOrganization = require("../models/DoctorOrganization");
const DoctorSpeciality = require("../models/DoctorSpeciality");

const getDoctorsInfo = async (req, res) => {
  /*
    Sample API call:
    GET http://localhost:5000/api/v2/doctors?page=1&limit=10
    This call will fetch a list of doctors with pagination and 10 results per page.
  */

  // Get the page number and limit from query parameters, with default values if not provided
  const page = parseInt(req.query.page) || 1;
  let limit = parseInt(req.query.limit) || 10;
  if (limit > 20) {
    limit = 10;
  }
  // Calculate the number of documents to skip based on the current page and limit
  const skip = (page - 1) * limit;

  // Fetch the list of doctors from the database with pagination
  const doctorsList = await Doctors.find()
    .skip(skip)
    .limit(limit)
    .lean()
    .exec();

  // Map gender value to human-readable string for each doctor
  const genderMap = { 1: "Male", 2: "Female" };
  doctorsList.forEach((doctor) => {
    doctor.gender = genderMap[doctor.gender];
  });

  // Fetch and add DoctorOrganizationName and DoctorSpeciality data to each doctor
  await Promise.all(
    doctorsList.map(async (doctor) => {
      // Get DoctorOrganization's "name" based on "id"
      const organizationId = parseInt(doctor.organization, 10);
      const doctorOrganizationData = await DoctorOrganization.findOne({
        id: organizationId,
      })
        .lean()
        .exec();
      doctor.doctorOrganizationName = doctorOrganizationData?.name || "Unknown";

      // Get DoctorSpeciality's "name" and "bangla_name" based on "id"
      const specialtyId = parseInt(doctor.specialty, 10);
      const doctorSpecialityData = await DoctorSpeciality.findOne({
        id: specialtyId,
      })
        .lean()
        .exec();
      doctor.specialityNameBangla = doctor.bangla_name;
      doctor.specialityName = doctorSpecialityData?.name || "Unknown";
      doctor.specialityNameBangla =
        doctorSpecialityData?.bangla_name || "Unknown";

      // Remove the "specialty" field from the doctor object
      delete doctor.specialty;

      // Format qualification to remove newline characters and extra spaces
      if (doctor.qualification) {
        doctor.qualification = doctor.qualification.replace(/\s+/g, " ").trim();
      }
    })
  );

  // Count the total number of doctors in the database
  const totalCount = await Doctors.countDocuments();

  // Calculate total number of pages for the doctor list
  const totalPages = Math.ceil(totalCount / limit);

  // Send the JSON response containing the doctor list, total count, and pagination details
  res.json({
    status: true,
    doctorsList: doctorsList,
    total_count: totalCount,
    total_pages: totalPages,
    current_page: page,
  });
};
const getDoctorDetails = async (req, res) => {
  const doctorId = parseInt(req.params.id, 10);

  if (isNaN(doctorId)) {
    return res
      .status(400)
      .json({ status: false, message: "Invalid doctor ID." });
  }

  try {
    // Fetch the doctor details from the database based on the provided ID
    const doctorDetails = await Doctors.findOne({ id: doctorId }).lean().exec();

    if (!doctorDetails) {
      return res
        .status(404)
        .json({ status: false, message: "Doctor not found." });
    }

    // Map gender value to human-readable string
    const genderMap = { 1: "Male", 2: "Female" };
    doctorDetails.gender = genderMap[doctorDetails.gender];

    // Get DoctorOrganization's "name" based on "organization" ID
    const organizationId = parseInt(doctorDetails.organization, 10);
    const doctorOrganizationData = await DoctorOrganization.findOne({
      id: organizationId,
    })
      .lean()
      .exec();
    doctorDetails.doctorOrganizationName =
      doctorOrganizationData?.name || "Unknown";

    // Get DoctorSpeciality's "name" and "bangla_name" based on "specialty" ID
    const specialtyId = parseInt(doctorDetails.specialty, 10);
    const doctorSpecialityData = await DoctorSpeciality.findOne({
      id: specialtyId,
    })
      .lean()
      .exec();
    doctorDetails.specialityName = doctorSpecialityData?.name || "Unknown";
    doctorDetails.specialityNameBangla =
      doctorSpecialityData?.bangla_name || "Unknown";

    // Remove the "specialty" field from the doctor object
    delete doctorDetails.specialty;

    // Format qualification to remove newline characters and extra spaces
    if (doctorDetails.qualification) {
      doctorDetails.qualification = doctorDetails.qualification
        .replace(/\s+/g, " ")
        .trim();
    }

    // Send the JSON response containing the doctor details
    res.json({ status: true, doctorDetails });
  } catch (error) {
    console.error("Error fetching doctor details:", error);
    res.status(500).json({ status: false, message: "Internal server error." });
  }
};

module.exports = { getDoctorsInfo, getDoctorDetails };
