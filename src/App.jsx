import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import JobPostPage from "./pages/JobPostPage";
import ApplyJobPage from "./pages/ApplyJobPage";


function App() {
  return <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/jobpost" element={<JobPostPage/>}/>
      <Route path="/Login" element={<LoginPage/>}/>
      <Route path="Login/signup" element={<SignupPage/>}/>
      <Route path="/applyjob/:id" element={<ApplyJobPage/>}/>
    </Routes>
    
    </BrowserRouter>
    
    
  </div>;
}

export default App;
