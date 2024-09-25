import { studentModel } from "../model/student.js"
const addData=async (req,res)=>{
    try {
        const add_data= new studentModel({
            username:"fahad",
            email:"fahad@gmail.com",
            password:"123456"
        })
        const result=await add_data.save();
        console.log(result)
        console.log("data added")
        
    } catch (error) {
        
    }
}

const getStudent=async (req,res)=>{
    const getData=await studentModel.find();
    // console.log(getData)
    res.send(getData)
}

export {addData,getStudent}