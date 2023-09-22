import React, { useState } from "react";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

function getItem(label, key, icon, type) {
  return {
    key,
    icon,
    label,
    type,
  };
}

const items = [
  getItem("Home", "/", <HomeOutlined />),
  getItem("Cryptocurrencies", "/cryptocurrencies", <FundOutlined />),
  getItem("Exchanges", "/exchanges", <MoneyCollectOutlined />),
  getItem("News", "/news", <BulbOutlined />),
];
const CustomMenu = () => {
  const [current, setCurrent] = useState("");
  const navigate = useNavigate();

  const onClick = (e) => {
    setCurrent(e.key);
    navigate(e.key, { replace: true });
  };
  return (
    <>
      <Menu
        theme="dark"
        onClick={onClick}
        defaultOpenKeys={["home"]}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </>
  );
};
export default CustomMenu;
