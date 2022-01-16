import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 53px;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
`;

const Container = styled.div`
  padding: 10px;
  display: flex;
  width: 1060px;
  position: fixed;
  justify-content: space-between;
  margin: 0 auto;
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

function Header() {
  return (
    <Wrapper>
      <Container>
        <Col>
          <Items>
            <Logo>
              <i class="fas fa-bars"></i>
            </Logo>
            <Item>
              <Img src="https://user-images.githubusercontent.com/80146176/149613970-189b38f8-d157-45dd-bfc8-606c82dc0f65.png"></Img>
            </Item>
          </Items>
        </Col>
        <Col>
          <Items>
            <Item>채용</Item>
            <Item>이벤트</Item>
            <Item>직군별 연봉</Item>
            <Item>이력서</Item>
            <Item>커뮤니티</Item>
            <Item>프리랜서</Item>
            <Item>AI 합격예측</Item>
          </Items>
        </Col>
        <Col>
          <Items>
            <Logo>
              <i class="fas fa-search"></i>
            </Logo>
            <Logo>
              <i class="far fa-bell"></i>
            </Logo>
            <Profile>
              <Img
                src="https://s3.ap-northeast-2.amazonaws.com/wanted-public/profile_default.png"
                style={{ width: 28, height: 28, borderRadius: 14 }}
              />
            </Profile>
            <Vhr></Vhr>
            <Service>기업 서비스</Service>
          </Items>
        </Col>
      </Container>
    </Wrapper>
  );
}

export default Header;
