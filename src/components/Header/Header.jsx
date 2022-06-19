import React from 'react';

// style
import { HeaderStyled } from '../../styles/Header/Header.styled';

const Header = ({ children }) => {
  return (
    <HeaderStyled>
      <h1>Straw Hat Pirates</h1>
      <h3>- Memory Game -</h3>
      {children}
    </HeaderStyled>
  );
};

export default Header;
