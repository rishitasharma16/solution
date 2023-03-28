
import React from 'react'
import Chat from '../../pages/chat/Chat'
import DashboardHome from '../../pages/DashboardHome/DashboardHome'
import Enquiry from '../../pages/enquiry/Enquiry'
import PaymentStatus from '../../pages/paymentStatus/PaymentStatus'
import ProjectStatus from '../../pages/projectStatus/ProjectStatus'
import Service from '../../pages/service/Service'
import UserStatus from '../../pages/userStatus/UserStatus'
import Invoice from '../../pages/invoice/Invoice'
import styles from './content.module.css'
import { Link } from "react-router-dom";

function Content() {
  return (
    <div className={styles.content} >
     
          
        <DashboardHome/>
        {/* <Enquiry/> */}
        {/* <Chat/> */}
        {/* <Service/> */}
        {/* <UserStatus/> */}
        {/* <ProjectStatus/> */}
        {/* <PaymentStatus/> */}
        {/* <Invoice/> */}
    </div>
  )
}



export default Content