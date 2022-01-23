/** @format */

import { Col, Row } from "antd";
import React from "react";
import Container from "./Container";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Icon from "./Icon";
import Input from "./Input";
import Button from "./Button";
import Image from "next/image";

const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <footer>
      <Container>
        <Row>
          <Col span={24}>
            <div className="sub-wrapper d-flex justify-space-between align-center">
              <h4>{t("subscribe_text")}</h4>

              <div className="form-subs d-flex">
                <Input placeholder={t("placeholder_email")} />
                <Button size={"large"}>{t("subscribe")}</Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row gutter={64}>
          <Col xs={24} sm={6} className={"footer-col"}>
            <Image
              width={50}
              height={50}
              src="/imgs/footer-logo.png"
              alt={t("app_name")}
            />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </Col>
          <Col xs={24} sm={6} className={"footer-col"}>
            <div className="title">
              <h3 className={"secondary"}>{t("categories")}</h3>
            </div>
            <ul className="menu">
              <li>
                <Link href={"/"}>Laptop</Link>
              </li>
              <li>
                <Link href={"/"}>Laptop</Link>
              </li>
              <li>
                <Link href={"/"}>Laptop</Link>
              </li>
              <li>
                <Link href={"/"}>Laptop</Link>
              </li>
              <li>
                <Link href={"/"}>Laptop</Link>
              </li>
              <li>
                <Link href={"/"}>Laptop</Link>
              </li>
              <li>
                <Link href={"/"}>Laptop</Link>
              </li>
              <li>
                <Link href={"/"}>Laptop</Link>
              </li>
            </ul>
          </Col>
          <Col xs={24} sm={6} className={"footer-col"}>
            <div className="title">
              <h3 className={"secondary"}>{t("products")}</h3>
            </div>
            <ul className="menu">
              <li>
                <Link href={"/"}>Laptop</Link>
              </li>
              <li>
                <Link href={"/"}>Laptop</Link>
              </li>
              <li>
                <Link href={"/"}>Laptop</Link>
              </li>
              <li>
                <Link href={"/"}>Laptop</Link>
              </li>
              <li>
                <Link href={"/"}>Laptop</Link>
              </li>
              <li>
                <Link href={"/"}>Laptop</Link>
              </li>
              <li>
                <Link href={"/"}>Laptop</Link>
              </li>
              <li>
                <Link href={"/"}>Laptop</Link>
              </li>
            </ul>
          </Col>
          <Col xs={24} sm={6} className={"footer-col"}>
            <div className="title">
              <h3 className={"secondary"}>{t("contact")}</h3>
            </div>
            <p>
              SANAYİ MAH. 60208 NOLU CAD.NO.88 ŞEHİTKAMİL GAZİANTEP ŞEHİTKAMİL
              GAZİANTEP - TURKEY
            </p>
            <p>+90 000 000 00 00</p>
            <p>info@website.com</p>
            <p>https://www.website.com</p>
            <ul className="social-menu menu d-flex">
              <li>
                <Icon name={"FaFacebookF"} type={"fa"} secondary size={28} />
              </li>
              <li>
                <Icon name={"FiTwitter"} type={"feather"} secondary size={28} />
              </li>
              <li>
                <Icon
                  name={"FaWhatsappSquare"}
                  type={"fa"}
                  secondary
                  size={28}
                />
              </li>
              <li>
                <Icon
                  name={"AiOutlineInstagram"}
                  type={"antdesign"}
                  secondary
                  size={28}
                />
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
