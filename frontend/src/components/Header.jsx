import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { ReactComponent as LogoIcon } from "../assets/logo.svg"; // Adjust path as needed

const HeaderWrapper = styled.header`
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
`;

const LogoImg = styled.img`
  height: 40px;
  margin-right: 0.5rem;
  object-fit: contain;
`;

const BrandName = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  color: #222;
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  flex-direction: column;
  cursor: pointer;

  span {
    width: 25px;
    height: 3px;
    background: #222;
    margin: 4px 0;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  &:focus {
    outline: 2px solid #000;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`;

const NavItem = styled.li``;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  position: relative;
  transition: color 0.2s ease;

  &:hover,
  &:focus {
    color: #007bff;
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid #007bff;
  }
`;

const Header = ({ logoPng, companyName = "Laundry Services", navLinks = [] }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggles hamburger menu open/closed
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <HeaderWrapper>
      <Nav aria-label="Main Navigation">
        <LogoContainer>
          {logoPng && <LogoImg src={logoPng} alt={`${companyName} logo`} />}
          {/* <LogoIcon title={`${companyName} SVG logo`} style={{ height: "40px", marginRight: "0.5rem" }} /> */}
          <BrandName>{companyName}</BrandName>
        </LogoContainer>

        <Hamburger
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </Hamburger>

        <NavLinks isOpen={menuOpen}>
          {navLinks.map(({ label, to, external }, index) => (
            <NavItem key={index}>
              {external ? (
                <NavLink href={to} target="_blank" rel="noopener noreferrer">
                  {label}
                </NavLink>
              ) : (
                <NavLink as={Link} to={to}>
                  {label}
                </NavLink>
              )}
            </NavItem>
          ))}
        </NavLinks>
      </Nav>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  logoPng: PropTypes.string,
  companyName: PropTypes.string,
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      external: PropTypes.bool,
    })
  ),
};

export default Header;