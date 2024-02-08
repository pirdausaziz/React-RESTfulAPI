const subjectController = require("../Controllers/subjectController");
const express = require("express");
const router = express.Router();

router.get("/", subjectController.getAllSubjects);
router.get("/:id", subjectController.getSubject);
router.post("/", subjectController.postSubject);
router.put("/:id", subjectController.putSubject);
router.delete("/:id", subjectController.deleteSubject);

module.exports = router;