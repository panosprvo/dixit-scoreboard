export default function PlayerItem({
 index,
 name,
 score,
 onScoreChange,
 isStoryteller,
 onStorytellerClick,
}: {
  index: number;
  name: string;
  score: number;
  onScoreChange: (index: number, delta: number) => void;
  isStoryteller: boolean;
  onStorytellerClick: (index: number) => void;
}) {
  return (
    <li className="player-item">
      <div className="player-main">
        <div className="player-info-container">
          <div
            className='player-emoji'
            style={{
              opacity: isStoryteller ? 1 : 0.3,
              transform: isStoryteller ? 'scale(1.2)' : 'scale(1)',
            }}
            onClick={() => onStorytellerClick(index)}>
            🧙
          </div>
          <div className="player-name">{name}</div>
          <div className="player-score">{score}</div>
        </div>
        <div className="player-buttons">
          <button onClick={() => onScoreChange(index, +1)}>+1</button>
          <button onClick={() => onScoreChange(index, +2)}>+2</button>
          <button onClick={() => onScoreChange(index, +3)}>+3</button>
          <button onClick={() => onScoreChange(index, -1)}>-1</button>
        </div>
      </div>
    </li>
  );
}
