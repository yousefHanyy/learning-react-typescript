# Learning Record 0022: Exercise 6 — Performance & Memo

## Session
2026-07-22 (session 26)

## What We Did
- Created `lessons/0018-exercise-performance.html` (Exercise 6, covers Lesson 12)

## Challenges
1. Spot useless memo — new arrow + new array defeat shallow compare; cost without benefit
2. Fix it — useCallback for handler + useMemo for derived array; one unstable prop defeats memo
3. Typing — inferred by default; explicit React.ChangeEventHandler when param would be any; pin string | null when branches widen
4. Judgment — memo/don't memo via 3-item checklist
5. Stretch — inline object vs useMemo reference identity, console.log proof

## Next
- Lesson 13 pre-linked as 0019-typing-testing.html
