import React, { useContext, useEffect } from 'react';

// context
import { stateContext } from '../../helpers/context/StateProvider';

// data
import cardsData from '../../helpers/data/data';

// functions
import {
  onCardClick,
  resetChoices,
  shuffleCards,
} from '../../helpers/functions/functions';

// styles
import {
  CardsStyled,
  Card,
  CardImgFront,
  CardImgBack,
} from '../../styles/Cards/Cards.styled';

const Cards = () => {
  const { cards, setCards, choices, setChoices } = useContext(stateContext);

  useEffect(() => {
    if (choices.choiceOne.name && choices.choiceTwo.name) {
      if (choices.choiceOne.name === choices.choiceTwo.name) {
        setCards((prev) => {
          return prev.map((card) => {
            if (card.alt === choices.choiceOne.name) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetChoices(setChoices);
      } else {
        setTimeout(() => resetChoices(setChoices), 1000);
      }
    }
  }, [choices]);

  useEffect(() => {
    shuffleCards(cardsData, setCards, setChoices);
  }, []);
  return (
    <CardsStyled>
      {cards.map((card, idx) => {
        return (
          <Card
            key={idx}
            className={
              card.id === choices.choiceOne.id ||
              card.id === choices.choiceTwo.id ||
              card.matched
                ? 'fliped'
                : null
            }
          >
            <CardImgFront src={card.src} alt={card.alt} />
            <CardImgBack
              src={'./images/back.jpg'}
              alt="back-card"
              onClick={() => onCardClick(card, setChoices)}
            />
          </Card>
        );
      })}
    </CardsStyled>
  );
};

export default Cards;
