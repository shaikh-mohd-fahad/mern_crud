import mongoose from "mongoose"
export const connectDB=async ()=>{
    return await mongoose.connect("mongodb://localhost:27017/student").then(()=>{
console.log("db connected")
}).catch((error)=>{
    console.log("db not connected")
    console.log(error)
})
}