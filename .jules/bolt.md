## 2026-01-27 - AudioContext Singleton Pattern
**Learning:** Creating a new `AudioContext` on every user interaction (e.g., click) is a performance bottleneck and can lead to browser resource limits (e.g., Chrome's limit of 6 contexts).
**Action:** Always wrap `AudioContext` in a singleton controller to reuse the same instance, handling `resume()` on user interaction to comply with autoplay policies.
