

import { useNavigate } from "react-router-dom"
import ApplyJob from "../Components/applyJob/ApplyJob"



function ApplyJobPage() {
    const navigate=useNavigate()
    
  return (
    <div className="fixed bg-slate-800">
       <div className="flex justify-between items-center p-10 overflow-hidden ">
        <div>
          <h1 className="text-4xl text-blue-700 font-semibold">
            <strong>JOB</strong>SEARCH
          </h1>
        </div>
        <div className="flex gap-5 ">
          <h1
            className=" px-2  bg-blue-600 text-slate-300  cursor-pointer text-lg font-semibold  p-1"
            onClick={() => navigate("/")}
          >
            Home
          </h1>
        </div>
      </div>
        <ApplyJob/></div>
  )
}

export default ApplyJobPage