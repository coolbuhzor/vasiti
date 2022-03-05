import React from "react";
import styled from "styled-components";
import heroImg from "../../../images/img/first-section-img.png";

const Index = () => {
  return (
    <Container>
      <InnerDiv>
        <div>
          <h2>
            Amazing <br /> Experiences from Our Wonderful Customers
          </h2>
          <p>
            Here is what customers and vendors are saying about us, you can
            share your stories with us too.
          </p>
        </div>
        <img src={heroImg} alt="" />
      </InnerDiv>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: Inter;
  margin-top: 30px;
`;

const InnerDiv = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    letter-spacing: -0.02em;
    color: #000000;
    margin: 0;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    letter-spacing: 0.02em;
    color: #494949;
    line-height: 31px;
  }
  @media (max-width: 1050px) {
    h2 {
      font-size: 40px;
    }
    img {
      width: 60%;
    }
  }
  @media (max-width: 650px) {
    flex-direction: column;
    width: 100%;
    div {
      padding: 20px;
    }
    h2 {
      font-size: 32px;
    }
    img {
      width: 100%;
    }
  }
`;
export default Index;
