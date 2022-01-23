/** @format */

import React from "react";
import Container from "../Container";
import ProductCard from "../ProductCard";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Icon from "../Icon";
import Button from "../Button";
import { Carousel } from "antd";

const SimilarProducts = ({}) => {
  const { t } = useTranslation("common");
  return (
    <section className={"most-wanted"}>
      <Container>
        <div className="title d-flex flex-row align-center justify-space-between">
          <h2>{t("similar_products")}</h2>
          <Link
            href={"/products"}
            className={"d-flex flex-row align-center secondary"}
            passHref
          >
            <a>
              {t("view_more")}{" "}
              <Icon name={"AiOutlineArrowRight"} secondary size={22} />
            </a>
          </Link>
        </div>
        <Carousel
          className={"slide-wrapper"}
          dots={false}
          arrows={true}
          slidesToShow={4}
          swipe={true}
          draggable={true}
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
          <ProductCard className={"slide-product"} />
          <ProductCard className={"slide-product"} />
          <ProductCard className={"slide-product"} />
          <ProductCard className={"slide-product"} />
          <ProductCard className={"slide-product"} />
          <ProductCard className={"slide-product"} />
          <ProductCard className={"slide-product"} />
          <ProductCard className={"slide-product"} />
          <ProductCard className={"slide-product"} />
          <ProductCard className={"slide-product"} />
        </Carousel>
      </Container>
    </section>
  );
};

export default SimilarProducts;
