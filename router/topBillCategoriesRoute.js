const express = require("express");
const { test } = require("../controller/topBillCategories");

const router = express.Router();

router.get("/", test);

module.exports = router;
