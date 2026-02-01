## 2025-10-26 - AudioContext Performance
**Learning:** The application was creating a new `AudioContext` for every click event, which is expensive and hits browser limits.
**Action:** Always use a Singleton pattern for `AudioContext` to reuse the instance and handle the `suspended` state.
