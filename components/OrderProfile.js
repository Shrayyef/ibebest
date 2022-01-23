/** @format */

import React from "react";
import Card from "./Card";
import Button from "./Button";
import Icon from "./Icon";
import { Col, Row, Space } from "antd";
import { useTranslation } from "next-i18next";
import { useHistory } from "react-router";

const OrderProfile = ({}) => {
  const { t } = useTranslation("common");
  const history = useHistory();
  return (
    <Card className={"order-card"}>
      <div className="order-wrapper d-flex justfiy-space-between align-center">
        <div className="order-content d-flex flex-1 align-center">
          <ul className="menu d-flex order-imgs">
            <li>
              <div className={"img-card"}>
                <img
                  src={require("../assets/imgs/product.png").default}
                  alt=""
                />
              </div>
            </li>
            <li>
              <div className={"img-card"}>
                <img
                  src={require("../assets/imgs/product.png").default}
                  alt=""
                />
              </div>
            </li>
            <li className={"rest-counter"}>
              <span>+3</span>
            </li>
          </ul>
          <div className="text">
            <p>#874394852</p>
            <div className="d-flex order-meta align-center">
              <Space>
                <span className="secondary">$920.00</span>
                <span className="grey">30.04.2021</span>
                <div className="d-flex align-center success">
                  <Icon name={"AiOutlineCheckCircle"} size={22} />
                  Delivered
                </div>
                <span className="grey">Payed by paypal</span>
              </Space>
            </div>
          </div>
        </div>
        <Button
          className={"grey"}
          shape={"circle"}
          onClick={() => {
            history.push("/profile/orders/details");
          }}
        >
          <Icon name={"AiOutlineRight"} />
        </Button>
      </div>
    </Card>
  );
};

export default OrderProfile;
