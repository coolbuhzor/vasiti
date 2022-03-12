import React from "react";
import { data } from "../FakeData";
import {
  Container,
  FlexDiv,
  FlexItem,
} from "../third-section/ThirdSectionStyle";
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

export default ThirdSection;
