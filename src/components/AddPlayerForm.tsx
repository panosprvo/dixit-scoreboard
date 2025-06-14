import { useState } from 'react';

export default function AddPlayerForm({ onAddPlayer }: { onAddPlayer: (name: string) => void }) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onAddPlayer(name.trim());
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-player-form">
      <input
        type="text"
        placeholder="Enter storyteller name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button className="submit-button" type="submit">Add Storyteller 🔮</button>
    </form>
  );
}
