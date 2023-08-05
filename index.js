// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const medicineSchema = require("./schemas/medicineSchema");
const doctorsSchema = require("./schemas/doctorsSchema");
const hospitalsSchema = require("./schemas/hospitalsSchema");
const Medicine = require("./models/Medicine");
const Doctors = require("./models/Doctors");
const Hospitals = require("./models/Hospitals");
// Create Express app
const app = express();

// Port
const port = process.env.PORT || 5000;
// Load environment variables
dotenv.config();

//MiddleWares
app.use(express.json());
app.use(cors());
// Routes
const medicineRoute = require("./routes/medicine.route");
const doctorsRoute = require("./routes/doctors.route");
const hospitalsRoute = require("./routes/hospitals.route");
const versionRoute = require("./routes/versions.route");
// Connect to MongoDB database
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Failed to connect to database", err));

// Define route schema
medicineSchema;
doctorsSchema;
hospitalsSchema;
// Define route model
Medicine;
Doctors;
Hospitals;
// Route for index
app.get("/", (req, res) => {
  const authorName = "Nesar Ahmed Naeem";
  const response = {
    status: 200,
    message: "🚀 Welcome to the JavaScript Magic Land! 🎉",
    welcomeMessage: `Greetings, aspiring JavaScript sorcerer! Prepare to be enchanted by the wonders of coding, crafted with love by ${authorName}.`,
    secretHint:
      "Psst... Discover the power of 'console.log' to unveil hidden secrets in your code! 🧙‍♂️",
    powerUp:
      "But wait, there's more! Master the art of 'async/await' to wield asynchronous powers with ease! ✨🌟",
  };
  res.status(response.status).send(response);
});

// Define endpoint for getting all bus routes
app.use("/api/v2/medicine", medicineRoute);
app.use("/api/v2/doctor", doctorsRoute);
app.use("/api/v2/hospital", hospitalsRoute);
app.use("/api/v2/version", versionRoute);

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
