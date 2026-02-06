## 2025-02-17 - Singleton AudioContext
**Learning:** Browsers limit `AudioContext` instances (typically ~6). Creating a new one on every click is a performance anti-pattern and leads to errors.
**Action:** Always use a Singleton for `AudioContext` and handle `suspended` state with `resume()` on user interaction.
