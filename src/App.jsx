import React from 'react'
import Dashboard from './pages/dashboard/Dashboard'
import {Route,Routes} from "react-router-dom";
import Enquiry from './pages/enquiry/Enquiry';
import Chat from './pages/chat/Chat';
import ProjectStatus from './pages/projectStatus/ProjectStatus';
import UserStatus from './pages/userStatus/UserStatus';
import Service from './pages/service/Service';
import PaymentStatus from './pages/paymentStatus/PaymentStatus';
function App() {
  return (
   <>
  <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/enquiry' element={<Enquiry/>}/>
    <Route path='/chat' element={<Chat/>}/>
    <Route path='/service' element={<Service/>}/>
    <Route path='/user_status' element={<UserStatus/>}/>
    <Route path='/project_status' element={<ProjectStatus/>}/>
    <Route path='/payment_status' element={<PaymentStatus/>}/>
  </Routes>
     {/* <Dashboard /> */}
   </>
  )
}

export default App