/** @format */

import React from "react";
import Card from "./Card";
import Button from "./Button";
import Icon from "./Icon";
import { Col, Row } from "antd";
import { useTranslation } from "next-i18next";

const Coupon = ({}) => {
  const { t } = useTranslation("common");
  return (
    <Card className={"coupon-card"}>
      <div className="coupon-wrapper d-flex justfiy-space-between align-center">
        <div className="coupon-content d-flex flex-1 align-center">
          <div className="img">
            <p className="secondary">$50</p>
          </div>
          <div className="text">
            <p>Discount coupon for all categories</p>
            <span className="grey">30.04.2021</span>
          </div>
        </div>
        <Button className={"secondary custom-button"}>
          <Icon name={"RiCoupon2Line"} type={"remixicon"} size={20} />
          {t("apply")}
        </Button>
      </div>
    </Card>
  );
};

export default Coupon;
