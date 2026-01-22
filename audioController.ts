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

  private initAudioContext(): void {
    if (this.audioCtx) return;

    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    } catch (error) {
      console.error('Failed to initialize AudioContext:', error);
    }
  }

  public async playClickSound(): Promise<void> {
    this.initAudioContext();
    if (!this.audioCtx) return;

    // Ensure context is running (needed for some browsers after user interaction)
    if (this.audioCtx.state === 'suspended') {
      try {
        await this.audioCtx.resume();
      } catch (error) {
        // Continue even if resume fails, though sound might not play
      }
    }

    try {
      const oscillator = this.audioCtx.createOscillator();
      const gainNode = this.audioCtx.createGain();

      // Regular Mouse Click: Short, high-frequency sine burst without pitch drop
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(700, this.audioCtx.currentTime);

      // Envelope: Instant attack, extremely fast decay
      // Reduced volume by 50% (0.025 -> 0.0125)
      gainNode.gain.setValueAtTime(0.0125, this.audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.01);

      oscillator.connect(gainNode);
      gainNode.connect(this.audioCtx.destination);

      oscillator.start(this.audioCtx.currentTime);
      oscillator.stop(this.audioCtx.currentTime + 0.01);
    } catch (error) {
      // Ignore audio errors during playback
    }
  }
}
