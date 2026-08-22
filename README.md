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

The lessons move from everyday React typing into patterns used in larger codebases:

1. Props and component APIs
2. Events and state
3. Refs
4. Generic components
5. Core TypeScript exercises
6. Context and hooks
7. Utility types
8. Context and utilities exercise
9. `useReducer` and reducer state
10. Forms and actions
11. Reducers and forms exercise

Each lesson has a matching learning record that captures the concepts, decisions, and discoveries from that stage of the journey.

## Repository Guide

- [`lessons/`](lessons/) contains the readable lesson pages and exercises.
- [`learning-records/`](learning-records/) contains the ongoing notes from each lesson.
- [`reference/glossary.html`](reference/glossary.html) collects project vocabulary and quick references.
- [`assets/`](assets/) contains the shared styles and interactive exercise or quiz scripts.
- [`MISSION.md`](MISSION.md) describes the goals and success criteria for the project.
- [`NOTES.md`](NOTES.md) is the working scratchpad for questions, reminders, and follow-up topics.
- [`RESOURCES.md`](RESOURCES.md) collects useful external learning material.

## Goals

- Write React components with TypeScript confidently.
- Understand props, state, events, refs, context, and custom hooks.
- Know when to use `interface`, `type`, generics, discriminated unions, and utility types.
- Integrate TypeScript with routing, forms, and data fetching.
- Read, review, and contribute to TypeScript React codebases without friction.

## Non-Goals

This is not a React-from-scratch course, and it is not an attempt to cover TypeScript metaprogramming in isolation. The focus stays on practical TypeScript usage inside React applications.
