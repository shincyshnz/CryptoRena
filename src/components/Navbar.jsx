import React, { useState } from "react";
import { Button, Typography, Avatar } from "antd";
import icon from "../images/crypto.png";
import { Link } from "react-router-dom";
import CustomMenu from "./CustomMenu";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">CryptoRena</Link>
        </Typography.Title>
      </div>

      <CustomMenu />
    </div>
  );
};

export default Navbar;
