/** @format */

import React from "react";
// import { Link } from "react-router-dom";
import Card from "./Card";
import Icon from "./Icon";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const ProfileSide = () => {
  const { t } = useTranslation("common");
  return (
    <Card className={"profile-side"}>
      <div className="user-info">
        <p>ayham hazouri</p>
        <span className="grey">email@mail.com</span>
      </div>
      <ul className={"menu"}>
        <li>
          <Link
            exact
            activeClassName={"active"}
            href={"/profile"}
            className={"d-flex align-center"}
          >
            <Icon name={"AiOutlineUser"} />
            {t("my_information")}
          </Link>
        </li>
        <li>
          <Link
            exact
            activeClassName={"active"}
            href={"/profile/coupons"}
            className={"d-flex align-center"}
          >
            <Icon name={"RiCoupon2Line"} type={"remixicon"} />
            {t("my_coupons", { num: 10 })}
          </Link>
        </li>
        <li>
          <Link
            activeClassName={"active"}
            href={"/profile/orders"}
            className={"d-flex align-center"}
          >
            <Icon name={"FiBox"} type={"feather"} />
            {t("my_orders", { num: 10 })}
          </Link>
        </li>
        <li>
          <Link
            exact
            activeClassName={"active"}
            href={"/profile/wishlist"}
            className={"d-flex align-center"}
          >
            <Icon name={"AiOutlineHeart"} />
            {t("wishlist", { num: 10 })}
          </Link>
        </li>
        <li>
          <Link
            exact
            activeClassName={"active"}
            href={"/profile/notifications"}
            className={"d-flex align-center"}
          >
            <Icon name={"AiOutlineBell"} />
            {t("notifications", { num: 10 })}
          </Link>
        </li>
        <li>
          <Link
            activeClassName={"active"}
            href={"/profile/addresses"}
            className={"d-flex align-center"}
          >
            <Icon name={"GoLocation"} type={"github"} />
            {t("my_addresses")}
          </Link>
        </li>
        <li className={"danger"}>
          <Link href={""} className={"d-flex align-center"}>
            <Icon name={"FiLogOut"} type={"feather"} />
            {t("signout")}
          </Link>
        </li>
      </ul>
    </Card>
  );
};

export default ProfileSide;
