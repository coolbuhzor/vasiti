import React from "react";
import phone from "../../../images/img/mobile-phone.png";
import {
  InputContainer,
  Container,
  InnerContainer,
  ImageContainer,
  TextDiv,
} from "./BottomStyles";

const Index = () => {
  return (
    <Container>
      <InnerContainer>
        <ImageContainer>
          <img src={phone} alt="mobile-phone" />
        </ImageContainer>
        <TextDiv>
          <h3>
            Be a member <br /> of our community 🎉
          </h3>
          <p>
            We’d make sure you’re always first to know what’s happening on
            Vasiti—thus, the world.
          </p>

          <InputContainer>
            <input type="text" placeholder="enter your email address" />
            <button>SUBSCRIBE</button>
          </InputContainer>
        </TextDiv>
      </InnerContainer>
    </Container>
  );
};

export default Index;
