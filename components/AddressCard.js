/** @format */

import React from "react";
import Card from "./Card";
import Button from "./Button";
import Icon from "./Icon";
import { useTranslation } from "next-i18next";

const AddressCard = ({ with_edit }) => {
  const { t } = useTranslation("common");
  return (
    <Card className={"order-card address-card"}>
      <div className="address-wrapper d-flex align-center justify-space-between">
        <div className="text">
          <span className={"grey"}>Delivery address</span>
          <b>Home - 0553327333</b>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
        </div>
        <Button size={"small"} className={"edit-btn"} type={"link"}>
          <Icon name={"AiOutlineEdit"} size={20} />
          {t("edit")}
        </Button>
      </div>
    </Card>
  );
};

export default AddressCard;
