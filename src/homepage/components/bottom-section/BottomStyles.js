import styled from "styled-components";
export const Container = styled.div`
  height: 370px;
  width: 100%;
  background: #25201d;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 651px) {
    height: unset;
  } ;
`;

export const InnerContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1250px) {
    width: 95%;
  }

  @media (max-width: 651px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    // width: 80%;
  } ;
`;

export const ImageContainer = styled.div`
  display: flex;
  img {
    position: absolute;
    bottom: 0;
  }

  @media (max-width: 851px) {
    img {
      width: 45%;
    }
  }
  @media (max-width: 651px) {
    margin: 50px 0;
    width: 100%;
    justify-content: center;
    align-items: center;
    img {
      position: unset;
      width: 80%;
      margin-right: -30px;
    }
  }
`;
export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 20px 0;

  h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 40px;
    letter-spacing: -0.03em;
    color: #ffffff;
    margin: 10px;
  }
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.02em;
    color: #ffffff;
    width: 360px;
    margin-top: 10px;
  }

  @media (max-width: 651px) {
    box-sizing: border-box;
    width: 100%;
    padding: 0 25px;
    h3 {
      font-size: 30px;
    }
    p {
      width: unset;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  position: relative;
  width: 360px;
  height: 51px;
  @media (max-width: 651px) {
    width: 97%;
  }
  // background: rgba(255, 255, 255, 0.2);

  input {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    outline: none;
    padding-left: 20px;
    border-radius: 6px;
    border: none;
    ::placeholder {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      display: flex;
      align-items: center;
      color: #ffffff;
    }
  }
  button {
    position: absolute;
    right: 5px;
    top: 6px;
    width: 119px;
    height: 42px;
    background: #ffffff;
    box-shadow: 1px 4px 8px rgba(239, 88, 3, 0.2);
    border-radius: 4px;
    border: none;
  }
`;

export const FooterContainer = styled.div`
  padding: 100px 0;
  display: flex;
  justify-content: center;
  background: #25201d;
`;
export const InnerFooter = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;

  h3 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
  }

  span {
    padding: 5px;
    width: 24px;
    height: 24px;
    border-radius: 100%;
    background: #fff;
    margin: 0 5px;
  }
  @media (max-width: 900px) {
    // flex-direction: column;
    width: 100%;
    padding: 20px;
  }
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const LastFooterFLex = styled.div`
  flex-direction: column;
  width: 40%;
  display: flex;
  article {
    margin: 30px 0;
  }
`;
export const FooterFLex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: left;
  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    :nth-of-type(2) {
      //   flex-grow: 2;
      justify-self: left;
    }
  }
  button {
    background: transparent;
    border: none;
    text-align: left;
    // typography
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
    margin: 5px 0;
  }
`;
