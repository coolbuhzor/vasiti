import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  background: white;
  // margin-bottom: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 130px;
  z-index: 1;

  @media (max-width: 650px) {
    display: none;
  }
`;
export const MobileLogo = styled.div`
  padding-left: 40px;
  padding-top: 50px;
  @media (min-width: 651px) {
    display: none;
  }
`;
export const TopHeader = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  cursor: pointer;
  @media (max-width: 720px) {
    width: 90%;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Roboto;
  .styled-button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    width: 84.16px;
    border-radius: 4px;
    background: #ff5c00;
    box-shadow: 1px 4px 8px rgba(239, 88, 3, 0.2);
    // Typography
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    color: #ffffff;
  }
  button {
    background: none;
    border: none;
    // typography
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.05em;
    color: #242120;
    margin: 0 5px;
    cursor: pointer;
  }
`;

export const BottomHeader = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.04);
  justify-content: center;
  div {
    display: flex;
    justify-content: space-around;
    background: #ffffff;
    box-sizing: border-box;
    width: 65%;

    p {
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 15px;
      letter-spacing: 0.05em;
      color: #000000;
      cursor: pointer;
    }

    @media (max-width: 950px) {
      width: 80%;
    }
    @media (max-width: 720px) {
      width: 100%;
    }
  }
`;
