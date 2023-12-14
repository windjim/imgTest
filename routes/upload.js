const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});
router.post("/image", upload.single("file"), function (req, res) {
  res.send({
    imgUrl: "https://israynotarray.com/",
  });
});

module.exports = router;
