import React from "react";
import styled from "styled-components";
import Container from "./container";
import SocialLinks from "./social-links";

const StyledFooter = styled.footer`
  padding-top: var(--size-300);
  padding-bottom: var(--size-300);
`;

const FooterAttribution = styled.p`
  font-size: var(--size-300);

  & a {
    color: inherit;
  }
`;

const FooterWrapper = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background: #e9e9e9;
  color: #252526;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterWrapper>
        <SocialLinks />

        <FooterAttribution>
          © 2023 Copyright: Proyectos Beta
        </FooterAttribution>
      </FooterWrapper>
    </StyledFooter>
  );
};

export default Footer;
