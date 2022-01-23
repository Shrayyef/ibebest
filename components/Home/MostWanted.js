/** @format */

import React, { useEffect, useState } from "react";
import Container from "../Container";
import ProductCard from "../ProductCard";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Icon from "../Icon";
import Button from "../Button";
import { Carousel } from "antd";
import useFetch from "../../hooks/useFetch";

const MostWanted = ({ data }) => {
  const { t, i18n } = useTranslation("common");
  return (
    <section className={"most-wanted"}>
      <Container>
        <div className="title d-flex flex-row align-center justify-space-between">
          <h2>{t("most_wanted")}</h2>
          <Link
            href={"/products"}
            className={"d-flex flex-row align-center secondary"}
            passHref
          >
            <a>
              {t("view_more")}{" "}
              <Icon
                name={
                  i18n.language === "ar"
                    ? "AiOutlineArrowLeft"
                    : "AiOutlineArrowRight"
                }
                secondary
                size={22}
              />
            </a>
          </Link>
        </div>
        <Carousel
          className={"slide-wrapper"}
          dots={false}
          arrows={true}
          rtl={i18n.language === "ar"}
          slidesToShow={4}
          // swipe={true}
          // draggable={true}
          infinite={false}
          responsive={[
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 1,
                arrows: false,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                arrows: false,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
              },
            },
          ]}
          nextArrow={
            <Button>
              <Icon name={"AiOutlineArrowRight"} secondary size={22} />
            </Button>
          }
          prevArrow={
            <Button>
              <Icon name={"AiOutlineArrowLeft"} secondary size={22} />
            </Button>
          }
        >
          {data.map((product, index) => (
            <ProductCard
              className={"slide-product"}
              product={product}
              key={`product-most-${index}`}
            />
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default MostWanted;
