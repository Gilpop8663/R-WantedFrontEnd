import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
`;

const Container = styled.div`
  display: flex;
  width: 60%;
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
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li``;

const Img = styled.img`
  cursor: pointer;
`;

function Header() {
  return (
    <Wrapper>
      <Container>
        <Col>
          <Items>
            <Item>
              <i class="fas fa-bars"></i>
            </Item>
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
            <Item>돋보기</Item>
            <Item>종</Item>
            <Item>프로필</Item>
            <Item>기업 서비스</Item>
          </Items>
        </Col>
      </Container>
    </Wrapper>
  );
}

export default Header;
