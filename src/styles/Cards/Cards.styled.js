import styled from 'styled-components';

export const CardsStyled = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(90px, 300px));
  justify-content: center;
  gap: 1rem;

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, minmax(90px, 200px));
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: all 1s ease-in-out;
  transform-style: preserve-3d;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 1px 1px 3px 1px hsla(0, 0%, 0%, 0.3);

  &.fliped {
    transform: rotateY(-180deg);
  }
`;

export const CardImgFront = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  z-index: 1;
`;
export const CardImgBack = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  backface-visibility: hidden;
  border: 5px solid hsla(34, 70%, 67%, 1);
`;
