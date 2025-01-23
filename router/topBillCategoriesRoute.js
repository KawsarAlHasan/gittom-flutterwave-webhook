const express = require("express");
const {
  getData,
  postData,
  updateData,
  deleteData,
} = require("../controller/topBillCategories");

const router = express.Router();

router.get("/", getData);
router.post("/", postData);
router.put("/", updateData);
router.delete("/", deleteData);

module.exports = router;
