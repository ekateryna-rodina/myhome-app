import { ImagesCarousel } from "components/ImagesCarousel";
import Img from "next/image";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
const image = keyframes`
from{
  transform: translateX(150%);
}
to{
  transform: translateX(0);
}
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 80%;
  margin: auto;
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
  transform: translateX(150%);
  animation: ${image} 0.5s ease-in-out forwards;
`;
const Images = (props: any) => {
  const { images } = props;
  const [current, setCurrent] = useState<number>(0);
  return (
    <ImageContainer>
      <ImagesCarousel
        current={current}
        setCurrent={setCurrent}
        total={images.length}
      >
        <Img
          src={images[current]}
          layout="fill"
          objectFit="cover"
          priority={true}
        ></Img>
      </ImagesCarousel>
    </ImageContainer>
  );
};

export default Images;
