# Learning Record 0025: Exercise 7 — Testing Typed Components

## Session
2026-07-22 (session 33)

## What We Did
- Created `lessons/0021-exercise-testing.html` (Exercise 7, covers 13a+13b)

## Challenges
1. First spy — vi.fn() standalone, getByRole + userEvent.click, toHaveBeenCalledWith
2. Query priority — refactor getByTestId → getByLabelText/getByRole, queryBy for absence
3. Real provider — wrap with AuthProvider vs vi.mock, seed via initialUser, renderHook wrapper
4. Mock the boundary — spyOn api.getJSON mockResolvedValue/mockRejectedValue, findByText wait, not global fetch
5. Stretch — zod blocks submit, findBy error, waitFor disappearance, onSuccess not called gate

## Next
- Lesson 14 pre-linked as 0022-typing-advanced.html
