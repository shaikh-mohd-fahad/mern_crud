import express from "express"
const student_route=express.Router();
// import { home } from "../controller/siteController.js";
import { addData,getStudent } from "../controller/studentController.js";
student_route.get("/add",addData)
student_route.get("/getstudent",getStudent)

export default student_route