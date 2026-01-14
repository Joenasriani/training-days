## 2025-02-19 - AudioContext Singleton Pattern
**Learning:** Instantiating `AudioContext` inside event handlers causes memory leaks and browser limit errors (max 6 contexts).
**Action:** Always implement `AudioContext` as a module-level singleton or use a custom hook that manages a single instance.
