
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { VscLocation } from "react-icons/vsc";


function Search() {
  return (
    <div>
    <div className='md:flex items-center  mb-12 px-6'>
        <div className="header-details md:w-3/5 tracking-wider ">
            <h1 className='text-6xl w-auto md:w-5/6'>
                One Step Closer  To Your <span className='custom-text text-6xl'>Dream Job</span>
            </h1>
            <p className='w-auto md:w-5/6 mt-6 leading-relaxed'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            
        </div>
        
    </div>
    <div className="grid m-6 p-16 rounded-[10px] gap-7  bg-gray-200">
        <form action="">
            <div className=" flex justify-between items-center rounded-[8px] gap-[10px] p-5 bg-white shadow-lg shadow-slate-400">
                <div className=" flex gap-2 items-center ">
                <AiOutlineSearch className="cursor-pointer text-2xl "/>
                <input type="text" className="w-[100%] bg-transparent text-blue-700 p-3 h-3 focus:outline-none" placeholder="Search here..." />
                <AiOutlineCloseCircle className="text-2xl text-gray-500 hover:text-black" />
                </div>
                <div className=" flex gap-2 items-center ">
                <BsHouseDoor className="cursor-pointer text-2xl "/>
                <input type="text" className="w-[100%] bg-transparent text-blue-700 p-3 h-3 focus:outline-none" placeholder="Search by company..." />
                <AiOutlineCloseCircle className="text-2xl text-gray-500 hover:text-black" />
                </div>
                <div className=" flex gap-2 items-center ">
                <VscLocation className="cursor-pointer text-2xl "/>
                <input type="text" className="w-[100%] bg-transparent text-blue-700 p-3 h-3 focus:outline-none" placeholder="Search by location..." />
                <AiOutlineCloseCircle className="text-2xl text-gray-500 hover:text-black" />
                </div>
                <button className="h-full bg-blue-500 p-3 px-10 rounded-[10px] text-white hover:bg-blue-400">Search</button>
            </div>
        </form>
        <div className=" flex items-center justify-center gap-15">
            <div className="flex items-center gap-4">
                <label htmlFor="Relevance" className="text-gray-600 font-semibold ">Sort by:</label>
                <select name="" id="Relevance" className="bg-white rounded-[3px] p-1 px-4 ">
                    <option value="">Relevance</option>
                    <option value="">Inclusive</option>
                    <option value="">Starts with</option>
                    <option value="">Contains</option>
                </select>

            </div>
            <div className="flex items-center gap-4 ml-5">
                <label htmlFor="Type" className="text-gray-600 font-semibold ">Type:</label>
                <select name="" id="Relevance" className="bg-white rounded-[3px] px-4 p-1">
                    <option value="">Full-time</option>
                    <option value="">Remote</option>
                    <option value="">Contract</option>
                    <option value="">Part-time</option>
                </select>

            </div>
            <div className="flex items-center gap-4 ml-5">
                <label htmlFor="Level" className="text-gray-600 font-semibold ">Level:</label>
                <select name="" id="Relevance" className="bg-white rounded-[3px] p-1 px-4 ">
                    <option value="">Senior</option>
                    <option value="">Beginer</option>
                    <option value="">Intermediate</option>
                    <option value="">Advance</option>
                </select>

            </div>
            <span className="text-gray-600 cursor-pointer ml-5">Clear All</span>
        </div>
    </div>
    </div>
  )
}

export default Search