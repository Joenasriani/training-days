## 2024-01-07 - [Lazy Loading Heavy Dependencies]
**Learning:** Large libraries like `jspdf` and `@google/genai` can significantly impact initial bundle size. In this Vite project, they were included in the main bundle even though they are only used for specific user interactions.
**Action:** Use dynamic imports (`await import('...')`) inside event handlers (like `handleGenerate` and `handleExport`) to split these dependencies into separate chunks. This ensures the main thread isn't blocked by parsing unused code on initial load.
