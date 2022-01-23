/** @format */

import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import Container from "./Container";
import Button from "./Button";
import Icon from "./Icon";
import Input from "./Input";
import { Popover } from "antd";
import CategoriesMenu from "./CategoriesMenu";
import Link from "next/link";
import { useSelector } from "react-redux";
import Image from "next/image";
import useFetch from "../hooks/useFetch";
import { useDispatch } from "react-redux";
import { login } from "../app/reducers/app";
import { set_cart } from "../app/reducers/cart";

const Header = () => {
  const { t } = useTranslation("common");

  const { loggedIn, user } = useSelector((s) => s.app);
  const { items } = useSelector((s) => s.cart);

  const [state, setState] = useState({
    show_cats: false,
  });

  const dispatch = useDispatch();

  const { me, userCart } = useFetch();

  const checkUser = async (token) => {
    if (!token) return;
    try {
      const { data } = await me({ token });
      if (data) {
        dispatch(login({ token, user: data }));
        const cart = await userCart(token);
        if (cart.data.status === "Success") {
          dispatch(set_cart(cart.data.data));
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      const token = localStorage.getItem("token");
      checkUser(token);
    }
  }, []);

  return (
    <header className="header">
      <Container>
        <div className="logo">
          <Link href="/" passHref>
            <a>
              <Image
                width={50}
                height={50}
                src="/imgs/logo.png"
                alt={t("app_name")}
              />
            </a>
          </Link>
        </div>
        <Popover
          content={<CategoriesMenu />}
          title={false}
          trigger="click"
          placement="bottomRight"
          visible={state.show_cats}
          onVisibleChange={(visible) =>
            setState((s) => ({ ...s, show_cats: visible }))
          }
        >
          <div className="categories-menu">
            <Button
              className={"secondary"}
              size={"large"}
              onClick={() => setState((s) => ({ ...s, show_cats: true }))}
            >
              <Icon type={"heroicons"} name={"HiOutlineViewList"} size={22} />
              {t("all_products")}
            </Button>
          </div>
        </Popover>
        <div className="search-bar">
          <Input
            placeholder={t("search")}
            iconBefore={{ type: "bootstrap", name: "BsSearch" }}
          />
        </div>
        <div className="right-menu">
          <ul className="menu d-flex flex-row">
            {loggedIn ? (
              <li>
                <Link href={"/profile"} passHref>
                  <div className="d-flex align-center user-menu">
                    <Icon
                      type={"antdeisgn"}
                      name={"AiOutlineUser"}
                      size={28}
                      secondary
                    />
                    <div>
                      <span>{t("my_account")}</span>
                      <p>{user.name}</p>
                    </div>
                  </div>
                </Link>
              </li>
            ) : (
              <li>
                <Link href={"/auth/login"} passHref>
                  <a>
                    <div className="d-flex align-center user-menu">
                      <Icon
                        type={"antdeisgn"}
                        name={"AiOutlineUser"}
                        size={28}
                        secondary
                      />
                      <div>
                        <span>{t("my_account")}</span>
                        <p>{t("login/signup")}</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
            )}
            <li>
              <div className="d-flex align-center user-menu">
                <Icon
                  type={"antdeisgn"}
                  name={"AiOutlineHeart"}
                  size={28}
                  secondary
                />
                <div>
                  <span>{t("items", { num: 0 })}</span>
                  <p>{t("wishlist")}</p>
                </div>
              </div>
            </li>
            <li>
              <Link href={"/cart"}>
                <div className="d-flex align-center user-menu">
                  <Icon
                    type={"antdeisgn"}
                    name={"AiOutlineShoppingCart"}
                    size={28}
                    secondary
                  />
                  <div>
                    <span>{t("items", { num: items.length })}</span>
                    <p>{t("cart")}</p>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
