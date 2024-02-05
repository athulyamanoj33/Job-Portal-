
import axios from "axios";
import { useEffect, useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";


function Jobs() {
 
 const [jobs, setJobs] = useState([]);
 useEffect(() => {
  axios.get('/company.json')
      
      .then((res) => setJobs(res.data))
      
      
      
      
}, []);
console.log(jobs[0])
console.log(jobs.id)
      


  return (
    <div>
      
      <div className="flex justify-center  items-center py-5 gap-7 flex-wrap">
        {jobs.map((job,i)=>{
         return <div key={i} className=" group w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blue-500 shadow-lg shadow-gray-600 hover:shadow-lg">
          <span className="flex justify-between items-center gap-4">
            <h1 className="font-bold text-xl text-gray-700 group-hover:text-white ">
            {job.job_title}          </h1>
            <span className="flex gap-1  text-[14px] items-center text-gray-600">
              <BiTimeFive />
              now
            </span>
          </span>
          <h6 className="text-gray-600 text-[14px]">{job.location}</h6>
          <p className="pt-[20px] mt-[20px] text-gray-600 text-[13px] border-t-[2px] group-hover:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            officiis itaque omnis consectetur
          </p>
          <div className="flex items-center gap-2 ">
            <img src={job.company_logo} alt="" className="w-[25%] object-contain"/>
            <span className="py-[8px] text-[14px] text-black font-semibold"> {job.company_name} </span>
          </div>
          <Link to={`/applyjob/${job.id}`}>
          <button  className="border rounded-[10px] block p-1 w-full mt-2 group-hover:bg-white font-semibold group-hover:text-gray-600">
            Apply Now
          </button>
          </Link>
          

        </div>
       

        })}
       
       
        
       
      </div>
      
    </div>
    
  );
}


export default Jobs;
