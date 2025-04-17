import PlayerItem from './PlayerItem';

export default function PlayerList({
 players,
 onScoreChange,
}: {
  players: { name: string; score: number }[];
  onScoreChange: (index: number, delta: number) => void;
}) {
  return (
    <ul className="player-list">
      {players.map((player, i) => (
        <PlayerItem
          key={i}
          index={i}
          name={player.name}
          score={player.score}
          onScoreChange={onScoreChange}
        />
      ))}
    </ul>
  );
}
