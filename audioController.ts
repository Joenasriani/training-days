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

  private getContext(): AudioContext | null {
    if (!this.audioContext) {
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioContextClass) {
          this.audioContext = new AudioContextClass();
        }
      } catch (error) {
        console.error('AudioContext support not found');
      }
    }
    return this.audioContext;
  }

  public async playClickSound(): Promise<void> {
    const ctx = this.getContext();
    if (!ctx) return;

    // Resume context if suspended (browser autoplay policy)
    if (ctx.state === 'suspended') {
      try {
        await ctx.resume();
      } catch (e) {
        // Continue even if resume fails, though sound might not play
      }
    }

    try {
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      // Regular Mouse Click: Short, high-frequency sine burst without pitch drop
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(700, ctx.currentTime);

      // Envelope: Instant attack, extremely fast decay
      // Reduced volume by 50% (0.025 -> 0.0125)
      gainNode.gain.setValueAtTime(0.0125, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.01);

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.01);
    } catch (error) {
      // Ignore audio errors during playback
    }
  }
}

export const audioController = AudioController.getInstance();
