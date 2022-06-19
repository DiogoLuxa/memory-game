export const shuffleCards = (cardsData, setCards, setChoices) => {
  resetChoices(setChoices);
  const duplicateCards = [...cardsData, ...cardsData];
  const shuffleCards = duplicateCards.sort(() => Math.random() - 0.5);
  const shuffleCardsInsertId = shuffleCards.map((e) => {
    return {
      ...e,
      id: Math.floor(Math.random() * (10000 - 1)) + 1,
    };
  });

  setCards(shuffleCardsInsertId);
};

export const onCardClick = (card, setChoices) => {
  setChoices((prev) => {
    if (!prev.choiceOne.name) {
      return { ...prev, choiceOne: { name: card.alt, id: card.id } };
    } else {
      return { ...prev, choiceTwo: { name: card.alt, id: card.id } };
    }
  });
};

export const resetChoices = (setChoices) => {
  setChoices((prev) => {
    return {
      ...prev,
      choiceOne: { name: null, id: null },
      choiceTwo: { name: null, id: null },
    };
  });
};
