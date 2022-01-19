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
  font-weight: 600;
  &:hover {
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  }
`;

const Logo = styled(Item)`
  font-size: 18px;
  margin-right: 16px;
  position: relative;
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
  position: absolute;
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
                <svg
                  xmlns="https://www.w3.org/2000/svg"
                  xmlnsXlink="https://www.w3.org/1999/xlink"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <defs>
                    <path
                      id="qt2dnsql4a"
                      d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"
                    ></path>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <use
                      fill="#333"
                      fill-rule="nonzero"
                      stroke="#333"
                      stroke-width=".3"
                      xlinkHref="#qt2dnsql4a"
                    ></use>
                  </g>
                </svg>
              </Logo>
              <Logo style={{ left: "5px" }}>
                <svg
                  xmlns="https://www.w3.org/2000/svg"
                  xmlnsXlink="https://www.w3.org/1999/xlink"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <defs>
                    <path
                      id="bpnpn3yn0a"
                      d="M7.554 14.813h3.183a1.689 1.689 0 01-3.183 0zm1.592 2.25a2.813 2.813 0 002.812-2.813.563.563 0 00-.562-.563h-7.5c-.31 0-.541-.014-.699-.04.018-.036.04-.077.066-.123.036-.065.354-.605.46-.8.477-.875.735-1.676.735-2.599V6.75c0-2.656 2.057-4.688 4.688-4.688 2.63 0 4.687 2.032 4.687 4.688v3.375c0 .923.258 1.724.736 2.6.106.194.424.734.46.799.026.046.047.087.065.123-.157.026-.389.04-.698.04a.564.564 0 000 1.126c1.263 0 1.896-.221 1.896-1.002 0-.26-.092-.494-.28-.833-.045-.083-.361-.619-.456-.792-.395-.724-.598-1.355-.598-2.061V6.75c0-3.28-2.563-5.813-5.812-5.813S3.333 3.47 3.333 6.75v3.375c0 .706-.203 1.337-.598 2.06-.094.174-.41.71-.456.793-.188.339-.279.572-.279.833 0 .78.632 1.002 1.896 1.002H6.39a2.813 2.813 0 002.756 2.25z"
                    ></path>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <g transform="translate(-1079 -16) translate(224 7) translate(855 9)">
                      <mask id="1dencd96ob" fill="#fff">
                        <use xlinkHref="#bpnpn3yn0a"></use>
                      </mask>
                      <use
                        fill-rule="nonzero"
                        stroke="currentColor"
                        stroke-width=".3"
                        xlinkHref="#bpnpn3yn0a"
                      ></use>
                      <g fill="currentColor" mask="url(#1dencd96ob)">
                        <path d="M0 0H18V18H0z"></path>
                      </g>
                    </g>
                  </g>
                </svg>

                <SubSpan
                  style={{
                    padding: "3px 4px",
                    borderRadius: "10px",
                    backgroundColor: "#1765F7",
                    fontWeight: "600",
                    color: "white",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  N
                </SubSpan>
              </Logo>
              {windowWidth > 1100 ? (
                <>
                  <Profile>
                    <Img
                      src="https://s3.ap-northeast-2.amazonaws.com/wanted-public/profile_default.png"
                      style={{ width: 28, height: 28, borderRadius: 14 }}
                    ></Img>
                    <SubSpan
                      style={{
                        padding: "3px 4px",
                        borderRadius: "10px",
                        backgroundColor: "#1765F7",
                        fontWeight: "600",
                        color: "white",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        left: "14px",
                      }}
                    >
                      N
                    </SubSpan>
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
