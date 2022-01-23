/** @format */

import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import LangSwitcher from "./LangSwticher";
import { Switch } from "antd";
import { useTheme } from "next-themes";

const TopBarMenu = () => {
  const { t } = useTranslation("common");
  const { theme, setTheme } = useTheme();

  return (
    <ul className="menu top-bar-menu">
      <li>
        <Link href={"/"}>{t("home")}</Link>
      </li>
      <li>
        <Link href={"/about"}>{t("about")}</Link>
      </li>
      <li>
        <Link href={"/services"}>{t("services")}</Link>
      </li>
      <li>
        <Link href={"/news"}>{t("news")}</Link>
      </li>
      <li>
        <Link href={"/contact"}>{t("contact")}</Link>
      </li>
      <LangSwitcher />
      <li className="theme-switch">
        <Switch
          checked={theme === "dark"}
          onChange={(val) => {
            console.log({ val });
            if (val) {
              setTheme("dark");
            } else {
              setTheme("light");
            }
          }}
        />
      </li>
    </ul>
  );
};

export default TopBarMenu;
