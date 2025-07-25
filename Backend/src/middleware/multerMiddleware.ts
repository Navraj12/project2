import { Request } from "express";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req: Request, file: Express.Multer.File, cb: any) {
    const allowedFileTypes = [
      "image/jpg",
      "image/jpeg",
      "image/png",
      "image/gif",
    ];
    if (!allowedFileTypes.includes(file.mimetype)) {
      cb(new Error("This filetypes is not accepted"));
      return;
    }
    cb(null, "./src/uploads");
  },
  filename: function (req: Request, file: Express.Multer.File, cb: any) {
    cb(null, Date.now()+ "-" + file.originalname);
  },
});
export { multer, storage };
