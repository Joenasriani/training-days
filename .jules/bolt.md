## 2024-05-23 - Reusing AudioContext
**Learning:** Instantiating a new `AudioContext` for every sound effect (e.g., in a click handler) is a significant performance anti-pattern. Browsers have a strict limit on the number of active `AudioContext` instances (typically 6), and creating them is expensive.
**Action:** Always use a Singleton or a persistent reference to manage a single `AudioContext` for the entire application lifecycle. Initialize it lazily on the first user interaction if possible.
