const express = require("express");

// const { protect, restrictTo } = require("./../controllers/auth.controller");
// // const { restrictTo } = require("../controllers/auth.controller");
const qualificationRouter = express.Router();

qualificationRouter.route("/createQualification").post(() => {});

qualificationRouter.route("/fetchQualifications").get(() => {});

module.exports = qualificationRouter;
