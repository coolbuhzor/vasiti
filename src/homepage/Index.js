import React from "react";
import styled from "styled-components";
import Header from "./components/header/Header";
import FirstSection from "./components/first-section/Index";
import SecondSection from "./components/second-section/Index";
import ThirdSection from "./components/third-section/ThirdSection";
import BottomSection from "./components/bottom-section/Index";

const Index = () => {
  return (
    <Container>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <BottomSection />
    </Container>
  );
};

const Container = styled.div`
  //   display: flex;
  //   width: 100%;
  //   height: 100px;
  //   border: 1px solid blue;
`;
export default Index;
