import React from 'react';

// styles
import ContainerStyled from '../../styles/Container/Container.styled';

const Container = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
