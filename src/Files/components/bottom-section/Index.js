import React from "react";
import styled from "styled-components";
import InnerSection from "./InnerSection";

const Index = () => {
  return (
    <Container>
      <InnerSection />
    </Container>
  );
};
const Container = styled.div`
  // width: 1440px;
  height: 370px;
  background: #25201d;
`;
export default Index;
