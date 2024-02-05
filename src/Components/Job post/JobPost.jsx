import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas/Index";


const initialValues = {
 
  JobTittle: "",
  CompanyName: "",
  CompanyLink:"",
  JobLink:"",
  JobDescription:""
  
};

function JobPost() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
console.log(errors);
 const   navigate =useNavigate()
  return (

    <div>
<div className="flex justify-between  items-center p-10 overflow-hidden ">
      <div className="">
        <h1 className="text-4xl text-blue-700 font-semibold">
          <strong>JOB</strong>SEARCH
        </h1>
      </div>
      <div className="flex gap-5 ">
      <h1 className=" text-black hover:bg-blue-600 hover:text-white  cursor-pointer text-lg font-semibold  p-1" onClick={()=>navigate("/")}>Home</h1>

           

       
      </div>
    </div>
    
    <div className=" flex justify-center w-full  ">
      <div className="  bg-sky-500 lg:w-[40%]   flex justify-center m-3">
        <form className="sm:m-4 p-3" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold pb-6 text-black pt-4 text-center ">
            Job Post
          </h1>
          <div className=" flex">
            <input
              type="text"
              placeholder="Job tittle *"
              name="JobTittle"
              value={values.JobTittle}
                  onChange={handleChange}
                  onBlur={handleBlur}
              className="bg-slate-50  text-black pt-1 pb-1 pr-4 pl-4"
            />
           
            &nbsp;
            <select name="" id="" className="w-full">
              <option value="">Full-time</option>
              <option value="">Part-time</option>
              <option value="">Remote</option>
              <option value="">Contract</option>
            </select>
          </div>
          {errors.JobTittle && touched.JobTittle ? (
                  <p className="text-red-600 ">{errors.JobTittle}</p>
                ) : null}
                
          <input
            type="text"
            placeholder="Company name *"
            name="CompanyName"
            value={values.CompanyName}
            onChange={handleChange}
            onBlur={handleBlur}
            className="bg-slate-50 mt-5 w-full text-black pt-1 pb-1 pr-4 pl-4"
          />
           {errors.CompanyName && touched.CompanyName ? (
                  <p className="text-red-600">{errors.CompanyName}</p>
                ) : null}
          &nbsp;
          <input
            type="text"
            placeholder="Company URL *"
            name="CompanyLink"
            value={values.CompanyLink}
            onChange={handleChange}
            onBlur={handleBlur}
            className="bg-slate-50 w-full text-black pt-1 pb-1 pr-4 pl-4 "
          />
          {errors.CompanyLink && touched.CompanyLink ? (
                  <p className="text-red-600">{errors.CompanyLink}</p>
                ) : null}
          
          
          <div className="flex mt-5">
          <select name="" id="" className="w-full">
              <option value="">Remote</option>
              <option value="">In office</option>
              
            </select>
          &nbsp;
          <input
            type="text"
            placeholder="Job link *"
            name="JobLink"
            value={values.JobLink}
            onChange={handleChange}
            onBlur={handleBlur}
            className="bg-slate-50  text-black pt-1 pb-2 pr-4 pl-4 "
          />
         
          </div>
          {errors.JobLink && touched.JobLink ? (
                  <p className="text-red-600 ml-1">{errors.JobLink}</p>
                ) : null}
          
          <br />
          <input
            type="text"
            placeholder="Job description *"
            name="JobDescription"
            value={values.JobDescription}
            onChange={handleChange}
            onBlur={handleBlur}
            className="bg-slate-50 pt-1 pb-1 pr-4 pl-4 h-20 w-full"
          />
          {errors.JobDescription && touched.JobDescription ? (
                  <p className="text-red-600 ">{errors.JobDescription}</p>
                ) : null}
         
         
          <div className="flex items-center justify-between mt-5">
          <p ></p>
          <button className=" border px-3 py-1 bg-black text-white">
            Job post
          </button>
          </div>
          
        </form>
      </div>
    </div>
    </div>
  );
}

export default JobPost;
