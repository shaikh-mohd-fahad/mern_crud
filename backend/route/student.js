import express from "express"
const student_route=express.Router();
import multer from "multer"
import path from "path"
import { addData,getStudent,delStudent,fetchEdit,updateStudent } from "../controller/studentController.js";
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // Append extension
    },
  });
  
  const upload = multer({ storage });
student_route.post("/add",upload.single('image'),addData)
student_route.get("/getstudent",getStudent)
student_route.delete("/delete/:id",delStudent)
student_route.get("/fetchedit/:id",fetchEdit)
student_route.put("/fetchedit/:id",updateStudent)



export default student_route