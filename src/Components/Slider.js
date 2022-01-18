import { useState, useRef, useEffect } from "react";
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
  overflow-x: hidden;

  align-items: center;
`;

const Container = styled.div`
  background-color: rgba(0, 0, 0, 1);
  border-radius: 7px;
  display: flex;
  align-items: center;
  margin: 0 12.5px;
  cursor: pointer;
`;

const Row = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
`;

const Img = styled.img`
  border-radius: 7px;
  margin: 0;
  animation: ${Animation} 5s ease-in-out;
  margin: 0 12.5px;
  position: relative;
  cursor: pointer;
  transition: all 1s linear;
`;
const PrivewImg = styled.img`
  transition: all 1s linear;
  border-radius: 7px;
`;

const Button = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  position: absolute;
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
  left: 18.5%;
`;

const RightButton = styled(Button)`
  right: 18.5%;
`;

const ImgWrapper = styled.div`
  position: relative;
`;
const ImgDes = styled.div`
  position: absolute;
  z-index: 5;
  width: 330px;
  height: 150px;
  border-radius: 5px;
  background-color: white;
  left: 30px;
  bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 27px 0px 20px 0px;
`;

const Title = styled.span`
  padding-left: 20px;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 14px;
`;
const Des = styled.span`
  padding-left: 20px;
  padding-bottom: 24px;
  font-size: 14px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const LinkSpan = styled.span`
  padding-left: 20px;
  padding-top: 16px;
  color: #3366ff;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  i {
    margin-left: 5px;
  }
`;

const WantedImg = [
  "https://static.wanted.co.kr/images/banners/1489/312a0c29.jpg",
  "https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg",
  "https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg",
  "https://static.wanted.co.kr/images/banners/1490/0b775035.jpg",
  "https://static.wanted.co.kr/images/banners/1484/b2853456.jpg",
  "https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg",
  "https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg",
  "https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg",
  "https://static.wanted.co.kr/images/banners/1488/baa54448.jpg",
];

const wantedTitle = [
  "22년 달라지는 노동법령",
  "성과를 내는 마케팅",
  "해, 커리어 EP 02 공개",
  "마케팅 주니어를 찾습니다",
  "성장하는 개발자가 되려면?",
  "개발자 성장 비결 공개!",
  "개발자 되고 싶은 분들!?",
  "포트폴리오를 부탁해!",
  "UX 디자이너의 커리어 설계",
];

const wantedDes = [
  "노무관리 쟁점 한 눈에 파악하기",
  "실제 사례를 공개합니다!",
  "마지막 관문 2라운드의 승자는?",
  "기업 과제 풀고 취업까지 한번에!",
  "OOO 검색하지 말 것!",
  "Velog, 글 쓰는 개발자들의 이야기",
  "프론트엔드 무료 교육과정 참여하기",
  "디자이너의 포폴 살펴보기",
  "브랜드 가치를 더하는 디자인",
];

const delay = 2500;

function Slider() {
  const [index, setIndex] = useState(0);
  const [isSlide, setIsSlide] = useState(false);
  const [auto, setAuto] = useState(0);
  const [isClick, setIsClick] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [x, setX] = useState(0);
  const slideRef = useRef(null);
  const increaseClick = async () => {
    if (isSlide) {
      return;
    }
    clearTimeout(autoPage);
    setX(-56);
    setIsSlide(true);
    await setTimeout(() => {
      setIndex((prev) => (prev === 8 ? 0 : prev + 1));
      setX(0);
      setIsSlide(false);
    }, 500);
    //setIndex((prev) => (prev === 7 ? 0 : prev + 1));
  };
  const decreaseClick = async () => {
    if (isSlide) {
      return;
    }
    clearTimeout(autoPage);
    setX(+56);
    setIsSlide(true);
    await setTimeout(() => {
      setIndex((prev) => (prev === 0 ? 8 : prev - 1));
      setX(0);
      setIsSlide(false);
    }, 500);
  };
  const morePrevImg = index === 1 ? 8 : index === 0 ? 7 : index - 2;
  const PrevImg = index === 0 ? 8 : index - 1;
  const NextImg = index === 8 ? 0 : index + 1;
  const moreNextImg = index === 8 ? 1 : index === 7 ? 0 : index + 2;
  //console.log(slideRef.current);
  //console.log(index);

  const autoPage = () => {
    setTimeout(() => {
      setX(-56);
      setAuto((prev) => prev + 1);
      setIsSlide(true);
      setTimeout(() => {
        setIndex((prev) => (prev === 8 ? 0 : prev + 1));
        setX(0);
        setIsSlide(false);
      }, 500);
    }, 5000);
  };
  const timer = () => {
    if (isSlide) {
      return;
    }
    autoPage();
  };
  const onDragStart = () => {
    setIsClick(true);
  };
  const onDragEnd = () => {
    setIsClick(false);
  };
  const onMouseMove = (event) => {
    if (!isClick) {
      return;
    }
    //console.log(event.pageX);
    setMouseX(event.pageX);
    //console.log(window.onmousemove);
  };
  console.log(isClick);
  console.log(slideRef);
  useEffect(() => {
    timer();
  }, [auto]);
  return (
    <Wrapper>
      <Row
        key={index}
        ref={slideRef}
        style={{
          transform: `translateX(${x}vw)`,
        }}
      >
        <Container>
          <PrivewImg
            style={{ opacity: 0.5 }}
            src={WantedImg[morePrevImg]}
          ></PrivewImg>
        </Container>
        <Container>
          <PrivewImg
            style={{ opacity: 0.5 }}
            src={WantedImg[PrevImg]}
          ></PrivewImg>
        </Container>
        <ImgWrapper>
          <Img
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onDrag={onMouseMove}
            style={{ opacity: 1 }}
            src={WantedImg[index]}
          />
          {!isSlide ? (
            <ImgDes>
              <Title>{wantedTitle[index]}</Title>
              <Des>{wantedDes[index]}</Des>
              <LinkSpan>
                바로가기<i class="fas fa-chevron-right"></i>
              </LinkSpan>
            </ImgDes>
          ) : null}
        </ImgWrapper>
        <Container>
          <PrivewImg
            style={{ opacity: 0.5 }}
            src={WantedImg[NextImg]}
          ></PrivewImg>
        </Container>
        <Container>
          <PrivewImg
            style={{ opacity: 0.5 }}
            src={WantedImg[moreNextImg]}
          ></PrivewImg>
        </Container>
      </Row>
      <LeftButton onDragStart={decreaseClick}>
        <i class="fas fa-chevron-left"></i>
      </LeftButton>
      <RightButton onClick={increaseClick}>
        <i class="fas fa-chevron-right"></i>
      </RightButton>
    </Wrapper>
  );
}

export default Slider;
