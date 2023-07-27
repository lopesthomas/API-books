const express = require("express");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const router = express.Router();

router.get("/");
router.get("/:id");
router.get("/bestrating");

router.post("/");
router.put("/:id");
router.delete("/:id");
router.post("/:id/rating");

module.exports = router;
