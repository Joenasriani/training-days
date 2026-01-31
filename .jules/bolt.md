## 2025-02-18 - Audio Context Optimization
**Learning:** Browsers limit the number of `AudioContext` instances (typically to 6). Creating a new one on every click leads to resource exhaustion and eventual silence.
**Action:** Always use a Singleton pattern for `AudioContext` to reuse the same instance, and handle the `suspended` state by resuming it on user interaction.

## 2025-02-18 - Vite Entry Point
**Learning:** The project was missing the `<script type="module" src="/index.tsx"></script>` entry point in `index.html`.
**Action:** Always check `index.html` for the correct entry point if the app fails to render or the build output is empty/broken.
