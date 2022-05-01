import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";


const TopBar = ({ styles }) => {
  const topBarStyle = {
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: styles.topBarHeight,
    backgroundColor: "#fff",
    borderBottom: "1px solid #d8d8d8",
    fontWeight: "bold",
    padding: "0px 20px",
    boxSizing: "border-box"
  };

  return (
    <div style={topBarStyle}>
      <span><GiHamburgerMenu/></span>
      Dyeus App
      <span><span style={{marginRight: "10px"}}><FiShoppingCart /></span><span style={{marginLeft: "10px"}}><IoIosNotificationsOutline/></span></span>
    </div>
  );
};

export default TopBar;
