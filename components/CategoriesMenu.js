/** @format */

import React, { useState } from "react";
import Link from "next/link";
import Card from "./Card";
import { useTranslation } from "next-i18next";

const CategoriesMenu = () => {
  const { t } = useTranslation("common");
  const [state, setState] = useState({
    cats: [
      {
        name: "Expresso Coffee",
        // background: require("../assets/imgs/cat-back.png").default,
        childs: [
          { name: "Expresso Coffee" },
          { name: "Laptop" },
          { name: "Computer" },
          { name: "Clothes" },
          { name: "Jacket" },
          { name: "Car Washer" },
          { name: "Expresso Coffee" },
          { name: "Laptop" },
          { name: "Computer" },
          { name: "Clothes" },
          { name: "Jacket" },
          { name: "Car Washer" },
          { name: "Expresso Coffee" },
          { name: "Laptop" },
          { name: "Computer" },
          { name: "Clothes" },
          { name: "Jacket" },
          { name: "Car Washer" },
          { name: "Expresso Coffee" },
          { name: "Laptop" },
          { name: "Computer" },
          { name: "Clothes" },
          { name: "Jacket" },
          { name: "Car Washer" },
          { name: "Car Washer" },
          { name: "Expresso Coffee" },
          { name: "Laptop" },
          { name: "Computer" },
          { name: "Clothes" },
          { name: "Jacket" },
          { name: "Car Washer" },
          { name: "Expresso Coffee" },
          { name: "Laptop" },
          { name: "Computer" },
          { name: "Clothes" },
          { name: "Jacket" },
          { name: "Car Washer" },
          { name: "Car Washer" },
          { name: "Expresso Coffee" },
          { name: "Laptop" },
          { name: "Computer" },
          { name: "Clothes" },
          { name: "Jacket" },
          { name: "Car Washer" },
          { name: "Expresso Coffee" },
          { name: "Laptop" },
          { name: "Computer" },
          { name: "Clothes" },
          { name: "Jacket" },
          { name: "Car Washer" },
        ],
      },
      { name: "Laptop", childs: [] },
      { name: "Computer", childs: [] },
      { name: "Clothes", childs: [] },
      { name: "Jacket", childs: [] },
      { name: "Car Washer", childs: [] },
    ],
    childs: [],
    background: "",
  });
  return (
    <div className="categories-menu d-flex">
      <Card>
        <h3 className={"secondary"}>{t("main_category")}</h3>
        <ul className={"menu"}>
          {state.cats.map((one, index) => (
            <li key={`cat-${index}`}>
              <Link
                onMouseEnter={() =>
                  setState((s) => ({
                    ...s,
                    childs: one.childs,
                    background: one.background,
                  }))
                }
                onMouseLeave={() =>
                  setState((s) => ({ ...s, childs: [], background: "" }))
                }
                // onClick={() => {
                //   console.log({ one });
                //   setState((s) => ({
                //     ...s,
                //     childs: one.childs,
                //     background: one.background,
                //   }));
                // }}
                href={""}
              >
                {one.name}
              </Link>
            </li>
          ))}
        </ul>
      </Card>
      <div className="sub-menu">
        {!!state.childs.length && (
          <Card className={"sub-card"}>
            {!!state.background && (
              <img src={state.background} className={"cat-back"} />
            )}
            <ul className={"menu childs-menu"}>
              {state.childs.map((one, index) => (
                <li key={`cat-${index}`}>
                  <Link href={""}>{one.name}</Link>
                </li>
              ))}
            </ul>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CategoriesMenu;
