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
      <div className="player-info">
        <div style={{color: 'black'}}>{name}</div>
        <div style={{color: 'black'}}>{score}</div>
      </div>
      <div>
        <button onClick={() => onScoreChange(index, +1)}>+1</button>
        <button onClick={() => onScoreChange(index, +2)}>+2</button>
        <button onClick={() => onScoreChange(index, +3)}>+3</button>
        <button onClick={() => onScoreChange(index, -1)}>-1</button>
      </div>
    </li>
  );
}
