import express from "express"
import web_route from "./route/web.js";
import student_route from "./route/student.js";
import { connectDB } from "./model/db.js";
import './model/student.js'
import cors from "cors"

const app=express();
connectDB()
app.use(cors())
app.use("/",web_route)
app.use("/student",student_route)
app.listen(3000);