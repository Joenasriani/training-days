## 2024-05-23 - Singleton AudioContext Pattern
**Learning:** Browsers limit the number of active AudioContexts (often to ~6). Creating a new context on every user interaction (like a click) quickly exhausts this limit and causes errors or silence.
**Action:** Always implement AudioContext as a singleton module (e.g., `sound.ts`) that lazily initializes and reuses a single instance. Handle `suspended` state by calling `resume()` on user gesture.
