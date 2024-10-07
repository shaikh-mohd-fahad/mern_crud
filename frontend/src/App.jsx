import React, { useEffect, useState } from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom"
function App() {
  const [input,setInput]=useState({
    username:'',
    email:'',
    password:'',
    image:null,
  })
  const handleInput=(e)=>{
      const {name, value,files}=e.target;
      if(files){
        setInput({
          ...input,
          image:files[0],
        })
      }else{
      setInput({
        ...input,
        [name]:value,
      })
    }
  }
  const handleSignupFrom=async(e)=>{

    e.preventDefault();
    const formData=new FormData();
    formData.append("email",input.email)
    formData.append("password",input.password)
    formData.append("username",input.username)
    formData.append("image",input.image)
    try {
      const insertData=await axios.post("http://localhost:3000/student/add",formData)
      toast.success("Student Data Added")
      setInput({
        username:'',
        email:'',
        password:'',
        image:null,
      })
      document.getElementById('imageInput').value = null; 
      getStudData();
    } catch (error) {
      console.log("insert error : ",error)
    }
  }

  const handleDelete=async (id)=>{
    try {
      const res=await axios.delete("http://localhost:3000/student/delete/"+id)
      toast.error("Student Data Deleted")
      getStudData();
    } catch (error) {
      console.log(error)
    }
  }
  // ********** fetching student data *********
  const [getStudentData,setGetStudentData]=useState([])
  const getStudData=async ()=>{
    const getData=await axios.get("http://localhost:3000/student/getstudent");
    setGetStudentData(getData.data);
  }
  useEffect(()=>{
    getStudData();
  },[])
  
  return (
    <>
    <ToastContainer />
    <div className="container mx-auto mt-5 shadow-md p-5 rounded-md flex justify-center">
      <h1 className="text-3xl">Student SignUp</h1>
      <form action="" onSubmit={handleSignupFrom} method="post" encType="multipart/form-data">
        Username: <input type="text" name="username" placeholer="Enter Username" value={input.username} className="w-96 border " onChange={handleInput}/><br/><br/>

        Email: <input type="text" name="email" placeholer="Enter Eamil" value={input.email} className="w-96 border " onChange={handleInput}/><br/><br/>

        Image: <input type="file" accept="image/*" name="image" id="imageInput" onChange={handleInput}/><br/><br/>

        Password: <input type="text" name="password" placeholer="Enter Password" value={input.password} className="w-96 border " onChange={handleInput}/><br/><br/>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Signup</button>
      </form>
    </div>
    <div className='container mx-auto mt-5 shadow-md p-5 rounded-md flex justify-center'>
      
    <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Image</th>
      <th>
        Action
      </th>
    </tr>
  </thead>
  <tbody>
  {
    getStudentData.map((data)=>{
      return (
        
        <tr key={data._id}>
      <td>{data.username}</td>
      <td>{data.email}</td>
      <td><img src={`http://localhost:3000/${data.image}`} alt="" /></td>
      <td> 
      {/* <a href={`edit/${data._id}`}>Edit</a>   */}
      <Link to={`edit/${data._id}`} className='btn bg-blue-500 p-3 rounded-md m-2'>Edit</Link>  
      <button onClick={()=>handleDelete(data._id)} className='btn bg-red-500 p-2 rounded-md m-2'>Delete</button></td>
    </tr>
       
      )
    })

  }
  </tbody>
</table>
      
    </div>
    </>
  )
}

export default App
