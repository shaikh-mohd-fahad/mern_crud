import { studentModel } from "../model/student.js"
// ******* post method *********

const addData=async (req,res)=>{
    console.log("hellow: ",req.body)
    try {
        const add_data= new studentModel({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
        })
        const result=await add_data.save();
        res.send("data added")
        
    } catch (error) {
        console.log("server error: ",error)
    }
}
const getStudent=async (req,res)=>{
    const getData=await studentModel.find();
    res.send(getData)
}
const delStudent=async (req,res)=>{
    const result=await studentModel.findByIdAndDelete(req.params.id);
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
        })
        res.json(result)
        
    } catch (error) {
        console.log("erorr", error)
    }
}
export {addData,getStudent,delStudent,fetchEdit,updateStudent}