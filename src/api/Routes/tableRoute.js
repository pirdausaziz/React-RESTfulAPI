const tableController = require("../Controllers/tableController");
const express = require("express");
const router = express.Router();

router.get("/", tableController.getTables);
router.get("/column/:tableName", tableController.getColumn);
router.get("/key/:tableName", tableController.getKey);

module.exports = router;