# Bolt's Journal ⚡

## 2024-05-23 - Lazy Loading Heavy Dependencies
**Learning:** `jspdf` is a heavy library (approx 200kb gzipped) often used only for specific user actions (exporting). Importing it at the top level increases the initial bundle size significantly.
**Action:** Always check for heavy "action-specific" libraries and lazy load them using `import()` to improve initial load time (TTime to Interactive).
