import { useNavigate } from 'react-router-dom';
import ChatBot from 'react-simple-chatbot';

 

function Chat() {
 
   const navigate= useNavigate()
    const steps = [
        {
            
                id: '0',
                message: 'How can i help you',
                trigger: '1',
              
        },
       
      {
            id: '1',
            options: [
              { value: 'apply', label: 'apply job', trigger: 'apply' },
              { value: 'post', label: 'post job', trigger: 'post' },
              
            ],
          },
          {
            id: 'apply',
            message: 'To apply for a job, please follow these steps:\n1. Visit our job portal \n2.Browse through the available job listings and click on the job you are interested in.',
          
            end: true,
          },
          {
            id: 'post',
            message: 'To post a job, please follow these steps:\n1. Log in to your employer account on our job portal\n2.Navigate to the "Post a Job" section in your dashboard\n3.Fill out the required information, including job title, description, requirements, etc.',
            end: true,
          },
        
        
    ];
  return (
    <div className='bg-black h-screen'>
        <div className="flex justify-between items-center p-10 overflow-hidden ">
        <div>
          <h1 className="text-5xl text-purple-600 font-semibold">
            <strong>JOB</strong>SEARCH
          </h1>
        </div>
        <div className="flex gap-5 ">
          <h1
            className=" px-4 bg-purple-600 text-slate-300  cursor-pointer text-xl font-semibold  p-1"
            onClick={() => navigate("/")}
          >
            Home
          </h1>
        </div>
      </div>
    <h1 className='text-center'></h1>
    <div className="flex  items-center  justify-center ">
        <img  className='h-full rounded-l-lg' src="https://img.wattpad.com/d1c40069a99a21a3c4dc20046ba05c5967a670a2/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f796975745845432d735567596a513d3d2d3734393838393935322e3135616238363965343132623966633633353934323834393133352e6a7067?s=fit&w=720&h=720" alt="" />
            
            <ChatBot steps={steps} />
        </div>
        </div>
  
   )
}

export default Chat