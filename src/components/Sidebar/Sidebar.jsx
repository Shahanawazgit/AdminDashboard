import React, { useState } from "react";
import "./Sidebar.css";
import logo from "../../imgs/logo.png";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { SidebarData } from "../../Data/Data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const sidebarvarients = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "55%" } : { left: "5%" }}
        onClick={() => setExpanded(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarvarients}
        animate={window.innerWidth <= 600 ? `${expanded}` : ""}
      >
        {/* logo */}
        <Link to="/">
          <div className="logo" onClick={() => setExpanded(!expanded)}>
            <img src={logo} alt="logo" />
            <span>
              Sh<span>o</span>ps
            </span>
          </div>
        </Link>

        {/* menu */}
        <div className="menu">
          {SidebarData.map((item, ind) => {
            return (
              <div key={ind}>
                <Link to={`/${item.heading}`}>
                  <div
                    className={
                      selected === ind ? "menuItem active" : "menuItem"
                    }
                    onClick={() => {
                      setSelected(ind);
                      setExpanded(!expanded);
                    }}
                  >
                    <item.icon />
                    <span>{item.heading}</span>
                  </div>
                </Link>
              </div>
            );
          })}
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
