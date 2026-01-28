## 2025-02-18 - [Web Audio API Resource Leak]
**Learning:** Instantiating `new AudioContext()` inside an event handler (like a click listener) creates a new hardware context each time. Browsers have a strict limit (usually 6-10) on active AudioContexts. Once this limit is reached, subsequent audio calls fail or throw errors.
**Action:** Always use a Singleton pattern for `AudioContext` to reuse a single instance throughout the application's lifecycle. Handle the `suspended` state by calling `.resume()` on user interaction.
