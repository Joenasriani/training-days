## 2025-02-18 - AudioContext Singleton Pattern
**Learning:** Recreating `AudioContext` on every user interaction is a performance anti-pattern. It can lead to resource exhaustion and audio glitches. Browsers limit the number of active AudioContexts.
**Action:** Use a Singleton pattern for `AudioContext`. Initialize it once and reuse it. Always check for `suspended` state and call `resume()` on user interaction to comply with autoplay policies.
