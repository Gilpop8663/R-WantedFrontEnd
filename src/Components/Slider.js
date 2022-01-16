import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  width: 50%;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 100%;
`;
const PrivewImg = styled(Img)`
  background-size: cover;
`;

const Button = styled.button``;

const WantedImg = [
  "https://static.wanted.co.kr/images/banners/1489/312a0c29.jpg",
  "https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg",
  "https://static.wanted.co.kr/images/banners/1488/baa54448.jpg",
  "https://static.wanted.co.kr/images/banners/1490/0b775035.jpg",
  "https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg",
  "https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg",
  "https://static.wanted.co.kr/images/banners/1484/b2853456.jpg",
  "https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg",
];

function Slider() {
  const [index, setIndex] = useState(0);
  const increaseClick = () => {
    setIndex((prev) => (prev === 7 ? 0 : prev + 1));
  };
  const decreaseClick = () => {
    setIndex((prev) => (prev === 0 ? 7 : prev - 1));
  };
  const PrevImg = index === 0 ? 7 : index - 1;
  const NextImg = index === 7 ? 0 : index + 1;
  return (
    <Wrapper>
      <Row key={index}>
        <PrivewImg src={WantedImg[PrevImg]}></PrivewImg>
        <Button onClick={decreaseClick}>Back</Button>
        <Img src={WantedImg[index]}></Img>
        <Button onClick={increaseClick}>Next</Button>
        <PrivewImg src={WantedImg[NextImg]}></PrivewImg>
      </Row>
    </Wrapper>
  );
}

export default Slider;
