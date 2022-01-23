/** @format */

import React, { useEffect } from "react";
import { Drawer as AntDrawer } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer, closeDrawer } from "../app/reducers/app";
import Icon from "./Icon";
import Header from "./Header";
import TopBar from "./TopBar";
import { useLocation } from "react-router";
import { useTranslation } from "next-i18next";

const Drawer = () => {
  const { drawer } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const location = useLocation();
  const { i18n } = useTranslation();
  useEffect(() => {
    dispatch(closeDrawer());
  }, [location]);
  return (
    <AntDrawer
      className="drawer"
      placement={i18n.language === "ar" ? "right" : "left"}
      onClose={() => dispatch(toggleDrawer())}
      closable={true}
      visible={drawer}
      closeIcon={<Icon name={"AiOutlineClose"} />}
    >
      <div className="drawer-content">
        <Header />
        <TopBar />
      </div>
    </AntDrawer>
  );
};

export default Drawer;
