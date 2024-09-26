import express from "express"
const student_route=express.Router();
// import { home } from "../controller/siteController.js";
import { addData,getStudent,delStudent } from "../controller/studentController.js";
// student_route.get("/add",addData)
student_route.post("/add",addData)

student_route.get("/getstudent",getStudent)
student_route.get("/delete/:id",delStudent)



export default student_route