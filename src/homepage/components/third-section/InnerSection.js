import React from "react";
import { LineIcon } from "../second-section/Icon";
import woman from "../../../images/img/woman-shoppingbag-card.png";
import { InnerContainer, InnerText, InnerImage } from "./ThirdSectionStyle";

const InnerSection = () => {
  return (
    <InnerContainer>
      <InnerText>
        <h3>Josiah’s Experience</h3>
        <span>VENDOR</span>
        <p>
          I had the best experience shopping with vasiti. Usability of the
          website was great, very good customer service, an all round great
          experience. I would definately be coming back! I had the best
          experience shopping with vasiti. Usability of the website was great,
          very good customer service, an all round great experience. I would
          definately be coming back!
        </p>
        <button>
          Share your own story! <br /> <LineIcon />
        </button>
      </InnerText>
      <InnerImage>
        <img src={woman} alt="" />
      </InnerImage>
    </InnerContainer>
  );
};

export default InnerSection;
