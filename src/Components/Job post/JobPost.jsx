

import { useState } from "react";
import { useNavigate } from "react-router-dom";


function JobPost() {
  const navigate=useNavigate()

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    company: '',
    description: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData, [name] : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}
    // if(!formData.username.trim()) {
    //     validationErrors.username = "username is required"
    // }
    if(!formData.username.trim()) {
      validationErrors. username = "password is required"
  } else if(formData. username.length < 2){
      validationErrors. username = "password should be at least 2 char"
  }

    if(!formData.email.trim()) {
        validationErrors.email = "email is required"
    } else if(!/\S+@\S+\.\S+/.test(formData.email)){
        validationErrors.email = "email is not valid"
    }
 

    if(!formData.company.trim()) {
        validationErrors.company = "password is required"
    } else if(formData.company.length < 2){
        validationErrors.company = "password should be at least 2 char"
    }

    // if(formData.confirmPassword !== formData.password) {
    //     validationErrors.confirmPassword = "password not matched"
    // }
    if(!formData.description.trim()) {
      validationErrors.description = "password is required"
  } else if(formData.description.length < 2){
      validationErrors.description= "password should be at least 2 char"
  }

    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0) {
        alert("Form Submitted successfully")
    }

  }

  return (
    //     

    <div className=" bg-slate-800 h-screen">
      <div className="flex justify-between  items-center p-10 overflow-hidden ">
       
        <div className="">
         
          <h1 className="text-4xl text-blue-700 font-semibold">
             <strong>JOB</strong>SEARCH
          </h1>
         
        </div>
       
        <div className="flex gap-5 ">
          
          <h1
            className="px-4  bg-blue-600 text-slate-300  cursor-pointer text-xl font-semibold  p-1"
            onClick={() => navigate("/")}
          >
            Home
          </h1>
         
        </div>
       
      </div>
      <div className="flex justify-center w-full">
      <div className="bg-sky-500 lg:w-[40%]  rounded-xl  flex justify-center m-3">
      <form className="" onSubmit={handleSubmit}>
        <h1 className="mt-7 mb-7 text-4xl font-bold text-center">POST YOUR JOB</h1>
        
        <div className="mt-4 flex">
         
          <input
            type="text"
            name="username"
            placeholder="Company-Name"
            autoComplete="off"
            onChange={handleChange}
            className="bg-slate-50  w-full text-black pt-1 pb-1 pr-4 pl-4"
          />
          <select name="" id="" className="w-full ml-2">
                  <option value="">Full-time</option>
                  <option value="">Part-time</option>
                  <option value="">Remote</option>
                   <option value="">Contract</option>
                 </select>
          
        </div>
        <h1 className="text-red-700">
        {errors.username && <span>{errors.username}</span>} </h1> 

        <div className="mt-4">
          
          <input
            type="email"
            name="email"
            placeholder="Company Email"
            autoComplete="off"
            onChange={handleChange}
            className="bg-slate-50  w-full text-black pt-1 pb-1 pr-4 pl-4"
          />
          <h1 className="text-red-700">
         
          {errors.email && <span>{errors.email}</span>}</h1>
        </div>
        <div className="mt-4 flex items-center">
          <label className="font-bold" htmlFor="">Company Logo:</label>
          
          <input
            type="file"
            name="image"
            placeholder="Uploade image"
            autoComplete="off"
            onChange={handleChange}
            className="bg-slate-50 ml-2  text-black pt-1 pb-1 pr-4 pl-4"
          />
         
        </div>
        <div className="mt-4 flex">
          
          <input
            type="text"
            name="company"
            placeholder="job-tittle"
            onChange={handleChange}
            className="bg-slate-50  w-full text-black pt-1 pb-1 pr-4 pl-4"
          />
          <select name="" id="" className="w-full ml-2">
                  <option value="">Remote</option>
                  <option value="">In office</option>

                 </select>
         
        </div>
        <h1 className="text-red-700">
          {errors.company && <span>{errors.company}</span>}</h1>
        <div className="mt-5">
         
          <input
            type="text"
            // name="confirmPassword"
            name="description"
            placeholder="Job description"
            onChange={handleChange}
            className="bg-slate-50 w-full text-black pt-8 pb-8 pr-4 pl-4"
          />
          <h1 className="text-red-600">
          {errors.description && <span>{errors.description}</span>}</h1>
        </div>
       <div className="flex justify-between">
        <h1></h1>
        <button className="mt-7 border px-8 py-2 mb-7 text-white bg-blue-700 " type="submit">Submit</button>
        </div>
       
      </form>
      </div>
      </div>
    </div>
  );
}

export default JobPost;
