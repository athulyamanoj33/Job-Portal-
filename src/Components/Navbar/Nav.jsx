import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  return (
   
    <div>
       <div className="flex justify-between items-center p-10 gap-3 ">
      <div>
        <h1 className="text-4xl text-blue-700 font-semibold" onClick={() => navigate("/")}>
          <strong>JOB</strong>SEARCH
        </h1>
      </div>
      <div className="flex gap-5 items-center">
        
        <h1
          className=" text-black hover:bg-blue-600 hover:text-white  cursor-pointer text-lg font-semibold  px-1 py-1"
          onClick={() => navigate("/login")}
        >
          Login
        </h1>
        <h1
          className=" text-black hover:bg-blue-600 hover:text-white  cursor-pointer text-lg font-semibold  px-1 py-1"
          onClick={() => navigate("/login/signup")}
        >
          Register
        </h1>
        <h1
          className=" text-black hover:bg-blue-600 hover:text-white  cursor-pointer text-lg font-semibold  px-1 py-1"
          onClick={() => navigate("/jobpost")}
        >
          Job Post
        </h1>
      </div>
    </div>
    
</div>

                                        
  );
}

export default Nav;
