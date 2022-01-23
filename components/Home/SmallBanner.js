/** @format */

import Image from "next/image";
import React from "react";
import Container from "../Container";

const SmallBanner = ({}) => {
  return (
    <div className="small-banner">
      <Container>
        <div className="d-flex align-center small-wrapper">
          <div
            className="one-banner"
            style={{ position: "relative", height: 250, width: "50%" }}
          >
            <Image
              src={"/imgs/small-banner.png"}
              layout="fill"
              alt="small banner"
              objectFit="fill"
            />
          </div>
          <div
            className="one-banner"
            style={{ position: "relative", height: 250, width: "50%" }}
          >
            <Image
              src={"/imgs/small-banner-1.png"}
              layout="fill"
              alt="small banner"
              objectFit="fill"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SmallBanner;
