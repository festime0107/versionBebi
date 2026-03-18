'use client';

import { useEffect, useState } from 'react';
import { playAudio, stopAudio } from '../lib/audioPlayer';

export default function TVMode({ items, onExit }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

  const current = items[index];

  // autoplay + audio
  useEffect(() => {
  if (!playing || !current?.audio) return;

  playAudio(current.audio, () => {
  setTimeout(() => {
    setIndex((prev) => (prev + 1) % items.length);
  }, 800); // 0.8 sek pushim
});
}, [index, playing, current?.audio, items.length]);

  // keyboard controls (TV remote / PC)
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === ' ') togglePlay();
      if (e.key === 'Escape') onExit();
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

 const togglePlay = () => {
  setPlaying((prev) => {
    if (prev) {
      stopAudio();
      return false;
    } else {
      playAudio(current.audio);
      return true;
    }
  });
};

  return (
    <div style={styles.wrapper}>
      {/* EXIT */}
      <button style={styles.exit} onClick={onExit}>
        ❌
      </button>

      {/* CARD */}
      <div key={index} style={styles.card}>
        <div style={styles.emoji}>{current.emoji}</div>
        <div style={styles.label}>{current.label}</div>
      </div>

      {/* CONTROLS */}
      <div style={styles.controls}>
        <button onClick={prev}>⬅</button>
        <button onClick={togglePlay}>
          {playing ? '⏸' : '▶'}
        </button>
        <button onClick={next}>➡</button>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    width: '100vw',
    height: '100vh',
    background: '#0f172a',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  card: {
    textAlign: 'center',
    animation: 'fadeIn 0.6s ease',
  },
  emoji: {
    fontSize: '140px',
    marginBottom: '20px',
  },
  label: {
    fontSize: '52px',
    fontWeight: 'bold',
  },
  controls: {
    position: 'absolute',
    bottom: '40px',
    display: 'flex',
    gap: '20px',
  },
  exit: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    fontSize: '24px',
    background: 'transparent',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};