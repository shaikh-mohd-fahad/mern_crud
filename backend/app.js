import express from "express"
import web_route from "./route/web.js";
import student_route from "./route/student.js";
import { connectDB } from "./model/db.js";
import './model/student.js'
import cors from "cors"
import {join} from "path"

const app=express();
connectDB()
app.use(express.json());
app.use(cors())
app.use('/uploads',express.static(join(process.cwd(),'uploads')))
app.use("/",web_route)
app.use("/student",student_route)
app.listen(3000);