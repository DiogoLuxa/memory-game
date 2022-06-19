import React, { useContext } from 'react';

// context
import { stateContext } from '../../helpers/context/StateProvider';

//data
import cardsData from '../../helpers/data/data';

// functions
import { shuffleCards } from '../../helpers/functions/functions';

// style
import ButtonStyled from '../../styles/Button/Button.styled';

const Button = () => {
  const { setCards, setChoices } = useContext(stateContext);

  return (
    <ButtonStyled
      onClick={() => {
        shuffleCards(cardsData, setCards, setChoices);
      }}
    >
      New Game
    </ButtonStyled>
  );
};

export default Button;
