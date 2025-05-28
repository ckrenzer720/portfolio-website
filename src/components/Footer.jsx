import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: var(--primary-color);
  color: white;
  padding: 2rem 0;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const FooterNote = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Acknowledgements = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterNote>
          "Building digital experiences with passion and precision"
        </FooterNote>

        <Copyright>© {currentYear} Your Name. All rights reserved.</Copyright>

        <Acknowledgements>
          <p>
            Built with React and Styled Components. Special thanks to{" "}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              contributors
            </a>{" "}
            and the open source community.
          </p>
        </Acknowledgements>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
