import React from "react";
import logo from "../../../images/logos/Vasiti-Logo-black.png";
import { Link } from "react-router-dom";
import {
  Container,
  TopHeader,
  NavMenu,
  BottomHeader,
  MobileLogo,
} from "./HeaderStyle";

const Header = () => {
  return (
    <>
      <MobileLogo>
        <img src={logo} alt="" />
      </MobileLogo>
      <Container>
        <TopHeader>
          <div>
            <img src={logo} alt="" />
          </div>

          <NavMenu>
            <button href="#">ABOUT US</button>
            <button href="#">STORIES</button>
            <button href="#">CONTACT</button>
            <button>
              <Link to="/log-in">LOG IN</Link>
            </button>
            <button className="styled-button">
              <Link to="/sign-up">SIGN UP </Link>

              {/* SIGN UP */}
            </button>
          </NavMenu>
          {/* <Outlet /> */}
        </TopHeader>
        <BottomHeader>
          <div>
            <p>MARKETPLACE</p>
            <p>WHOLESALE CENTER</p>
            <p>SELLER CENTER</p>
            <p>SERVICES</p>
            <p>INTERNSHIPS</p>
            <p>EVENTS</p>
          </div>
        </BottomHeader>
      </Container>
    </>
  );
};

export default Header;
