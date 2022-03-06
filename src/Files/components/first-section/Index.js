import React from "react";
import heroImg from "../../../images/img/first-section-img.png";
import { Container, InnerDiv } from "./FIrstSectionStyle";

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

export default Index;
