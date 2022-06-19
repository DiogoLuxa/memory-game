import React from 'react';

// styles
import { FooterStyled } from '../../styles/Footer/Footer.styled';

const Footer = () => {
  return (
    <FooterStyled>
      <p>
        Copyright © 2022{' '}
        <a href="https://www.linkedin.com/in/diogo-tadeu/" target="_blank">
          Diogo Luxa
        </a>
        . Todos os direitos reservados.
      </p>
      <p>Dedicado ao meu filho Lorenzo ❤️</p>
    </FooterStyled>
  );
};

export default Footer;
