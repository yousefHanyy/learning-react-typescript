# Learning Record 0023: Lesson 13 — Testing Typed Components

## Session
2026-07-22 (session 27)

## What We Did
- Created `lessons/0019-typing-testing.html` (Lesson 13)
- Updated `lessons/reference.html` §15

## Lesson Summary
- Setup: vitest.config.ts jsdom + @testing-library/jest-dom, tsconfig types
- Queries typed + priority: getByRole → getByLabelText → getByText → getByTestId; getBy vs queryBy vs findBy
- userEvent.setup() over fireEvent (full interaction sequence)
- Mocking: vi.fn<Signature> typed, wrap with real provider, vi.mock only at network boundary
- renderHook + act, wrapper for context hooks
- Async forms: findBy*/waitFor after zodResolver blocked submit

## Next
- Exercise 7 pre-linked as 0020-exercise-testing.html
