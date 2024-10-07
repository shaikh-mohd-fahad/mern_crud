import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import {useParams} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditStudent({id}) {
  const edit_id=useParams().id;
    const [formData,setFormData]=useState({
        username:'',
        email:'',
        image:null,
        imagePreview: null,
    })
    
    const handleInput=(e)=>{
      const {name, value,files}=e.target;
      if(files){
        const imagePreview = URL.createObjectURL(files[0]);
        // console.log("preview",files[0])
        setFormData({
          ...formData,
          image:files[0],
          imagePreview: imagePreview,
        })
      }else{
        setFormData({
        ...formData,
        [name]:value,
      })
    }
  }
    // ****** fetching student detail by id **
    const fetchEdit=async ()=>{
      try {
        const res=await axios.get("http://localhost:3000/student/fetchedit/"+edit_id)
        // console.log("res: ",res.data)
        setFormData({
          username:res.data.username,
          email:res.data.email,
          image:res.data.image,
          imagePreview:null
        })
      } catch (error) {
        console.log("error ", error)
      }
    }
    useEffect(()=>{
      fetchEdit();
    },[])
const handleEditFrom=async (e)=>{
    e.preventDefault();
    const formData2=new FormData();
    // console.log("formData: ",formData);
    formData2.append("email",formData.email)
    formData2.append("username",formData.username)
    formData2.append("image",formData.image)
    try {
      const updateData=await axios.put(`http://localhost:3000/student/fetchedit/${edit_id}`,formData2)
      toast.success("Student Data updated")
      document.getElementById('imageInput').value = null; 
      // console.log("update data",updateData)
      fetchEdit();
    } catch (error) {
      console.log("eror: ",error)
    }
}
  return (
    <  >
    <ToastContainer />
      <div className="container mx-auto mt-5 shadow-md p-5 rounded-md flex flex-col items-center space-y-3 justify-center ">
      <h1 className="text-3xl">Edit Student Detail</h1>
      <div>
      <img src={formData.imagePreview ? formData.imagePreview : `http://localhost:3000/${formData.image}`} height="200px" width="200px" alt="" />
      </div>
      <form action="" onSubmit={handleEditFrom}  method="post" encType="multipart/form-data">
        Username: <input type="text" name="username" placeholer="Enter Username" value={formData.username} className="w-96 border " onChange={handleInput}/><br/><br/>
        {/* <input type="" defaultValue={edit_id} name="id"/> */}
        Email: <input type="text" name="email" placeholer="Enter Eamil" value={formData.email} className="w-96 border " onChange={handleInput}/><br/><br/>
        Image: <input type="file" accept="image/*" name="image" id="imageInput" onChange={handleInput}/><br/><br/>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Update</button>
      </form>
    </div>
    </ >
  )
}

export default EditStudent
