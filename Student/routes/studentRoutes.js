const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

router.get("/",studentController.getStudents);
router.get("/add",studentController.addForm);
router.post("/add",studentController.createStudent);
router.get("/edit/:id",studentController.editForm);
router.post("/edit/:id",studentController.updateStudent);
router.get("/delete/:id",studentController.deleteStudent);
router.get("/details/:id",studentController.studentDetails);

module.exports = router;