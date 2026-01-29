## 2024-05-23 - AudioContext Management
**Learning:** Repeated creation of `AudioContext` can lead to resource exhaustion errors and performance hiccups. A Singleton pattern avoids this by reusing a single context.
**Action:** Always wrap `AudioContext` in a singleton controller and lazily initialize it. Check for `suspended` state and resume on user interaction.
