import { useState } from 'react'
import { Card } from './components/Card'
import GameHeader from './components/GameHeader'
import { useEffect } from 'react'
import { WinMove } from './components/WinMove'
import { useGameLogic } from './components/useGameLogic'

const cardValues = [
  '🍎',
  '🍎',
  '🍌',
  '🍌',
  '🍊',
  '🍊',
  '🍇',
  '🍇',
  '🍓',
  '🍓',
  '🥝',
  '🥝',
  '🍑',
  '🍑',
  '🍉',
  '🍉'
]

function App () {

  const [cards, score, moves, isGameComplete, initGame, handleCardClick] = useGameLogic(cardValues);
  useEffect(() => initGame(), []);
  return (
    <div className='app'>
      <GameHeader score={score} moves={moves} onReset={initGame} />
      {isGameComplete && <WinMove moves={moves} />}
      <div className='cards-grid'>
        {cards.map((val, index) => (
          <Card key={index} card={val} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  )
}

export default App
