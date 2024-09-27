import { studentModel } from "../model/student.js"

// get method **********

// const addData=async (req,res)=>{
//     console.log("hellow: ",req.query)
//     try {
//         const add_data= new studentModel({
//             username:req.query.username,
//             email:req.query.email,
//             password:req.query.password
//         })
//         const result=await add_data.save();
//         console.log(result)
//         console.log("data added")
        
//     } catch (error) {
//         console.log("server error: ",error)
//     }
// }

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
        // console.log(result)
        res.send("data added")
        
    } catch (error) {
        console.log("server error: ",error)
    }
}
const getStudent=async (req,res)=>{
    const getData=await studentModel.find();
    // console.log(getData)
    res.send(getData)
}
const delStudent=async (req,res)=>{
    // console.log("delete", req.params.id)
    const result=await studentModel.findByIdAndDelete(req.params.id);
    // console.log("result: ",result)
    res.send("data deleted")
}
const fetchEdit=async(req,res)=>{
    // res.send("working edit")
    try {
        const result=await studentModel.findById(req.params.id)
        res.json(result)
        
    } catch (error) {
        console.log("erorr", error)
    }
}

const updateStudent=async(req,res)=>{
    // res.send("working edit")
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