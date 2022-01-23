/** @format */

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Container from "../Container";
import { useTranslation } from "next-i18next";
import Icon from "../Icon";
import ProductCard from "../ProductCard";
import useFetch from "../../hooks/useFetch";
import Button from "../Button";

const ForYou = ({ data }) => {
  const { t } = useTranslation("common");

  const [state, setState] = useState({
    selected: "",
  });

  useEffect(() => {
    setState((s) => ({
      ...s,
      selected: data[0]?.id,
    }));
  }, []);

  return (
    <div className="for-you">
      <Container>
        <div className="title d-flex flex-row align-center justify-space-between">
          <h2>{t("for_you")}</h2>
          <div className="categories d-flex flex-row align-center">
            {data.map((item, index) => (
              <Button
                onClick={() => setState((s) => ({ ...s, selected: item.id }))}
                className={`for-your-product ${
                  state.selected === item.id ? "selected" : ""
                }`}
                type={"link"}
                key={`cat-${index}`}
              >
                {item.attributes.name}
              </Button>
            ))}
          </div>
        </div>
        {data.map((item, index) => (
          <div className="main-products" key={`category-${index}`}>
            {item.id === state.selected &&
              item.products.map((product, index) => (
                <ProductCard
                  className={"small"}
                  product={product}
                  key={`for-you-${index}`}
                />
              ))}
          </div>
        ))}
      </Container>
    </div>
  );
};

export default ForYou;
