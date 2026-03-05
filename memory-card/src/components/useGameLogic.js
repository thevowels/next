import { useState } from "react";

export const useGameLogic = (cardValues) => {
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [isLocked, setIsLocked] = useState(false);

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const initGame = () => {
    const finalCards = cardValues.map((value, index) => ({
      id: index,
      value,
      isFlipped: false,
      isMatched: false,
    }));
    setCards(shuffleArray(finalCards));
    setScore(0);
    setMoves(0);
    setFlippedCards([]);
    setMatchedCards([]);
  };
  const handleCardClick = (card) => {
    if (card.isFlipped || card.isMatched || isLocked) return;
    setMoves((prev) => prev + 1);
    const newCards = cards.map((item) => {
      if (item.id === card.id) {
        return { ...item, isFlipped: true };
      }
      return item;
    });
    setCards(newCards);
    const newFlippedCards = [...flippedCards, card.id];
    setFlippedCards(newFlippedCards);
    if (flippedCards.length === 1) {
      setIsLocked(true);
      const firstCard = cards[flippedCards[0]];
      if (firstCard.value == card.value) {
        setTimeout(() => {
          setMatchedCards((prev) => [...prev, firstCard.id, card.id]);
          setCards((prev) =>
            prev.map((c) => {
              if (c.id == firstCard.id || c.id == card.id) {
                return { ...c, isMatched: true };
              } else {
                return c;
              }
            })
          );
          setFlippedCards([]);
          setScore((prev) => prev + 1);
          setIsLocked(false);
        }, 500);
      } else {
        setTimeout(() => {
          const flippedBackCards = newCards.map((c) => {
            if (newFlippedCards.includes(c.id) || c.id === card.id) {
              return { ...c, isFlipped: false };
            } else {
              return c;
            }
          });
          setCards(flippedBackCards);
          setFlippedCards([]);
          setIsLocked(false);
        }, 1000);
      }
    }
  };

  const isGameComplete = matchedCards.length === cardValues.length;

  return [cards, score, moves, isGameComplete, initGame, handleCardClick];
};
