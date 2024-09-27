import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import {useParams} from "react-router-dom"
function EditStudent({id}) {
  const edit_id=useParams().id;
    const [formData,setFormData]=useState({
        username:'',
        email:'',
    })
    
    const handleInput=(e)=>{
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }
    // ****** fetching student detail by id **
    useEffect(()=>{
      const fetchEdit=async ()=>{
        
        try {
          
          const res=await axios.get("http://localhost:3000/student/fetchedit/"+edit_id)
          console.log("res: ",res.data)
          setFormData({
            username:res.data.username,
            email:res.data.email
          })
          
        } catch (error) {
          console.log("error ", error)
        }
      }
      fetchEdit();
    },[])
const handleEditFrom=async (e)=>{
    e.preventDefault();
    try {
      const updateData=await axios.put(`http://localhost:3000/student/fetchedit/${edit_id}`,formData)
      console.log("update data",updateData)
    } catch (error) {
      console.log("eror: ",error)
    }
}
  return (
    <  >
      <div className="container mx-auto mt-5 shadow-md p-5 rounded-md ">
      <h1 className="text-3xl">Edit Student Detail</h1>
      <form action="" onSubmit={handleEditFrom}>
        Username: <input type="text" name="username" placeholer="Enter Username" value={formData.username} className="w-96 border " onChange={handleInput}/><br/><br/>
        {/* <input type="" defaultValue={edit_id} name="id"/> */}
        Email: <input type="text" name="email" placeholer="Enter Eamil" value={formData.email} className="w-96 border " onChange={handleInput}/><br/><br/>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Signup</button>
      </form>
    </div>
    </ >
  )
}

export default EditStudent
