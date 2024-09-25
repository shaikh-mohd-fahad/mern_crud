import React, { useEffect, useState } from 'react'
import axios from "axios"

function App() {
  const [input,setInput]=useState({
    username:'',
    email:'',
    password:'',
  })
  const handleInput=(e)=>{
      const {name, value}=e.target;
      // console.log(e.target);
      setInput({
        ...input,
        [name]:value,
      })
  }
  const handleSignupFrom=(e)=>{
    e.preventDefault();
    console.log(input)
  }
  // ********** axios call *********
  const [getStudentData,setGetStudentData]=useState({})
  const getStudData=async ()=>{
    const getData=await axios.get("http://localhost:3000/student/getstudent");
    setGetStudentData(getData);
  }
  useEffect(()=>{
getStudData();
console.log(getStudentData.data)
  },[])
  // getStudData();
  return (
    <>
    <div className="container mx-auto mt-5 shadow-md p-5 rounded-md flex justify-center">
      <h1 className="text-3xl">Student SignUp</h1>
      <form action="" onSubmit={handleSignupFrom}>
        Username: <input type="text" name="username" placeholer="Enter Username" value={input.username} className="w-96 border " onChange={handleInput}/><br/><br/>

        Email: <input type="text" name="email" placeholer="Enter Eamil" value={input.email} className="w-96 border " onChange={handleInput}/><br/><br/>

        Password: <input type="text" name="password" placeholer="Enter Password" value={input.password} className="w-96 border " onChange={handleInput}/><br/><br/>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Signup</button>
      </form>
    </div>
    </>
  )
}

export default App
