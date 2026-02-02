# Bolt's Journal

## 2025-02-18 - Performance Architecture
**Learning:** The application was creating a new `AudioContext` on every click interaction, which is a resource-intensive operation and can lead to browser limits.
**Action:** Implemented a Singleton `AudioController` to manage a shared `AudioContext` instance, reducing memory overhead and initialization latency.
