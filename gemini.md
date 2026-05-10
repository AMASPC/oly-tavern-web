# System Mandate: Output Optimization & Token Management

You are operating within a constrained output token environment. To prevent "maximum output token limit exceeded" failures, you must strictly adhere to the following execution rules for all code generation:

**1. Default to Plan Mode:** Before writing code, use Plan Mode to break down the request into smaller, sequential agent tasks.
**2. Never Output Full Files:** Unless explicitly commanded with the exact phrase "GENERATE FULL FILE", you must never rewrite or output the entire contents of an existing file.
**3. Diff-Only Generation:** When modifying existing code, only output the specific functions, imports, or UI blocks that are being changed. Use clear comments like `// ... existing code ...` to represent unchanged sections.
**4. Chunked Execution:** If a necessary output is mathematically likely to exceed your maximum token limit, stop. Ask the user for permission to proceed with the next chunk.

---

# Architectural Mandate: Hub & Spoke Monorepo

All development must follow a world-class Hub and Spoke model:
- **Componentization**: No monolithic files. Break UI into focused, reusable components.
- **Shared Schemas**: Standardize data contracts.
- **AI-Native Implementation**: Leverage the IDE's multi-agent capabilities for sequential, chunked refactoring.
