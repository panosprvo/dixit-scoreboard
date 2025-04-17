export default function PlayerItem({
 index,
 name,
 score,
 onScoreChange,
}: {
  index: number;
  name: string;
  score: number;
  onScoreChange: (index: number, delta: number) => void;
}) {
  return (
    <li className="player-item">
      <span style={{ color: 'black' }}>{name}</span>
      <span style={{ color: 'black' }}>{score}</span>
      <button onClick={() => onScoreChange(index, +1)}>+</button>
      <button onClick={() => onScoreChange(index, -1)}>-</button>
    </li>
  );
}
