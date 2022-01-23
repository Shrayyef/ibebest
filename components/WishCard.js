/** @format */

import React from "react";
import Card from "./Card";
import Button from "./Button";
import Icon from "./Icon";
import { Col, Row, Space } from "antd";
import { useTranslation } from "next-i18next";
import { useHistory } from "react-router";

const WishCard = ({}) => {
  const { t } = useTranslation("common");
  const history = useHistory();
  return (
    <Card className={"order-card item-card"}>
      <div className="order-wrapper d-flex justfiy-space-between align-center">
        <div className="order-content d-flex flex-1 align-center">
          <div className={"img-card"}>
            <img src={require("../assets/imgs/product.png").default} alt="" />
          </div>
          <div className="text">
            <p className={"grey"}>Electronic</p>
            <span>iPhone SE red 64 GB with 6 GB RAM & dual sim</span>
          </div>
        </div>
        <Space>
          <p className="secondary mb-0">$920.00</p>
          <Button size={"small"} className={"delete-btn"} type={"link"}>
            <Icon name={"AiOutlineDelete"} size={20} />
            {t("delete")}
          </Button>
        </Space>
      </div>
    </Card>
  );
};

export default WishCard;
