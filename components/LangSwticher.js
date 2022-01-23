/** @format */

import { Dropdown, Menu } from "antd";
import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const LangSwitcher = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <Dropdown
      overlay={
        <Menu>
          <Menu.Item key={"en"}>
            <Link href="/" locale="en" onClick={() => alert("asd")}>
              {t("english")}
            </Link>
          </Menu.Item>
          <Menu.Item key={"ar"}>
            <Link href="/" locale="ar">
              {t("arabic")}
            </Link>
          </Menu.Item>
        </Menu>
      }
    >
      <li>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          {t(i18n.language)}
        </a>
      </li>
    </Dropdown>
  );
};

export default LangSwitcher;
