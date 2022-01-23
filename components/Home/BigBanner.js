/** @format */

import React from "react";
import Container from "../Container";
import Image from "next/image";

const BigBanner = ({}) => {
  return (
    <div
      className="big-banner"
      style={{ width: "100%", height: 350, position: "relative" }}
    >
      <Container>
        <Image
          layout="fill"
          objectFit="contain"
          src="/imgs/big-banner.png"
          alt="big banner"
        />
      </Container>
    </div>
  );
};

export default BigBanner;
