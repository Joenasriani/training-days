## 2026-02-05 - AudioContext Singleton Pattern
**Learning:** The application was creating a new `AudioContext` on every user interaction (click/input), leading to potential resource exhaustion and browser warnings, as browsers limit the number of active audio contexts.
**Action:** Implemented a Singleton `AudioController` to manage a single shared `AudioContext` instance, ensuring it is reused and resumed correctly (handling autoplay policies). Future audio features must use this controller.
