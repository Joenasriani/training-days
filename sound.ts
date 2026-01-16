let audioCtx: AudioContext | null = null;

export const playClickSound = () => {
  try {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      audioCtx = new AudioContext();
    }

    // Resume context if suspended (browser policy)
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    // Regular Mouse Click: Short, high-frequency sine burst without pitch drop
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(700, audioCtx.currentTime);

    // Envelope: Instant attack, extremely fast decay
    // Reduced volume by 50% (0.025 -> 0.0125)
    gainNode.gain.setValueAtTime(0.0125, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.01);

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start(audioCtx.currentTime);
    oscillator.stop(audioCtx.currentTime + 0.01);
  } catch (error) {
    // Ignore audio errors
    console.error('Audio error:', error);
  }
};
