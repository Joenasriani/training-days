# Bolt's Journal

## 2026-01-25 - AudioContext Singleton
**Learning:** The application was creating a new `AudioContext` on every user interaction (click), which is a heavy resource and can lead to browser limits/crashes.
**Action:** Always implement `AudioContext` as a singleton or reuse a single instance throughout the application lifecycle.
