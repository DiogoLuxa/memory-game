import React, { createContext, useState } from 'react';

export const stateContext = createContext();

const StateProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [choices, setChoices] = useState({
    choiceOne: { name: null, id: null },
    choiceTwo: { name: null, id: null },
  });

  return (
    <stateContext.Provider value={{ cards, setCards, choices, setChoices }}>
      {children}
    </stateContext.Provider>
  );
};

export default StateProvider;
