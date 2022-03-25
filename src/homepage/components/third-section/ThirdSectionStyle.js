import styled from "styled-components";
export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff8f5;
  font-family: Inter;
  padding: 100px;
  @media (max-width: 1252px) {
    padding: 50px 20px;

    // flex-direction: column;
    // padding: 10px;
  }
  @media (max-width: 650px) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const InnerText = styled.div`
  width: 50%;
  justify-content: center;
  align-items: center;

  @media (max-width: 650px) {
    width: 80%;
  }
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

export const InnerImage = styled.div`
  width: 50%;
  height: 70%;
  @media (max-width: 1250px) {
    width: 70%;
    img {
      width: 100%;
    }
  }
  @media (max-width: 650px) {
    width: 100%;
    img {
      width: 90%;
    }
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Inter;

  //   height: 200px;
`;

export const FlexDiv = styled.div`
  display: flex;
  padding: 100px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 850px) {
    padding: 50px;
  }
  @media (max-width: 700px) {
    padding: 50px;
    flex-direction: column;
  }
`;
export const FlexItem = styled.div`
  width: 30%;
  margin: 20px 0;
  @media (max-width: 700px) {
    width: 90%;
  }

  img {
    height: 200px;
    width: 200px;
  }
  .stories-inner-flex {
    display: flex;
    width: 100%;
    height: 35px;
    align-items: center;
    margin: 10px 0;
  }

  .vendor {
    background: #eef8ff;
    color: #0d019a;
  }
  .customer {
    background: #f0ffee;
    color: #049a01;
  }
  h4,
  h5,
  h6,
  p {
    margin: 10px 0;
  }

  h4 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    letter-spacing: 0.02em;
    color: #474747;
  }
  h5 {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    letter-spacing: 0.05em;
    color: #535353;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    /* or 24px */
    letter-spacing: 0.02em;
    color: #474747;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95px;
    height: 30px;
    border-radius: 4px;
    margin-left: 10px;

    // typography
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    letter-spacing: 0.02em;
  }
`;
