import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

import JobPostPage from "./pages/JobPostPage";
import ApplyJobPage from "./pages/ApplyJobPage";

import AppliedJobPage from "./pages/AppliedJobPage";
import ChatPage from "./pages/ChatPage";


function App() {
  return <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/jobpost" element={<JobPostPage/>}/>
      <Route path="/appliedjob" element={<AppliedJobPage/>}/>
      <Route path="/chat" element={<ChatPage/>}/>
      <Route path="/applyjob/:id" element={<ApplyJobPage/>}/>
    </Routes>
    
    </BrowserRouter>
    
    
  </div>;
}

export default App;
