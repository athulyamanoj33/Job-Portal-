/* eslint-disable react/jsx-no-undef */
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
function Nav() {
  const { isAuthenticated, user } = useAuth0();

  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const navigate = useNavigate();
  return (
    <div>
      <div className="lg:flex  justify-between items-center p-10 gap-3 ">
        <div>
          <h1
            className="text-5xl text-blue-700 font-semibold"
            onClick={() => navigate("/")}
          >
            <strong>JOB</strong>SEARCH
          </h1>
        </div>
        <div className="flex gap-5  items-center">
        <div> {isAuthenticated && 
           
              <p className="text-blue-500">{user.name}</p>
            
          }</div>
         {isAuthenticated ? (
            <h1
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
            className=" text-black hover:bg-blue-600 hover:text-white  cursor-pointer text-xl font-semibold  px-4 py-1"
          >
            Logout
          </h1>
           
          ) : (
            <h1
            onClick={() => loginWithRedirect()}
            className=" text-black hover:bg-blue-600 hover:text-white text-xl cursor-pointer  font-semibold  px-4 py-1"
          >
            Login
          </h1>
            
          )}
           

          <h1
            className="  text-black hover:bg-blue-600 hover:text-white  text-xl cursor-pointer  font-semibold  px-4 py-1"
            onClick={() => navigate("/appliedjob")}
          >
            Applied Job
          </h1>
          <h1
          className=" text-black hover:bg-blue-600 hover:text-white  cursor-pointer text-xl font-semibold  px-4 py-1"
          onClick={() => navigate("/jobpost")}
        >
          Job Post
        </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hover:text-blue-600 cursor-pointer"
            onClick={() => navigate("/chat")}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>

         
        </div>
      </div>
    </div>
  );
}

export default Nav;
