const express = require('express');
const router = express.Router();
const {CreatedSchool,GetAllSchool,GetOneSchool,UpdateSchool,DeletedSchool} = require("./schoolController")

router.post("/", CreatedSchool)
router.get("/", GetAllSchool)
router.get("/:id", GetOneSchool)
router.patch("/:id", UpdateSchool)
router.delete("/:id", DeletedSchool)

module.exports = router