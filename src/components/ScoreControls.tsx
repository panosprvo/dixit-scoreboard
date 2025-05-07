export default function ScoreControls({
  onReset,
  onClearPlayers,
}: {
  onReset: () => void
  onClearPlayers: () => void
}) {
  return (
    <div className="score-controls">
      <button className="reset-button" onClick={onReset}>Reset Scoreboard</button>
      <button className="reset-button" onClick={onClearPlayers}>Clear Players</button>
    </div>
  );
}
