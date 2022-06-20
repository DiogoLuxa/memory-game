import React from 'react';

// styles
import { FooterStyled } from '../../styles/Footer/Footer.styled';

const Footer = () => {
  return (
    <FooterStyled>
      <p>
        Desenvolvido por{' '}
        <a href="https://www.linkedin.com/in/diogo-tadeu/" target="_blank">
          Diogo Luxa ☠️
        </a>
      </p>
      <p>Dedicado ao meu filho Lorenzo ❤️</p>
    </FooterStyled>
  );
};

export default Footer;
