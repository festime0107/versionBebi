let currentAudio = null;
let currentSrc = null;

export function playAudio(src, onEnded) {
  try {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    currentSrc = src;
    currentAudio = new Audio(src);

   currentAudio.onended = () => {
  if (onEnded) onEnded();
};

    currentAudio.play().catch((error) => {
      console.error('Gabim gjatë luajtjes së audios:', error);
      currentSrc = null;
      if (onEnded) onEnded();
    });
  } catch (error) {
    console.error('Gabim audio:', error);
    currentSrc = null;
    if (onEnded) onEnded();
  }
}

export function stopAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  currentSrc = null;
}

export function getCurrentSrc() {
  return currentSrc;
}
