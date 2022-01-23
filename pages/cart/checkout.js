/** @format */

// import Head from "next/head";
// import Image from "next/image";
import { Carousel, Col, Form, Row, Space } from "antd";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { login } from "../../app/reducers/app";
import { wrapper } from "../../app/store";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Icon from "../../components/Icon";
import Price from "../../components/Price";
import TopBar from "../../components/TopBar";
import WrapperComponnt from "../../components/Wrapper";
import Comment from "../../components/Comment";
import Title from "../../components/Title";
import useFetch, { BASE_URL } from "../../hooks/useFetch";
import Input from "../../components/Input";
import SimilarProducts from "../../components/Product/SimilarProducts";
import ScreenHeader from "../../components/ScreenHeader";
import CartProduct from "../../components/CartProduct";
import CheckoutProduct from "../../components/CheckoutProduct";

import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Checkout = ({ pageProps: { product } }) => {
  const sliderRef = useRef(null);
  const { t, i18n } = useTranslation("common");
  const [state, setState] = useState({
    color: "",
    size: "",
    current: 1,
    loading: false,
    shops: [],
    checkout: false,
  });

  const { addToCart: addToCartFetch, cartPackages, orderPlace } = useFetch();

  const { token } = useSelector((s) => s.app);
  const { items } = useSelector((s) => s.cart);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      if (!token) {
        router.push("/auth/login");
      } else {
        getData();
      }
    }, 1500);
  }, [token]);

  const getData = async () => {
    setState((s) => ({ ...s, loading: true }));
    try {
      const res = await cartPackages(token);
      if (res.statusCode === 200) {
        setState((s) => ({ ...s, shops: res.data.data }));
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    } finally {
      setState((s) => ({ ...s, loading: false }));
    }
  };

  const calcTotal = () => {
    return items.reduce((sum, item) => {
      return sum + item.final_price.all_price;
    }, 0);
  };

  const placeOrder = async () => {
    setState((s) => ({ ...s, checkout: true }));
    try {
      const res = await orderPlace(token, {
        address_id: 3,
        payment_method: 1,
      });
      if (res.statusCode === 200) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setState((s) => ({ ...s, checkout: false }));
    }
  };

  return (
    <WrapperComponnt>
      <TopBar />
      <Header />
      <ScreenHeader title={t("checkout")} />
      <Container>
        {state.shops.map((shop) => (
          <div key={`shop-${shop.id}`}>
            <Title title={shop.attributes.name} />
            <Row gutter={46}>
              <Col span={9}>
                <h3>{t("product")}</h3>
              </Col>
              <Col span={5} className={"cart-col"}>
                <h3>{t("price")}</h3>
              </Col>
              <Col span={5} className={"cart-col"}>
                <h3>{t("quantity")}</h3>
              </Col>
              <Col span={5}>
                <h3>{t("total")}</h3>
              </Col>
            </Row>
            {shop.user_products.map((product) => (
              <CheckoutProduct
                product={product}
                key={`product-${product.id}`}
              />
            ))}
          </div>
        ))}

        <div className="checkout-section d-flex justify-space-between">
          <Card className={"grand-total"}>
            <Title title={t("grand_total")} />
            <div className="text-row border-bottom d-flex justify-space-between">
              <span className="grey">{t("subtotal")}</span>
              <span className="grey">${calcTotal()}</span>
            </div>
            <div className="text-row border-bottom d-flex justify-space-between">
              <span className="grey">{t("shipping")}</span>
              <span className="grey">$9</span>
            </div>
            <div className="text-row d-flex justify-space-between">
              <h3>{t("total_cost")}</h3>
              <h3>${calcTotal()}</h3>
            </div>
            <Button
              block
              className={"custom-button success"}
              loading={state.checkout}
              onClick={placeOrder}
            >
              <Icon name={"AiOutlineCreditCard"} size={18} />
              {t("proceed_to_checkout")}
            </Button>
          </Card>
        </div>
      </Container>
      <Footer />
    </WrapperComponnt>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ locale, req, params }) => {
      const { token } = req.cookies;
      let me = {};
      if (token) {
        const authJson = await fetch(`${BASE_URL}/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
            contentType: "application/json",
            Accept: "application/json",
          },
        });

        const res = await authJson.json();
        me = res;
        store.dispatch(login({ token, user: res }));
      }
      store.dispatch(login({ token: "asdasd", user: {} }));
      try {
        return {
          props: {
            me,
            token: token ? token : "",
            ...(await serverSideTranslations(locale, ["common"])),
          },
        };
      } catch (err) {
        console.log(err);
        return { props: {} };
      }
    }
);

export default Checkout;
