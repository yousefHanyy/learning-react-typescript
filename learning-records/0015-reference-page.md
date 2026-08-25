# Learning Record 0015: Living Reference Page

## Session
2026-07-22

## What We Did
- Created `lessons/reference.html` — the user's permanent working reference
- Added anchor ids (`id="..."`) to every content h2 across lessons 0001–0007, 0009, 0010, 0012 (53 headings) enabling deep links
- Fixed genuine bug found while writing: Lesson 9 main code block destructured `as` without declaring it — corrected to generic own-props interface (`ButtonOwnProps<E>` with `as?: E`); reference uses the same corrected shape

## Reference Design Decisions
- Organized by TASK not by lesson ("type a form" → forms section) — matches pull-out-while-working use case
- Deliberately NOT over-summarized: each entry self-sufficient (code + gotchas + why), source links at entry bottom for full depth
- User's known pain points baked in as Gotcha lines: FormEvent deprecation, ref-no-rerender counter trap, honest-null rationale, useMemo context value, Pick/Omit tiebreaker, Omit-before-intersection rationale, exhaustiveness mechanics step-by-step, useActionState argument flip + fresh-object-per-path
- Includes render-props-vs-hooks table (recurring question), two-context split rationale
- 11 sections: props, events, state, refs, generics, context, utility table, wrapping natives, useReducer, forms comparison, polymorphic

## Standing Rule Recorded
- Update reference.html with every new lesson AND promote anything user asks about twice into relevant section with extra emphasis

## Next
- Lesson 10: Typing Data Fetching (pre-linked as 0013-typing-data-fetching.html — must create; add its patterns to reference after)