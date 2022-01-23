/** @format */

import { Col, Row, Select } from "antd";
import React, { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import Loading from "./Loading";
import Icon from "./Icon";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import useFetch from "../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { set_cart } from "../app/reducers/cart";

const CartProduct = ({ product }) => {
  const { t } = useTranslation("common");

  const [state, setState] = useState({
    loading: false,
  });

  const dispatch = useDispatch();

  const { token } = useSelector((s) => s.app);

  const { updateCart, userCart, deleteItem } = useFetch();

  const updateItem = async (val) => {
    if (val == product.attributes.amount) {
      return;
    }
    setState((s) => ({ ...s, loading: true }));
    try {
      const res = await updateCart(token, {
        product_id: product.product.attributes.id,
        amount: val,
      });
      if (res.data.status === "Success") {
        const cart = await userCart(token);
        if (cart.data.status === "Success") {
          dispatch(set_cart(cart.data.data));
        }
      }
    } catch (err) {
      console.log(err);
    } finally {
      setState((s) => ({ ...s, loading: false }));
    }
  };

  const deleteCartItem = async (val) => {
    setState((s) => ({ ...s, loading: true }));
    try {
      const res = await deleteItem(token, product.product.attributes.id);
      if (res.data.status === "Success") {
        const cart = await userCart(token);
        if (cart.data.status === "Success") {
          dispatch(set_cart(cart.data.data));
        }
      }
    } catch (err) {
      console.log(err);
    } finally {
      setState((s) => ({ ...s, loading: false }));
    }
  };

  return (
    <Card className={"cart-product"}>
      <Row gutter={46}>
        <Col span={9}>
          <div className="product-image d-flex">
            <div className="image">
              <Image
                src={product.product.links.self.thumbnail}
                width={100}
                height={100}
              />
            </div>
            <div className="prodcut-content">
              <span className="grey">
                {product.product.attributes.description}
              </span>
              <p>{product.product.attributes.name}</p>
              <div className="actions d-flex">
                <Button
                  size={"small"}
                  className={"delete-btn"}
                  onClick={deleteCartItem}
                  type={"link"}
                >
                  <Icon name={"AiOutlineDelete"} size={20} />
                  {t("delete")}
                </Button>
                <Button size={"small"} className={"fav-btn"} type={"link"}>
                  <Icon name={"AiOutlineHeart"} size={20} />
                  {t("add_to_favotire")}
                </Button>
              </div>
            </div>
          </div>
        </Col>
        <Col span={5} className={"cart-col"}>
          <h3 className={"secondary"}>${product.final_price.product_price}</h3>
        </Col>
        <Col span={5} className={"cart-col"}>
          {state.loading ? (
            <Loading />
          ) : (
            <Select
              value={product.attributes.amount}
              onChange={(val) => updateItem(val)}
            >
              {Array.from(Array(10).keys()).map((i) => (
                <Select.Option key={i + 1} value={i + 1}>
                  {i + 1}
                </Select.Option>
              ))}
            </Select>
          )}
        </Col>
        <Col span={5}>
          <p className={"grey"}>
            {t("product_price")}: ${product.final_price.product_price}
          </p>
          <p className={"grey"}>{t("shipping_price")}: $5</p>
          <p>{t("total_price")}: </p>
          <h4 className="secondary">${product.final_price.all_price}</h4>
        </Col>
      </Row>
    </Card>
  );
};

export default CartProduct;
