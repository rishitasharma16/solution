import React from "react";
import styles from "./dashboardHome.module.css";
import SquareCard from "../../components/card/squareCard/SquareCard.jsx";
import SmallCard from "../../components/card/smallCard/SmallCard";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import SsidChartOutlinedIcon from '@mui/icons-material/SsidChartOutlined';
import TableComponent from "../../components/table/mainTable.jsx/Table";
import DonutChart from "../../components/chart/DonutChart";
import SubTable from "../../components/table/subTable.jsx/SubTable";
import BasicTable from "../../components/table/mainTable.jsx/Table";

function DashboardHome() {
  return (
    <div className={styles.main}>
      <div className={styles.Pagetitle}>
        <h1>Dashboard</h1>
      </div>
      <div className="card-container row my-4">
        <SmallCard number="168" title="Active Users" icons={<PeopleAltOutlinedIcon/>}/>
        <SmallCard number="144" title="New Users" icons={<PersonAddAltOutlinedIcon/>}/>
        <SmallCard number="198" title="Visit by Day" icons={<SsidChartOutlinedIcon/>}/>
        <SmallCard number="236" title="Chats" icons={<ForumOutlinedIcon/>}/>
        {/* <TableComponent/> */}
        <BasicTable/>
      </div>

      <div className="row">
         <DonutChart chartTitle="Chart Demo"/>
         <SquareCard/>
         <DonutChart chartTitle="Chart Demo 2"/>

         <SubTable tableTitle="Pending Status" inputLabel="Select"/>
         <SubTable tableTitle="Transaction Status"/>
      </div>



      
     
    </div>
  );
}

export default DashboardHome;
