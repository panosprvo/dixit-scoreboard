'use client';
import {useEffect, useState} from 'react';
import PlayerList from './PlayerList';
import AddPlayerForm from './AddPlayerForm';
import ScoreControls from './ScoreControls';
import Modal from 'react-modal';

export default function Game() {
  useEffect(() => {
    const appElement = document.getElementById('__next');
    if (appElement) {
      Modal.setAppElement('#__next');
    } else {
      console.error('__next element not found');
    }
  }, []);
  const [players, setPlayers] = useState<{ name: string; score: number }[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState<'reset' | 'clear' | null>(null);

  const addPlayer = (name: string) => {
    setPlayers([...players, { name, score: 0 }]);
  };

  const updateScore = (index: number, delta: number) => {
    const newPlayers = [...players];
    const currentScore = newPlayers[index].score;
    const newScore = currentScore + delta;

    if (newScore < 0) return;

    newPlayers[index].score = newScore;
    setPlayers(newPlayers);
  };

  const handleConfirm = () => {
    if (modalAction === 'reset') {
      resetScore();
    } else if (modalAction === 'clear') {
      clearPlayers();
    }
    setModalOpen(false);
  };

  const handleCancel = () => {
    setModalOpen(false);
  }

  const openModal = (action: 'reset' | 'clear') => {
    setModalAction(action);
    setModalOpen(true);
  }

  const resetScore = () => {
    setPlayers(players.map(p => ({ ...p, score: 0 })));
  };

  const clearPlayers = () => {
    setPlayers([]);
  };

  return (
    <div className="game-container">
      <AddPlayerForm onAddPlayer={addPlayer} />
      <PlayerList players={players} onScoreChange={updateScore} />
      <ScoreControls
        onReset={() => openModal('reset')}
        onClearPlayers={() => openModal('clear')}
      />

      <Modal
        isOpen={modalOpen}
        onRequestClose={handleCancel}
        contentLabel='Confirmation Modal'
        className='modal'
        overlayClassName='modal-overlay'
      >
        <h2>Are you sure?</h2>
        <p>
          {modalAction === 'reset'
          ? 'Do you want to reset all scores?'
          : 'Do you want to remove all players?'}
        </p>
        <button className='modal-button' onClick={handleConfirm}>Confirm</button>
        <button className='modal-button' onClick={handleCancel}>Cancel</button>
      </Modal>
    </div>
  );
}
