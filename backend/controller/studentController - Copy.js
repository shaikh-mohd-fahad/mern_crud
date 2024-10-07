import { studentModel } from "../model/student.js"
import fs from 'fs';
import { join} from 'path'

// ******* post method *********

const addData=async (req,res)=>{
    try {
        const add_data= new studentModel({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
            image:req.file.path,
        })
        const result=await add_data.save();
        res.json({add_data})
        
    } catch (error) {
        console.log("server error: ",error)
    }
}
const getStudent=async (req,res)=>{
    const getData=await studentModel.find();
    res.send(getData)
}
const delStudent=async (req,res)=>{
    const id=req.params.id
    const student = await studentModel.findById(id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    const imagePath = join(process.cwd(), student.image); 
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error('Failed to delete image:', err);
      }
    });
    const result=await studentModel.findByIdAndDelete(id);
    res.send("data deleted")
}
const fetchEdit=async(req,res)=>{
    try {
        const result=await studentModel.findById(req.params.id)
        res.json(result)
        
    } catch (error) {
        console.log("erorr", error)
    }
}

const updateStudent=async(req,res)=>{
    try {
        const result=await studentModel.findByIdAndUpdate(req.params.id,{
            username:req.body.username,
            email:req.body.email,
            image:req.file.path,
        })
        console.log("req body: ",req.body);
        console.log("req file: ",req.file);
        res.json(result)
        
    } catch (error) {
        console.log("erorr", error)
    }
}
export {addData,getStudent,delStudent,fetchEdit,updateStudent}