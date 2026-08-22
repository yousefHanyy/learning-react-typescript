# Learning Record 0004: Generic Components

## Session
2026-07-22

## What We Did
- Lesson 4: Generic components
- `List<T>` pattern: props depend on type inferred at call site
- Constraining with `T extends Identifiable`
- Production example: generic `Select<T>` component
- `.tsx` arrow function gotcha (trailing comma)

## Key Insights
- T is inferred from props — no annotation needed at call site
- `extends` constrains T and enables property access
- Generic components are ubiquitous in production (lists, selects, tables)
- User already comfortable with generics from `useState<T>`

## User State
- Smooth progression from hooks generics to component generics
- Asked good clarifying questions in earlier lessons (union type, ref counters)

## Next
- Lesson 5: Context and custom hooks
- Lesson 6: Utility types (Pick, Omit, Partial) in React
- Lesson 7: Data fetching and async patterns