## 2025-05-23 - Lazy Loading Heavy Dependencies
**Learning:** Heavy libraries like `jspdf` and `@google/genai` significantly impact initial bundle size if imported at the top level, even if used conditionally.
**Action:** Use dynamic imports (`await import(...)`) inside the event handlers that require these libraries to offload them to separate chunks, improving initial load performance.
