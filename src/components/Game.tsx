'use client';
import { useState } from 'react';
import PlayerList from './PlayerList';
import AddPlayerForm from './AddPlayerForm';
import ScoreControls from './ScoreControls';

export default function Game() {
  const [players, setPlayers] = useState<{ name: string; score: number }[]>([]);

  const addPlayer = (name: string) => {
    setPlayers([...players, { name, score: 0 }]);
  };

  const updateScore = (index: number, delta: number) => {
    const newPlayers = [...players];
    newPlayers[index].score += delta;
    setPlayers(newPlayers);
  };

  const resetGame = () => {
    setPlayers(players.map(p => ({ ...p, score: 0 })));
  };

  return (
    <div className="game-container">
      <AddPlayerForm onAddPlayer={addPlayer} />
      <PlayerList players={players} onScoreChange={updateScore} />
      <ScoreControls onReset={resetGame} />
    </div>
  );
}
