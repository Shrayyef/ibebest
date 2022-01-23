/** @format */

import { Checkbox, Col, Form, Row } from "antd";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { login } from "../../app/reducers/app";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Icon from "../../components/Icon";
import Input from "../../components/Input";
import LineText from "../../components/LineText";
import ScreenHeader from "../../components/ScreenHeader";
import Title from "../../components/Title";
import TopBar from "../../components/TopBar";
import Wrapper from "../../components/Wrapper";
import useFetch from "../../hooks/useFetch";

const Signup = ({}) => {
  const { t } = useTranslation("common");
  const { loading, signup } = useFetch();
  const dispatch = useDispatch();
  const router = useRouter();
  const submit = async (values) => {
    const { email, password, phone, name, password_confirmation } = values;
    const { data: res } = await signup({
      data: {
        email,
        password,
        phone,
        name,
        password_confirmation,
        token:
          "uuuuyyyyyyyyyttt:APA91bEbU7wCXqTIcdqLpXgN1JmNSNgoKNxA3pzpQxtg_DsuyFjxphY-rmSG8ya7sBRAZy_7IYXH9Ofno7P0k3raWSsuLmmICwn6VGd47NqEp87i55vkLWxrZWOzId2HjmaDX1h6bf_r",
      },
    });
    if (res?.data?.api_token) {
      dispatch(login({ token: res.data.api_token }));
      router.push("/");
    }
  };

  return (
    <Wrapper>
      <TopBar />
      <Header />
      <ScreenHeader title={t("signup")} />
      <Container>
        <Row gutter={46} justify={"center"}>
          <Col md={12} lg={12} xl={12} sm={22} xs={22}>
            <Card className="login-card">
              <Title title={t("login_text")} />
              <Form onFinish={submit}>
                <Form.Item
                  name={"name"}
                  required
                  rules={[{ required: true, message: t("field_required") }]}
                >
                  <Input
                    name={"name"}
                    placeholder={t("name")}
                    iconBefore={{
                      name: "AiOutlineUser",
                      secondary: true,
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name={"email"}
                  required
                  rules={[
                    { required: true, message: t("field_required") },
                    {
                      message: t("must_be_email"),
                      validator: (rule, value, cb) => {
                        if (
                          value &&
                          !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                            value
                          )
                        ) {
                          cb("true");
                        } else {
                          cb();
                        }
                      },
                    },
                  ]}
                >
                  <Input
                    name={"email"}
                    placeholder={t("email")}
                    iconBefore={{
                      name: "MdAlternateEmail",
                      type: "material",
                      secondary: true,
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name={"phone"}
                  required
                  rules={[{ required: true, message: t("field_required") }]}
                >
                  <Input
                    name={"phone"}
                    placeholder={t("phone")}
                    iconBefore={{
                      name: "BsPhone",
                      type: "bootstrap",
                      secondary: true,
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name={"password"}
                  required
                  rules={[{ required: true, message: t("field_required") }]}
                >
                  <Input
                    name={"password"}
                    type={"password"}
                    placeholder={t("password")}
                    iconBefore={{
                      name: "AiFillLock",
                      secondary: true,
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name={"password_confirmation"}
                  required
                  rules={[{ required: true, message: t("field_required") }]}
                >
                  <Input
                    name={"password_confirmation"}
                    type={"password"}
                    placeholder={t("password_confirmation")}
                    iconBefore={{
                      name: "AiFillLock",
                      secondary: true,
                    }}
                  />
                </Form.Item>
                <div className="login-actions d-flex align-center justify-space-between">
                  <Checkbox>{t("remember_me")}</Checkbox>
                  <Link href={"/auth/forgot"}>{t("forgot_your_password")}</Link>
                </div>
                <div className="login-actions d-flex align-center justify-space-between">
                  <Link href={"/auth/login"}>{t("login")}</Link>
                </div>
                <Button
                  loading={loading}
                  htmlType={"submit"}
                  block
                  className={"custom-button secondary mt-15"}
                >
                  {t("signup")}
                </Button>
                <LineText text={t("or_signin_with")} />
                <div className="social-login d-flex align-center justify-space-between">
                  <Button className={"grey"}>
                    <Icon name="MdFacebook" type="material" />
                    {t("facebook")}
                  </Button>
                  <Button className={"grey"}>
                    <Icon name="FcGoogle" type="fc" />
                    {t("google")}
                  </Button>
                </div>
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

export default Signup;
