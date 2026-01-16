## 2025-02-14 - AudioContext Leaks
**Learning:** Instantiating `new AudioContext()` inside a component event handler creates a new context on every event, quickly hitting browser limits (usually max 6 contexts) and causing audio to fail.
**Action:** Always implement `AudioContext` as a singleton module or use a persistent `useRef` to maintain a single instance throughout the app's lifecycle.
