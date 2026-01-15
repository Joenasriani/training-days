## 2024-05-23 - AudioContext and List Rendering Performance
**Learning:** Browsers have a limit on the number of `AudioContext` instances (typically 6). Creating a new `AudioContext` for every sound effect (e.g., in a click handler) creates a memory leak and eventually hits the limit, causing audio to stop working.
**Action:** Always implement `AudioContext` as a singleton or reuse a single instance via `useRef` across the component's lifecycle.

**Learning:** In a list of components, passing an inline arrow function like `onToggle={() => toggle(id)}` breaks referential equality, causing all list items to re-render whenever the parent re-renders, even if the child components are wrapped in `React.memo`.
**Action:** Refactor the child component to accept a stable callback `onToggle: (id: number) => void` and the `id`, so the parent can pass a stable `useCallback` function.
