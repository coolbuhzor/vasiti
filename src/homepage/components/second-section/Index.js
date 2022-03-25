import React from "react";
import { LineIcon } from "./Icon";
import { Container, ImageContainer, TextContainer } from "./SecondSectionStle";

const Index = () => {
  return (
    <Container>
      <ImageContainer>{/* <img src={girls} alt="" /> */}</ImageContainer>
      <TextContainer>
        <h4>Tolu & Joy’s Experience</h4>
        <span>CUSTOMER</span>
        <p>
          I had the best experience shopping with vasiti. Usability of the
          website was great, very good customer service, an all round great
          experience. I would definately be coming back! I had the best
          experience shopping with vasiti. Usability of the website was great,
          very good customer service, an all round great experience. I would
          definately be coming back!
        </p>
        <aside>Share your own story!</aside>
        <LineIcon />
      </TextContainer>
    </Container>
  );
};

export default Index;
