const express = require("express");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const path = require("path");


const app = express();

connectDB();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/", studentRoutes);

// Start server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
