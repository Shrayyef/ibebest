/** @format */

// import Head from "next/head";
// import Image from "next/image";
import { Carousel, Col, Form, Row, Space } from "antd";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
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
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Product = ({ pageProps: { product } }) => {
  console.log("product", product);
  const sliderRef = useRef(null);
  const { t, i18n } = useTranslation("common");
  const [state, setState] = useState({
    color: "",
    size: "",
    current: 1,
    loading: false,
  });

  const { token } = useSelector((s) => s.app);

  const { addToCart: addToCartFetch } = useFetch();

  const router = useRouter();

  const addToCart = async () => {
    if (!token) {
      router.push("/auth/login");
      return;
    }
    try {
      setState((s) => ({ ...s, loading: true }));
      const res = await addToCartFetch(token, {
        product_id: product.id,
        address_id: 5,
        amount: 1,
      });
      console.log({ res });
    } catch (err) {
      setState((s) => ({ ...s, loading: false }));
    } finally {
      setState((s) => ({ ...s, loading: false }));
    }
  };

  return (
    <WrapperComponnt>
      <TopBar />
      <Header />
      {/* <pre>{JSON.stringify(product, null, 4)}</pre> */}
      <Container>
        <Row gutter={46}>
          <Col xs={24} sm={12}>
            <div className="product-images d-flex">
              <div className="thumbs">
                {[{ path: product.links.self.thumbnail }].map((one, index) => (
                  <div
                    onClick={() => {
                      sliderRef.current.goTo(index);
                    }}
                    className={"thumb-img"}
                    key={`thumb-${index}`}
                  >
                    <div
                      className="product-image"
                      style={{ position: "relative", height: 75, width: 75 }}
                    >
                      <Image
                        layout="fill"
                        objectFit="fill"
                        src={one.path}
                        alt="product"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="images-slider">
                <Carousel
                  ref={sliderRef}
                  className={"slide-wrapper"}
                  vertical
                  dots={false}
                  arrows={false}
                  slidesToShow={1}
                  swipe={true}
                  draggable={true}
                  infinite={false}
                  variableWidth={true}
                  style={{
                    position: "relative",
                    minHeight: 450,
                    width: 600,
                  }}
                >
                  {[{ path: product.links.self.thumbnail }].map(
                    (one, index) => (
                      <div className="img-slide" key={`image-${index}`}>
                        <div style={{ height: 450, width: 500 }}>
                          <Image
                            objectFit="fill"
                            layout="fill"
                            src={one.path}
                            alt="product"
                          />
                        </div>
                      </div>
                    )
                  )}
                </Carousel>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={12}>
            <div className="product-meta">
              <div className="category">
                <p className="grey">{product.attributes.name}</p>
              </div>
              <h2>{product.attributes.description}</h2>
              <div className="product-rating d-flex align-center">
                <div className="rating d-flex align-center">
                  <Icon name={"AiOutlineStar"} size={22} />
                  <span className={"warning"}>{t("rate", { num: 255 })}</span>
                </div>
                <div className="availablity d-flex align-center">
                  <Icon name={"AiOutlineCheckCircle"} size={22} />
                  <span className={"success"}>{t("rate", { num: 255 })}</span>
                </div>
                <div className="store-name d-flex align-center">
                  {/* <Link href={"/"}> */}
                  <span className={"secondary"}>apple store</span>
                  {/* </Link> */}
                </div>
              </div>
              <div className="product-color d-flex align-center">
                <span className={"grey"}>{t("color")}: </span>
                <div className="colors">
                  <Space>
                    <Button
                      className={"color-btn"}
                      shape={"circle"}
                      onClick={() => {
                        setState((s) => ({ ...s, color: "red" }));
                      }}
                      style={{ background: "red" }}
                    >
                      {state.color === "red" ? (
                        <Icon
                          name={"AiOutlineCheck"}
                          size={15}
                          color={"#fff"}
                        />
                      ) : (
                        <Icon
                          type={"fa"}
                          name={"FaCircle"}
                          size={15}
                          color={"red"}
                        />
                      )}
                    </Button>
                    <Button
                      className={"color-btn"}
                      shape={"circle"}
                      onClick={() => {
                        setState((s) => ({ ...s, color: "blue" }));
                      }}
                      style={{ background: "blue" }}
                    >
                      {state.color === "blue" ? (
                        <Icon
                          name={"AiOutlineCheck"}
                          size={15}
                          color={"#fff"}
                        />
                      ) : (
                        <Icon
                          type={"fa"}
                          name={"FaCircle"}
                          size={15}
                          color={"blue"}
                        />
                      )}
                    </Button>
                    <Button
                      className={"color-btn"}
                      shape={"circle"}
                      onClick={() => {
                        setState((s) => ({ ...s, color: "pink" }));
                      }}
                      style={{ background: "pink" }}
                    >
                      {state.color === "pink" ? (
                        <Icon
                          name={"AiOutlineCheck"}
                          size={15}
                          color={"#fff"}
                        />
                      ) : (
                        <Icon
                          type={"fa"}
                          name={"FaCircle"}
                          size={15}
                          color={"pink"}
                        />
                      )}
                    </Button>
                  </Space>
                </div>
              </div>
              <div className="product-size d-flex align-center">
                <span className={"grey"}>{t("size")}: </span>
                <div className="sizes">
                  <Space>
                    <Button
                      onClick={() => {
                        setState((s) => ({ ...s, size: "sm" }));
                      }}
                      className={`size-btn ${
                        state.size === "sm" ? "selected" : ""
                      }`}
                    >
                      sm
                    </Button>
                    <Button
                      onClick={() => {
                        setState((s) => ({ ...s, size: "lg" }));
                      }}
                      className={`size-btn ${
                        state.size === "lg" ? "selected" : ""
                      }`}
                    >
                      lg
                    </Button>
                    <Button
                      onClick={() => {
                        setState((s) => ({ ...s, size: "xl" }));
                      }}
                      className={`size-btn ${
                        state.size === "xl" ? "selected" : ""
                      }`}
                    >
                      xl
                    </Button>
                  </Space>
                </div>
              </div>
              <div className="product-shipping d-flex align-center justify-space-between">
                <span className={"grey"}>{t("estimated_shipping_time")}: </span>
                <span className={"grey"}>40 {t("day")}</span>
              </div>
              <div className="product-shipping d-flex align-center justify-space-between">
                <span className={"grey"}>{t("product_code")}: </span>
                <span className={"grey"}>hffsidyhf</span>
              </div>
              <Price horizontal price={product.attributes.price} />
              <div className="product-page actions d-flex">
                <Button
                  loading={state.loading}
                  className="add-to-card"
                  onClick={addToCart}
                >
                  <Icon name={"AiOutlineShoppingCart"} />
                  {t("add_to_basket")}
                </Button>
                <Button className="add-to-wish">
                  <Icon name={"AiOutlineHeart"} />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Card className={"product-description"}>
          <ul className={"menu d-flex"}>
            <li className={state.current === 1 ? "active" : ""}>
              <Button onClick={() => setState((s) => ({ ...s, current: 1 }))}>
                {t("description")}
              </Button>
            </li>
            <li className={state.current === 2 ? "active" : ""}>
              <Button onClick={() => setState((s) => ({ ...s, current: 2 }))}>
                {t("comments", { num: 2 })}
              </Button>
            </li>
            <li className={state.current === 3 ? "active" : ""}>
              <Button onClick={() => setState((s) => ({ ...s, current: 3 }))}>
                {t("reviews", { num: 2 })}
              </Button>
            </li>
            <li className={state.current === 4 ? "active" : ""}>
              <Button onClick={() => setState((s) => ({ ...s, current: 4 }))}>
                {t("purchase_and_return_policy")}
              </Button>
            </li>
          </ul>
          {state.current === 1 && (
            <div className="card-body">
              <div className="desc-row d-flex">
                <div style={{ width: 8150, height: 400, position: "relative" }}>
                  <Image
                    layout="fill"
                    objectFit="contain"
                    src={product.links.self.thumbnail}
                    alt="product"
                  />
                </div>
                <div className="content">
                  <h2>iPhone SE red 64 GB with 6 GB RAM & dual sim</h2>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                    Extremes of Good and Evil) by Cicero, written in 45 BC. This
                    book is a treatise on the theory of ethics, very popular
                    during the Renaissance. The first line of Lorem Ipsum,
                    "Lorem ipsum dolor sit amet..", comes from a line in section
                    1.10.32. The standard chunk of Lorem Ipsum used since the
                    1500s is reproduced below for those interested. Sections
                    1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                    Cicero are also reproduced in their exact original form,
                    accompanied by English versions from the 1914 translation by
                    H. Rackham.
                  </p>
                </div>
              </div>
              <div className="desc-row d-flex flex-row-rev">
                <div style={{ width: 8150, height: 400, position: "relative" }}>
                  <Image
                    layout="fill"
                    objectFit="contain"
                    src={product.links.self.thumbnail}
                    alt="product"
                  />
                </div>
                <div className="content">
                  <h2>iPhone SE red 64 GB with 6 GB RAM & dual sim</h2>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                    Extremes of Good and Evil) by Cicero, written in 45 BC. This
                    book is a treatise on the theory of ethics, very popular
                    during the Renaissance. The first line of Lorem Ipsum,
                    "Lorem ipsum dolor sit amet..", comes from a line in section
                    1.10.32. The standard chunk of Lorem Ipsum used since the
                    1500s is reproduced below for those interested. Sections
                    1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                    Cicero are also reproduced in their exact original form,
                    accompanied by English versions from the 1914 translation by
                    H. Rackham.
                  </p>
                </div>
              </div>
            </div>
          )}
          {state.current === 2 && (
            <div className="card-body">
              <Comment />
              <Comment />
              <Comment />
              <Title title={t("add_your_comment")} />
              <Form>
                <Row gutter={46}>
                  <Col xs={24} sm={8}>
                    <Form.Item name={"name"}>
                      <Input placeholder={t("name")} name={"name"} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={8}>
                    <Form.Item name={"email"}>
                      <Input placeholder={t("email")} name={"email"} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={8}>
                    <Form.Item name={"phone"}>
                      <Input placeholder={t("phone")} name={"phone"} />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item name={"message"}>
                      <Input
                        textarea
                        placeholder={t("message")}
                        name={"message"}
                      />
                    </Form.Item>
                  </Col>
                  <Col>
                    <Button
                      className={"secondary custom-button"}
                      size={"large"}
                      onClick={() =>
                        setState((s) => ({ ...s, show_cats: true }))
                      }
                    >
                      <Icon type={"feather"} name={"FiSend"} size={22} />
                      {t("add_comment")}
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          )}
        </Card>
        <SimilarProducts />
      </Container>
      <Footer />
    </WrapperComponnt>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ locale, req, params }) => {
      const { id } = params;
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
        const json = await fetch(`${BASE_URL}/product/all`, {
          method: "POST",
          body: JSON.stringify({
            filter: [
              {
                name: "id",
                value: id,
                op: "=",
              },
            ],
          }),
        });
        const res = await json.json();

        return {
          props: {
            product: res.data[0],
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

export default Product;
