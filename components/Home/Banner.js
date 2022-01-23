/** @format */

import Image from "next/image";
import React from "react";
import Container from "../Container";
import ProductCard from "../ProductCard";

const HomeBanner = ({ product }) => {
  return (
    <section className={"home-banner"}>
      <Container>
        <div className="d-flex flex-row main-row">
          <div
            className="main-banner"
            style={{
              width: "100%",
              height: 400,
              position: "relative",
              margin: "1rem",
            }}
          >
            <Image
              layout="fill"
              objectFit="fill"
              // src="/imgs/banner-1.png"
              src="https://picsum.photos/800"
              alt={"main banner"}
            />
          </div>
          <div
            className="main-banner"
            style={{
              width: 350,
              height: 400,
              position: "relative",
            }}
          >
            <ProductCard product={product} />
          </div>
        </div>
        <div className="d-flex flex-row second-row">
          <div className="banner-sm">
            <Image
              width={250}
              height={150}
              src="/imgs/banner-1.png"
              alt={"main banner"}
            />
          </div>
          <div className="banner-sm">
            <Image
              width={250}
              height={150}
              src="/imgs/banner-2.png"
              alt={"main banner"}
            />
          </div>
          <div className="banner-sm">
            <Image
              width={250}
              height={150}
              src="/imgs/banner-3.png"
              alt={"main banner"}
            />
          </div>
          <div className="banner-sm">
            <Image
              width={250}
              height={150}
              src="/imgs/banner-4.png"
              alt={"main banner"}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeBanner;
