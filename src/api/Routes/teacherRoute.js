const teacherController = require("../Controllers/teacherController");
const express = require("express");
const router = express.Router();

router.get("/", teacherController.getAllTeachers);
router.get("/:id", teacherController.getTeacher);
router.post("/", teacherController.postTeacher);
router.put("/:id", teacherController.putTeacher);
router.delete("/:id", teacherController.deleteTeacher);

module.exports = router;