import React from "react";
import styled from "styled-components";
import { LineIcon } from "../second-section/Icon";
import woman from "../../../images/img/woman-shoppingbag-card.png";

const InnerSection = () => {
  return (
    <InnerContainer>
      <InnerText>
        <h3>Josiah’s Experience</h3>
        <span>VENDOR</span>
        <p>
          I had the best experience shopping with vasiti. Usability of the
          website was great, very good customer service, an all round great
          experience. I would definately be coming back! I had the best
          experience shopping with vasiti. Usability of the website was great,
          very good customer service, an all round great experience. I would
          definately be coming back!
        </p>
        <button>
          Share your own story! <br /> <LineIcon />
        </button>
      </InnerText>
      <InnerImage>
        <img src={woman} alt="" />
      </InnerImage>
    </InnerContainer>
  );
};
const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff8f5;
  font-family: Inter;
`;

const InnerText = styled.div`
  padding: 50px;
  width: 50%;
  justify-content: center;
  align-items: center;
  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: 0.01em;
    color: #242120;
    margin: 10px 0;
  }

  span {
    width: 75px;
    height: 30px;
    border: 1px solid rgba(255, 92, 0, 0.4);
    box-sizing: border-box;
    border-radius: 4px;
    // typo
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    letter-spacing: 0.02em;
    color: #ff5c00;
    margin: 10px 0;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    letter-spacing: 0.02em;
    color: #242120;
    max-width: 454px;
    line-height: 27px;
  }

  button {
    background: transparent;
    border: none;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #ff5c00;
  }
`;

const InnerImage = styled.div`
  width: 50%;
  height: 70%;
`;
export default InnerSection;
