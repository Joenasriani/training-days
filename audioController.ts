export class AudioController {
  private static instance: AudioController;
  private audioCtx: AudioContext | null = null;

  private constructor() {}

  public static getInstance(): AudioController {
    if (!AudioController.instance) {
      AudioController.instance = new AudioController();
    }
    return AudioController.instance;
  }

  private getContext(): AudioContext | null {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    return this.audioCtx;
  }

  public async playClickSound() {
    try {
      const audioCtx = this.getContext();
      if (!audioCtx) return;

      if (audioCtx.state === 'suspended') {
        await audioCtx.resume();
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

      // Cleanup on ended
      oscillator.onended = () => {
        oscillator.disconnect();
        gainNode.disconnect();
      };
    } catch (error) {
      // Ignore audio errors
    }
  }
}

export const audioController = AudioController.getInstance();
