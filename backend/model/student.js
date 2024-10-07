import mongoose from "mongoose";
export const studentSchema=mongoose.Schema({
    username:String,
    email:String,
    password:String,
    image:String,
})
export const studentModel=mongoose.model('student',studentSchema);