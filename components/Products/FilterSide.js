/** @format */

import React, { useState, useEffect } from "react";
import Input from "../Input";
import Title from "../Title";
import Button from "../Button";
import { useTranslation } from "next-i18next";
import { Menu, Space, Checkbox } from "antd";
import Tag from "../Tag";
const { SubMenu } = Menu;

const FilterSide = ({ cats }) => {
  const { t } = useTranslation("common");

  const [state, setState] =
    useState <
    any >
    {
      cats: [],
    };

  useEffect(() => {
    setState((s) => ({ ...s, cats }));
  }, [cats]);

  const renderChilds = (cat) => {
    return cat.childs.map((one, index: number) => (
      <li key={`child-${index}`}>{one.name}</li>
    ));
  };

  return (
    <aside className={"filter-side"}>
      <Title title={t("categories")} />
      <div className="cats-list">
        <Menu mode="inline">
          {state.cats.map((cat, index: number) => (
            <SubMenu key={`cat-${index}`} title={cat.name}>
              {cat.childs.map((child, ind: number) => (
                <Menu.Item key={`child-${ind}`}>{child.name}</Menu.Item>
              ))}
            </SubMenu>
          ))}
        </Menu>
      </div>
      <Title title={t("filter_by_price")} />
      <div className="price-filter d-flex">
        <Space>
          <Input className={"sm"} placeholder={t("from")} />
          -
          <Input className={"sm"} placeholder={t("to")} />
          <Button className={"secondary"} size={"large"}>
            {t("filter")}
          </Button>
        </Space>
      </div>
      <div className="price-range">
        <span className={"grey"}>{t("price")}: TL 0 - TL 50</span>
      </div>
      <Title title={t("sorting")} />
      <div className="sort-wrapper">
        <Checkbox>{t("most_sale")}</Checkbox>
        <Checkbox>{t("most_order")}</Checkbox>
        <Checkbox>{t("newest")}</Checkbox>
        <Checkbox>{t("best_rating")}</Checkbox>
      </div>
      <Title title={t("tags")} />
      <div className="tags-wrapper d-flex flex-wrap">
        <Tag title={"coffe"} />
        <Tag title={"tv"} />
        <Tag title={"coffe"} />
        <Tag title={"tv"} />
        <Tag title={"coffe"} />
        <Tag title={"tv"} />
        <Tag title={"electronics"} />
      </div>
    </aside>
  );
};

export default FilterSide;
