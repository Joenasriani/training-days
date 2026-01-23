class AudioController {
  private context: AudioContext | null = null;

  private getContext(): AudioContext | null {
    if (!this.context) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        this.context = new AudioContextClass();
      }
    }
    return this.context;
  }

  public playTone(frequency: number) {
    try {
      const ctx = this.getContext();
      if (!ctx) return;

      // Resume context if suspended (browser requirement for audio)
      if (ctx.state === 'suspended') {
        ctx.resume().catch(() => {});
      }

      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);

      // Envelope: Instant attack, extremely fast decay
      // Reduced volume by 50% (0.025 -> 0.0125)
      gainNode.gain.setValueAtTime(0.0125, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.01);

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.01);

      // Cleanup nodes after playing
      oscillator.onended = () => {
          oscillator.disconnect();
          gainNode.disconnect();
      };

    } catch (error) {
      // Ignore audio errors
    }
  }
}

export const audioController = new AudioController();
