import styled from "styled-components";
import girls from "../../../images/img/smiling-girls-img.png";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #222222;
  padding: 50px;
  font-family: Inter;
  @media (max-width: 800px) {
    justify-content: space-between;
  }
  @media (max-width: 600px) {
    flex-direction: column-reverse;
    padding: unset;
  }
`;

export const ImageContainer = styled.div`
  height: 550px;
  width: 50%;
  background: url(${girls}) no-repeat center top/cover;
  margin-bottom: -50px;
  @media (max-width: 600px) {
    background: url(${girls}) no-repeat center top/cover;
    // margin-bottom: -48.5px;
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  padding-left: 20px;
  h4 {
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    letter-spacing: 0.01em;
    color: #ffffff;
    margin: 0;
  }
  span {
    margin: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.4);
    box-sizing: border-box;
    border-radius: 4px;
    width: 95px;
    height: 30px;
    // typography
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.02em;
    color: #ffffff;
  }
  p {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 150%;
    /* or 27px */
    letter-spacing: 0.02em;
    color: #ffffff;
    width: 417px;
    @media (max-width: 800px) {
      width: 300px;
    }
  }
  aside {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #ffffff;
  }
  @media (max-width: 600px) {
    padding: 30px;
  }
`;
