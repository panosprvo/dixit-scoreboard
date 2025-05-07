import PlayerItem from './PlayerItem';

export default function PlayerList({
 players,
 onScoreChange,
 storytellerIndex,
 onStorytellerClick,
}: {
  players: { name: string; score: number }[];
  onScoreChange: (index: number, delta: number) => void;
  storytellerIndex: number | null;
  onStorytellerClick: (index: number) => void;
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
          isStoryteller={storytellerIndex === i}
          onStorytellerClick={onStorytellerClick}
        />
      ))}
    </ul>
  );
}
