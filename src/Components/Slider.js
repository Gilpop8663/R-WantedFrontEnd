import { useState } from "react";
import styled, { keyframes } from "styled-components";

const Animation = keyframes`
0%{
  opacity: 1;
  left:0
}100%{
  opacity:1;
  x:20%
}
`;

const Wrapper = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: center;
  width: 100vw;
  overflow-x: hidden;
  animation: ${Animation} 5s ease-in-out;
`;

const Container = styled.div`
  background-color: rgba(0, 0, 0, 1);
  border-radius: 7px;
  display: flex;
  align-items: center;
  animation: ${Animation} 5s ease-in-out;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  animation: ${Animation} 5s ease-in-out;
`;

const Img = styled.img`
  border-radius: 7px;
  margin: 0;
  animation: ${Animation} 5s ease-in-out;
`;
const PrivewImg = styled.img`
  transition: ease-in-out 5s;
  border-radius: 7px;
  opacity: 0.5;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  border: none;
  font-size: 12px;
  height: 50px;
  border-radius: 60px;
  padding: 25px 10px;
  opacity: 0.5;
  z-index: 2;
  i {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const LeftButton = styled(Button)`
  right: 50px;
`;

const RightButton = styled(Button)`
  left: 50px;
`;

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
        <Container>
          <PrivewImg id={index - 1} src={WantedImg[PrevImg]}></PrivewImg>
        </Container>
        <LeftButton onClick={decreaseClick}>
          <i class="fas fa-chevron-left"></i>
        </LeftButton>
        <Img id={index} src={WantedImg[index]}></Img>
        <RightButton onClick={increaseClick}>
          <i class="fas fa-chevron-right"></i>
        </RightButton>
        <Container>
          <PrivewImg id={index + 1} src={WantedImg[NextImg]}></PrivewImg>
        </Container>
      </Row>
    </Wrapper>
  );
}

export default Slider;
