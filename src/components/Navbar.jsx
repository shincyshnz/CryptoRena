import React, { useState, useEffect } from "react";
import { Button, Typography, Avatar } from "antd";
import icon from "../images/crypto.png";
import { Link } from "react-router-dom";
import CustomMenu from "./CustomMenu";
import { MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">CryptoRena</Link>
        </Typography.Title>
        <button
          className="menu-control-container"
          style={{ backgroundColor : "transparent"}}
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined
            style={{
              fontSize: "48px",
              color: "white",
              backgroundColor: "#001529",
            }}
          />
        </button>
      </div>
      {activeMenu && <CustomMenu />}
    </div>
  );
};

export default Navbar;
