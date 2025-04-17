export default function ScoreControls({ onReset }: { onReset: () => void }) {
  return (
    <div className="score-controls">
      <button onClick={onReset}>Reset Game</button>
    </div>
  );
}
