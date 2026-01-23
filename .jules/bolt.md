## 2026-01-23 - AudioContext Management & List Rendering
**Learning:** Frequent instantiation of `AudioContext` (e.g., on every click) causes memory leaks and eventually breaks audio playback. Also, inline arrow functions in large lists defeat `React.memo`.
**Action:** Use a Singleton pattern for `AudioContext` management. For lists, use `useRef` to access dynamic state inside stable `useCallback` handlers to enable effective memoization.
