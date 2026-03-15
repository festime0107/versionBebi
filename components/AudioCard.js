'use client';

import { useState } from 'react';
import { playAudio, getCurrentSrc } from '../lib/audioPlayer';

export default function AudioCard({ emoji, label, audio }) {
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
    playAudio(audio, () => setPlaying(false));
    setTimeout(() => {
      if (getCurrentSrc() !== audio) {
        setPlaying(false);
      }
    }, 150);
  };

  return (
    <button
      onClick={handlePlay}
      className={`audioCard ${playing ? 'audioCardPlaying' : ''}`}
    >
      <div className="audioEmoji">{emoji}</div>
      <div className="audioLabel">{label}</div>
      <div className="audioHint">Preke për ta dëgjuar</div>
    </button>
  );
}
