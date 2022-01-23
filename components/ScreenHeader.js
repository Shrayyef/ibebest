/** @format */

import React from "react";
import Container from "./Container";
import { Breadcrumb, PageHeader as AntPageHeader } from "antd";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

const ScreenHeader = ({ title }) => {
  const { t } = useTranslation("common");

  const router = useRouter();
  const routes = [
    {
      path: "/",
      breadcrumbName: t("home"),
    },
    {
      path: router?.pathname,
      breadcrumbName: title,
    },
  ];

  return (
    <div className="page-header">
      <Container>
        <Breadcrumb>
          {routes.map((one) => (
            <Breadcrumb.Item key={one.path}>
              <Link href={one.path}>{one.breadcrumbName}</Link>
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
        <div className="title d-flex flex-row align-center justify-space-between">
          <h2>{title}</h2>
        </div>
      </Container>
    </div>
  );
};

export default ScreenHeader;
