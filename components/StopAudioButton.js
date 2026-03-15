'use client';

import { stopAudio } from '../lib/audioPlayer';

export default function StopAudioButton() {
  return (
    <button onClick={stopAudio} className="stopButton">
      ⏹ Ndalo audion
    </button>
  );
}
