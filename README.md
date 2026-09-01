# Learning React with TypeScript

This repository is my ongoing journey of learning how TypeScript is used in real React codebases.

I already know React well enough to build applications. The goal here is to develop the TypeScript fluency needed to work confidently in professional projects: typing component APIs, handling browser events, modeling state, and understanding the patterns that make React code easier to maintain.

## How I Learn

I use Matt Pocock's [`/teach` skill](https://github.com/mattpocock/skills/blob/main/skills/productivity/teach/SKILL.md) as the learning loop for this repository. It treats the current directory as a stateful teaching workspace, so each session can build on the lessons, exercises, notes, and learning records already here.

The skill keeps the emphasis on understanding rather than simply producing finished code:

- learn one focused concept at a time
- work through examples and exercises
- explain the reasoning behind TypeScript choices
- record what I learned so future sessions can continue from the right place

The skill is part of Matt Pocock's broader [Skills for Real Engineers repository](https://github.com/mattpocock/skills), which contains the full collection of reusable agent skills.

## Learning Path

The course now covers 14 lessons + 8 exercises, from everyday React typing into production patterns:

1. Props and component APIs
2. Events and state
3. Refs (DOM vs value, React 19 ref-as-prop)
4. Generic components & when to use generics
5. Exercise 1 — Core typing (Lessons 1–4)
6. Context and hooks (honest null + guard hook)
7. Utility types & wrapping native elements
8. Exercise 2 — Context & utilities
9. `useReducer` and reducer state (exhaustiveness guard)
10. Forms and actions (`onSubmit` vs `action` vs `useActionState`)
11. Exercise 3 — Reducers & forms
12. Polymorphic components (`as` prop)
13. Data fetching (typed wrapper + `FetchState` machine)
14. Exercise 4 — Polymorphic & data fetching
15. Typed forms with Zod + React Hook Form
16. Exercise 5 — Advanced forms
17. Performance & memo (`memo`/`useMemo`/`useCallback`)
18. Exercise 6 — Performance
19. Testing typed components — 13a: Your First Test (Jasmine → Vitest) + 13b: Mocks, Context & Async
20. Exercise 7 — Testing
21. Advanced TS patterns (`satisfies`, `as const`, branded types, `unknown`)
22. Exercise 8 — Advanced patterns

Start from [`lessons/index.html`](lessons/index.html) — the hub lists all pages by name in order — or open [`lessons/reference.html`](lessons/reference.html) for the task-organized quick reference that grows with every lesson.

Each lesson has a matching learning record that captures the concepts, decisions, and discoveries from that stage of the journey.

## Repository Guide

- [`lessons/`](lessons/) — readable lesson pages, exercises, and [`lessons/index.html`](lessons/index.html) hub; [`lessons/reference.html`](lessons/reference.html) is the living working reference (task-organized, deep-linked).
- [`learning-records/`](learning-records/) — ongoing notes from each lesson.
- [`reference/glossary.html`](reference/glossary.html) — vocabulary and quick definitions.
- [`assets/`](assets/) — shared styles (`style.css`), quiz/exercise widgets (`quiz.js`, `exercise.js`), syntax highlighting (`highlight.js`), back-to-top arrow (`back-to-top.js`), and top tab navigation (`site-nav.js`).
- [`MISSION.md`](MISSION.md) — goals and success criteria.
- [`NOTES.md`](NOTES.md) — working scratchpad for questions, reminders, and follow-up topics.
- [`RESOURCES.md`](RESOURCES.md) — external learning material.

## Goals

- Write React components with TypeScript confidently.
- Understand props, state, events, refs, context, and custom hooks.
- Know when to use `interface`, `type`, generics, discriminated unions, and utility types.
- Integrate TypeScript with routing, forms, and data fetching.
- Read, review, and contribute to TypeScript React codebases without friction.

## Non-Goals

This is not a React-from-scratch course, and it is not an attempt to cover TypeScript metaprogramming in isolation. The focus stays on practical TypeScript usage inside React applications.
