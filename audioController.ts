class AudioController {
  private static instance: AudioController;
  private audioContext: AudioContext | null = null;

  private constructor() {}

  public static getInstance(): AudioController {
    if (!AudioController.instance) {
      AudioController.instance = new AudioController();
    }
    return AudioController.instance;
  }

  public playClickSound(freqMultiplier: number = 1) {
    try {
      if (!this.audioContext) {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioContextClass) return;
        this.audioContext = new AudioContextClass();
      }

      const ctx = this.audioContext;
      // Resume context if suspended (browser policy)
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      // Regular Mouse Click: Short, high-frequency sine burst without pitch drop
      oscillator.type = 'sine';
      // Base frequency is 700Hz, multiplied by modifier (e.g. 0.7 for 30% lower)
      oscillator.frequency.setValueAtTime(700 * freqMultiplier, ctx.currentTime);

      // Envelope: Instant attack, extremely fast decay
      // Reduced volume by 50% (0.025 -> 0.0125)
      gainNode.gain.setValueAtTime(0.0125, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.01);

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.01);
    } catch (error) {
      // Ignore audio errors
      console.error('Audio error:', error);
    }
  }
}

export const audioController = AudioController.getInstance();
