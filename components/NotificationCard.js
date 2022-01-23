/** @format */

import React from "react";
import Card from "./Card";
import Button from "./Button";
import Icon from "./Icon";
import { Col, Row, Space } from "antd";
import { useTranslation } from "next-i18next";
import { useHistory } from "react-router";

const NotificationCard = ({}) => {
  const { t } = useTranslation("common");
  const history = useHistory();
  return (
    <Card className={"order-card item-card not-card"}>
      <div className="order-wrapper d-flex justfiy-space-between align-center">
        <div className="not-icon">
          <Icon name={"RiCoupon2Line"} type={"remixicon"} size={20} />
        </div>
        <div className="content">
          <p>
            Discounts up to 50% in the electrical appliances section, use the
            purchase coupon to get the discount
          </p>
        </div>
      </div>
    </Card>
  );
};

export default NotificationCard;
