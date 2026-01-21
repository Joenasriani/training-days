## 2024-05-23 - [Shared AudioContext]
**Learning:** Instantiating `new AudioContext()` on every user interaction is a performance anti-pattern. Browsers limit the number of active contexts (typically 6), and creating them is expensive.
**Action:** Use a singleton pattern to manage a single `AudioContext` instance for the entire application life cycle. Resuming it on user interaction is cheaper than creating a new one.
