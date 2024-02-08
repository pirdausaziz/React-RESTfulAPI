const studentController = require("../Controllers/studentController");
const express = require("express");
const router = express.Router();

router.get("/", studentController.getAllStudents);
router.get("/:id", studentController.getStudent);
router.post("/", studentController.postStudent);
router.put("/:id", studentController.putStudent);
router.delete("/:id", studentController.deleteStudent);

module.exports = router;