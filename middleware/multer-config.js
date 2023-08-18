const multer = require("multer");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    // file.filename.replace("");
    const name = file.originalname
      .split(" ")
      .join("_")
      .split("." + MIME_TYPES[file.mimetype])
      .join("_");
    console.log(name);
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + "." + extension);
    console.log(name);
  },
});

module.exports = multer({ storage: storage }).single("image");
