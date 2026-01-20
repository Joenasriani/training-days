## 2025-02-17 - Missing Entry Point & Heavy Dependencies
**Learning:** The `index.html` was missing the module entry point `<script type="module" src="/index.tsx"></script>`, causing Vite builds to produce empty assets. Additionally, `jspdf` and `@google/genai` were bundled in the main chunk (~860kB), blocking the critical path.
**Action:** Always verify `index.html` entry points in Vite projects. Use dynamic imports for heavy, interaction-only libraries like PDF generators to significantly reduce FCP.
