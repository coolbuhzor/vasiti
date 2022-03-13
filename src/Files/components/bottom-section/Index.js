import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import InnerSection from "./InnerSection";

const Index = () => {
  return (
    <Container>
      <InnerSection />
      <Footer />
    </Container>
  );
};
const Container = styled.div`
  // width: 1440px;
  height: 370px;
  background: #25201d;
`;
export default Index;
