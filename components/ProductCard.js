/** @format */

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set_cart } from "../app/reducers/cart";
import useFetch from "../hooks/useFetch";
import Button from "./Button";
import Card from "./Card";
import Icon from "./Icon";
import Price from "./Price";

const ProductCard = ({ className, product }) => {
  if (!product) return null;

  const [state, setState] = useState({ loading: false });

  const { token } = useSelector((s) => s.app);

  const dispatch = useDispatch();

  const { addToCart, userCart } = useFetch();

  const addItemToCart = async (e) => {
    e.stopPropagation();
    setState((s) => ({ ...s, loading: true }));
    try {
      const res = await addToCart(token, {
        product_id: product.id,
        address_id: 5,
        amount: 1,
      });
      if (res.data.status === "Success") {
        const cart = await userCart();
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
    <Card className={`product-card ${className}`}>
      <Link href={`/product/${product.id}`} passHref>
        <a className="product-link">
          <div
            className="product-image"
            style={{ position: "relative", height: 250 }}
          >
            <Image
              layout="fill"
              objectFit="fill"
              src={
                product?.links?.self?.thumbnail ||
                "https://picsum.photos/200/300"
              }
              alt="product"
            />
          </div>

          <span className="category grey">{product.attributes.name}</span>
          <p>
            {product.attributes.description ||
              "iPhone SE red 64 GB with 6 GB RAM & dual sim"}
          </p>
          <div className="card-footer d-flex align-center justify-space-between">
            <Price price={product.attributes.price} />
            <div className="actions d-flex">
              <Button
                loading={state.loading}
                className="add-to-card"
                onClick={addItemToCart}
              >
                <Icon
                  name={"AiOutlineShoppingCart"}
                  size={className === "small" ? 12 : 18}
                />
              </Button>
              <Button className="add-to-wish">
                <Icon
                  name={"AiOutlineHeart"}
                  size={className === "small" ? 12 : 18}
                />
              </Button>
            </div>
          </div>
        </a>
      </Link>
    </Card>
  );
};
export default ProductCard;
