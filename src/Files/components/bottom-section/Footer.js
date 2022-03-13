import React from "react";
import {
  FooterContainer,
  InnerFooter,
  FooterFLex,
  LastFooterFLex,
} from "./BottomStyles";
import { FacbookIcon, TwiterIcon, InstaIcon, LinkedInIcon } from "./Icon";

const Footer = () => {
  return (
    <FooterContainer>
      <InnerFooter>
        <FooterFLex>
          <div>
            <h3>Company</h3>
            <button href="#">About us</button>
            <button href="#">Term of Use</button>
            <button href="#">Privacy Policy</button>
            <button href="#">Press & Media</button>
          </div>

          <div>
            <h3>Products</h3>
            <button href="#">Marketplace</button>
            <button href="#">Magazine</button>
            <button href="#">Seller</button>
            <button href="#">Wholesale</button>
            <button href="#">Services</button>
          </div>
        </FooterFLex>
        <FooterFLex>
          <div>
            <h3>Careers</h3>
            <button href="#">Become a Campus Rep</button>
            <button href="#">Become a Vasiti Influencer</button>
            <button href="#">Become a Campus writer</button>
            <button href="#">Become an Affiliate</button>
          </div>
          <div>
            <h3>Get in touch</h3>
            <button href="#">Contact us</button>
            <button href="#">Partner with us</button>
            <button href="#">Advertise with us</button>
            <button href="#">Help/FAQs</button>
          </div>
        </FooterFLex>
        <LastFooterFLex>
          <div>
            <h3>Join our community</h3>
            <article>
              <span>
                <FacbookIcon />
              </span>
              <span>
                <InstaIcon />
              </span>
              <span>
                <TwiterIcon />
              </span>
              <span>
                <LinkedInIcon />
              </span>
            </article>
          </div>
          <p>Email Newsletter</p>
        </LastFooterFLex>
      </InnerFooter>
    </FooterContainer>
  );
};

export default Footer;
