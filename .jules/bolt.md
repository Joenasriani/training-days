## 2024-05-23 - Lazy Loading Heavy Dependencies
**Learning:** Initial bundle size was excessively large (863kB) due to static imports of `@google/genai` and `jspdf` in `AICard.tsx`. These libraries are only needed for specific user actions (generation and export).
**Action:** Implemented dynamic imports (`await import(...)`) for these libraries. This reduced the main bundle size to ~248kB (71% reduction) and split the heavy libs into separate chunks loaded on demand.

## 2024-05-23 - Broken Build Configuration
**Learning:** The project's `index.html` was missing the module script entry point (`<script type="module" src="/index.tsx"></script>`), causing `vite build` to produce an empty build (no JS assets).
**Action:** Always verify `index.html` contains the correct entry point when `vite build` produces unexpectedly small or empty output.
