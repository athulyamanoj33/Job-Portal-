import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function AppliedJob() {
 


  const [storedJob, setStoredJob] = useState([]);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  // console.log(data);

  useEffect(() => {
    let getData = JSON.parse(localStorage.getItem("jobs"));
    setStoredJob(getData);
    setData(getData);
  }, []);

 

  const handleFilter = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === "Filter") {
      selectedValue(data);
    } else {
      const ll = data.filter(
        (single) => single.remote_or_onsite == selectedValue
      );
      setStoredJob(ll);
    }
  };
  console.log(storedJob);
  return (
    <div className=" bg-slate-800  pb-10">
      <div className="flex justify-between  items-center p-10 overflow-hidden ">
        <div className="">
          <h1 className="text-5xl text-blue-700 font-semibold">
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

      <h1 className="text-5xl text-center bg-gradient-to-r from-indigo-500 to-indigo-800 bg-clip-text text-transparent p-2 mb-4 ">
        Applied Jobs
      </h1>
      
      <div>
        <div className="mb-6 w-3/4 text-end mx-auto">
          <label htmlFor="cars" className="font-semibold text-white">
            Filter by:{" "}
          </label>
          <select
            name="cars"
            id="cars"
            onChange={handleFilter}
            className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center "
          >
            <option value="Filter">Filter By</option>
            <option value="Remote">Remote</option>
            <option value="Onsite">Onsite</option>
          </select>
        </div>
      </div>
      {storedJob?.map((singleJob, i) => {
        return (
          <div
            key={i}
            className="md:flex w-80 md:w-3/5 mx-auto border-2 rounded-3xl justify-between items-center p-4 bg-slate-200 mb-4"
          >
            <div className="md:flex gap-4 items-center">
              <div className="image p-2">
                <img src={singleJob.company_logo} className="w-36" alt="" />
              </div>
              <div className="details text-start">
                <h1 className="text-lg font-bold">{singleJob.job_title}</h1>
                <p className="mb-2">{singleJob.company_name}</p>
                <button className="border-2 px-6 py-1 bg-white rounded-lg mb-4">
                  {singleJob.remote_or_onsite}
                </button>
                <div className="md:flex">
                  <p className="flex items-center mr-6">
                    <MapPinIcon className="h-6 w-6 text-blue-500" />
                    {singleJob.location}
                  </p>
                  <p className="flex items-center mt-2 md:mt-0">
                    <CurrencyDollarIcon className="h-6 w-6 text-blue-500" />
                    Salary : {singleJob.salary}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Link
                to={`/applyjob/${singleJob.id}`}
                className="bg-blue-600 rounded-xl font-semibold text-white px-5 py-2 mt-4 w-full "
              >
                View Details
              </Link>
            </div>
           
          </div>
        );
      })}
    </div>
  );
}

export default AppliedJob;
