import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;

  align-items: center;
  width: 100%;
  height: 53px;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
`;

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  font-size: 14px;
  z-index: 2;
`;
const Col = styled.div`
  display: flex;
  align-items: center;
  &:first-child {
  }
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  cursor: pointer;
  margin-right: 30px;
  display: flex;

  align-items: center;
`;

const CategoryItem = styled(Item)`
  height: 54px;

  &:hover {
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  }
`;

const Logo = styled(Item)`
  font-size: 18px;
  margin-right: 16px;
  color: rgba(0, 0, 0, 0.8);
`;

const Profile = styled(Item)`
  width: 28px;
  height: 28px;
  border-radius: 14px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Service = styled(Item)`
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 12px;
  padding: 10px;
  border-radius: 20px;
`;

const Vhr = styled.div`
  width: 0.01px;
  border: 0.01px solid rgba(0, 0, 0, 0.1);
  height: 10px;
  margin-right: 16px;
`;

const Img = styled.img`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center center;
  background-size: cover;
`;

const SubSpan = styled.span`
  font-size: 8px;
  position: relative;
  bottom: 13px;
  color: #1566f8;
  right: 5px;
`;

const MiniWrapper = styled.div`
  display: flex;
`;
//1180
function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const resizeWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeWidth);
    return () => {
      window.removeEventListener("resize", resizeWidth);
    };
  }, []);
  return (
    <Wrapper
      style={{
        height: windowWidth < 1100 ? "110px" : "53px",
        justifyContent: windowWidth > 1100 ? "center" : "flex-start",
        paddingLeft: windowWidth < 770 ? "22px" : "44px",
      }}
    >
      <Container
        style={{
          flexDirection: windowWidth < 1100 ? "column" : "row",
          alignItems: windowWidth < 1100 ? "flex-start" : "center",
          justifyContent: windowWidth > 1100 ? "center" : "space-between",
          paddingTop: windowWidth < 1100 ? "22px" : "0",
        }}
      >
        <Col style={{ marginBottom: windowWidth < 1100 ? "10px" : "0" }}>
          <Items>
            <Logo>
              <i class="fas fa-bars"></i>
            </Logo>
            <Item>
              <Img src="https://user-images.githubusercontent.com/80146176/149613970-189b38f8-d157-45dd-bfc8-606c82dc0f65.png"></Img>
            </Item>
          </Items>
        </Col>
        <MiniWrapper
          style={{
            width:
              windowWidth > 1100 ? "100%" : windowWidth > 770 ? "92vw" : "91vw",
            justifyContent: windowWidth > 1100 ? "center" : "space-between",
          }}
        >
          <Col>
            {windowWidth > 770 ? (
              <Items>
                <CategoryItem windowWidth={windowWidth}>채용</CategoryItem>
                <CategoryItem windowWidth={windowWidth}>이벤트</CategoryItem>
                <CategoryItem windowWidth={windowWidth}>
                  직군별 연봉
                </CategoryItem>
                <CategoryItem windowWidth={windowWidth}>이력서</CategoryItem>
                <CategoryItem windowWidth={windowWidth}>
                  커뮤니티<SubSpan>New</SubSpan>
                </CategoryItem>
                <CategoryItem>프리랜서</CategoryItem>
                <CategoryItem>
                  AI 합격예측<SubSpan>Beta</SubSpan>
                </CategoryItem>
              </Items>
            ) : (
              <Items style={{ position: "relative", right: "10px" }}>
                <CategoryItem
                  style={{
                    padding: "0 10px",
                    justifySelf: "flex-start",
                    borderBottom: windowWidth > 770 ? "" : "2px solid #0C68FB",
                  }}
                  hover={{ borderBottom: "none" }}
                >
                  홈
                </CategoryItem>
                <CategoryItem style={{ borderBottom: "none" }}>
                  채용
                </CategoryItem>
                <CategoryItem style={{ borderBottom: "none" }}>
                  이벤트
                </CategoryItem>
              </Items>
            )}
          </Col>
          <Col>
            <Items>
              <Logo>
                <i class="fas fa-search"></i>
              </Logo>
              <Logo>
                <i class="far fa-bell"></i>
              </Logo>
              {windowWidth > 1100 ? (
                <>
                  <Profile>
                    <Img
                      src="https://s3.ap-northeast-2.amazonaws.com/wanted-public/profile_default.png"
                      style={{ width: 28, height: 28, borderRadius: 14 }}
                    />
                  </Profile>
                  <Vhr></Vhr>
                  <Service>기업 서비스</Service>
                </>
              ) : (
                <i class="fas fa-ellipsis-h"></i>
              )}
            </Items>
          </Col>
        </MiniWrapper>
      </Container>
    </Wrapper>
  );
}

export default Header;
