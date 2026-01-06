## 2024-05-23 - Lazy Loading Heavy Dependencies
**Learning:** Large libraries like `jspdf` (PDF generation) and `@google/genai` (AI SDK) can significantly increase the initial bundle size or network load if imported at the top level.
**Action:** Use dynamic `import()` statements inside event handlers (e.g., `handleExport`, `handleGenerate`) to lazy load these dependencies only when they are actually needed by the user. This improves the Time to Interactive (TTI) and reduces initial resource consumption.
