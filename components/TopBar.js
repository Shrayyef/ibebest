/** @format */

import React from "react";
import { useTranslation } from "next-i18next";
import TopBarMenu from "./TopBarMenu";
import Container from "./Container";
import Button from "./Button";
import Icon from "./Icon";
import { useDispatch } from "react-redux";
import { toggleDrawer } from "../app/reducers/app";

const TopBar = () => {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  return (
    <div className="top-bar">
      <Container>
        <Button onClick={() => dispatch(toggleDrawer())}>
          <Icon name={"AiOutlineMenu"} />
        </Button>
        <div className="shipping-text">
          <span>{t("free_shipping", { num: 99 })}</span>
        </div>
        <TopBarMenu />
      </Container>
    </div>
  );
};

export default TopBar;
