# Learning Record 0003: Typing Refs

## Session
2026-07-22

## What We Did
- Lesson 3: Typing refs
- DOM refs: `useRef<HTMLInputElement>(null)` → `current` is `T | null`
- Value refs: `useRef<number>(0)` → `current` is `number`
- React 19: ref-as-prop with `React.Ref<T>` replaces forwardRef
- forwardRef pattern still recognized for older codebases

## Key Insights
- DOM refs must be initialized with `null`, never `useRef<T>()` (unsafe)
- `React.Ref<T>` accepts both object and callback refs
- forwardRef type args are `<RefType, PropsType>`

## User State
- Asked about generics in `useState<T>` — understood the mechanism
- React 19 ref-as-prop is the current production pattern (verified via docs)

## Next
- Lesson 4: Generic components
- Lesson 5: Context and custom hooks