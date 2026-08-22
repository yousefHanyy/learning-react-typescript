# Learning Record 0006: FormEvent Deprecated

## Session
2026-07-22

## What We Did
- User flagged that `React.FormEvent` is deprecated in favor of `SubmitEvent`
- Verified against @types/react v19.2.10 (DefinitelyTyped PR #74383) — user was correct
- Updated Lesson 2, Exercise 1, and glossary to use `SubmitEvent` / `SubmitEventHandler`

## Key Insight
- `React.FormEvent` / `FormEventHandler` deprecated as of @types/react 19.2.10
- Current pattern: `SubmitEvent` or `React.SubmitEventHandler<HTMLFormElement>`
- Old types still work but emit deprecation warnings
- Lesson: type-version churn is real — this is exactly why we verify against current docs

## User State
- Demonstrated good judgment — questioned a claim and verified it
- Noted: user pays attention to deprecations/version changes

## Next
- Lesson 5: Context and custom hooks
- Lesson 6: Utility types (Pick, Omit, Partial)