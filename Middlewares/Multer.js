import multer from "multer";
import path from "path";
import fs from "fs";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir='public/images';
    if(!fs.existsSync(dir)){
      fs.mkdirSync(dir,{recursive:true});
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

export default upload;
