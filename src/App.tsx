import React from 'react';

function getCards() {
  return fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
    .then((res) => res.json())
    .then((res) => res.cards);
}

export function App() {
  const [cards, setDeck] = React.useState([]);

  React.useEffect(() => {
    getCards().then(setDeck);
  }, []);

  //   return <code>{JSON.stringify(cards, null, 4)}</code>;

  return (
    <div>
      {cards.map(({ image }) => (
        <img src={image} />
      ))}
    </div>
  );
}
