# Learning Record 0008: Lesson 5 — Context & Custom Hooks

## Session
2026-07-22

## What We Did
- Created `lessons/0006-context-and-hooks.html`
- Fixed stale nav link in lesson 0004 (pointed to nonexistent 0005-context-and-hooks.html → now Exercise 1)

## Lesson Content
- Basic typing: type inferred from `createContext<Theme>("system")` default
- Production pattern: `AuthContextValue | null` + guard hook (`useAuth` throws outside provider, narrowing away null)
- Honest typing over `null!` lies
- Hook-as-API encapsulation: never export the raw context
- React 19: `<Context value>` instead of `<Context.Provider value>`
- `useMemo` on context value to avoid consumer re-renders
- Custom hook return types: inference vs explicit contract; generic hooks (`useDebouncedValue<T>`)
- Callbacks to prior lessons: timer-ID cleanup refs Lesson 3 pattern in useEffect

## User State
- Ready for this; has all prerequisites from Lessons 2–4

## Next
- Lesson 6: Utility Types (Pick, Omit, Partial) → `lessons/0007-utility-types.html`
- Then Exercise 2 covering context/hooks + utility types