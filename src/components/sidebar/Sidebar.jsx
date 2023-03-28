import React, { useRef, useState } from "react";
import Style from "./sidebar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import MarkUnreadChatAltOutlinedIcon from "@mui/icons-material/MarkUnreadChatAltOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import { Link } from "react-router-dom";
function Sidebar() {
  const [spanDisplay, setSpanDisplay] = useState("block");
  const [hamMenu, setHamMenu] = useState("84%");

  const sideBar = useRef();

  const handleSideMenu = () => {
    const panelWidth = sideBar.current;
    if (panelWidth.style.width === "280px") {
      panelWidth.style.width = "80px";
      setSpanDisplay("none");
      setHamMenu("93%");
    } else {
      panelWidth.style.width = "280px";
      setSpanDisplay("block");
      setHamMenu("84%");
    }
  };

  return (
    <div ref={sideBar} className={Style.sidebar}>
      <div className={Style.logoWrapper}>
        <span>logo</span>

        <RxHamburgerMenu
          onClick={handleSideMenu}
          className={Style.hamMenu}
          size="1.4rem"
          style={{ right: hamMenu }}
        />
      </div>

      <ul className={Style.sideItems}>
        <Link to="/" className={Style.linkItems}>
          <li>
            <Tooltip title="Dashboard" placement="right-start">
              <IconButton>
                <DashboardCustomizeOutlinedIcon />
              </IconButton>
            </Tooltip>
            <span style={{ display: spanDisplay }} className={Style.spanIcon}>
              Dashboard
            </span>
          </li>
        </Link>

        <Link to="/enquiry" className={Style.linkItems}>
          <li>
            <Tooltip title="Enquiries" placement="right-start">
              <IconButton>
                <EventNoteOutlinedIcon />
              </IconButton>
            </Tooltip>
            <span style={{ display: spanDisplay }} className={Style.spanIcon}>
              Enquiry
            </span>
          </li>
        </Link>

        <Link to="/chat" className={Style.linkItems}>
          <li>
            <Tooltip title="Chat" placement="right-start">
              <IconButton>
                <MarkUnreadChatAltOutlinedIcon />
              </IconButton>
            </Tooltip>
            <span style={{ display: spanDisplay }} className={Style.spanIcon}>
              Chat
            </span>
          </li>
        </Link>

        <Link to="/service" className={Style.linkItems}>
          <li>
            <Tooltip title="Service" placement="right-start">
              <IconButton>
                <SettingsSuggestOutlinedIcon />
              </IconButton>
            </Tooltip>
            <span style={{ display: spanDisplay }} className={Style.spanIcon}>
              Services
            </span>
          </li>
        </Link>

        <Link to="/user_status" className={Style.linkItems}>
          <li>
            <Tooltip title="User Status" placement="right-start">
              <IconButton>
                <ManageAccountsOutlinedIcon />
              </IconButton>
            </Tooltip>
            <span style={{ display: spanDisplay }} className={Style.spanIcon}>
              User Status
            </span>
          </li>
        </Link>

        <Link to="/project_status" className={Style.linkItems}>
          <li>
            <Tooltip title="Project Status" placement="right-start">
              <IconButton>
                <SignalCellularAltOutlinedIcon />
              </IconButton>
            </Tooltip>

            <span style={{ display: spanDisplay }} className={Style.spanIcon}>
              Project Status
            </span>
          </li>
        </Link>

        <Link to="/payment_status" className={Style.linkItems}>
          <li>
            <Tooltip title="Payment Status" placement="right-start">
              <IconButton>
                <PaymentsOutlinedIcon />
              </IconButton>
            </Tooltip>

            <span style={{ display: spanDisplay }} className={Style.spanIcon}>
              Payment Status
            </span>
          </li>
        </Link>

        <Link to="/invoice" className={Style.linkItems}>
          <li>
            <Tooltip title="Invooice" placement="right-start">
              <IconButton>
                <ReceiptOutlinedIcon />
              </IconButton>
            </Tooltip>
            <span style={{ display: spanDisplay }} className={Style.spanIcon}>
              Invoice
            </span>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Sidebar;
