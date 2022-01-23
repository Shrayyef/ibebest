/** @format */

import { Col, Form, Row } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import ScreenHeader from "../../components/ScreenHeader";
import Title from "../../components/Title";
import TopBar from "../../components/TopBar";
import Wrapper from "../../components/Wrapper";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Forgot = ({}) => {
  const { t } = useTranslation("common");
  return (
    <Wrapper>
      <TopBar />
      <Header />
      <ScreenHeader title={t("forgot_your_password")} />
      <Container>
        <Row gutter={46} justify={"center"}>
          <Col md={12} lg={12} xl={12} sm={22} xs={22}>
            <Card className="login-card">
              <Title title={t("forgot_your_password")} />
              <Form>
                <Form.Item>
                  <Input
                    placeholder={t("email")}
                    iconBefore={{
                      name: "MdAlternateEmail",
                      type: "material",
                      secondary: true,
                    }}
                  />
                </Form.Item>
                <Button block className={"custom-button secondary mt-15"}>
                  {t("submit")}
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Forgot;
