import React from "react";
import styled from "styled-components";
import { data } from "../FakeData";
import InnerSection from "./InnerSection";

const ThirdSection = () => {
  return (
    <Container>
      <FlexDiv>
        {data.map(
          (item, index) =>
            index <= 5 && (
              <FlexItem key={item.id}>
                <img src={item.img} alt="" />
                <h4>{item.name}</h4>
                <div className="stories-inner-flex">
                  <h5>{item.location}</h5>
                  <span className={item.role.toLocaleLowerCase()}>
                    {item.role}
                  </span>
                </div>
                <p>{item.story}</p>
              </FlexItem>
            )
        )}
      </FlexDiv>
      <InnerSection />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Inter;

  //   height: 200px;
`;

const FlexDiv = styled.div`
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
const FlexItem = styled.div`
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
export default ThirdSection;
