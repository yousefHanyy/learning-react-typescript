# Learning Record 0002: Typing Events & State

## Session
2026-07-22

## What We Did
- Lesson 2: Typing events and state
- Event handlers: `React.ChangeEvent<HTMLInputElement>` for named handlers; inferred inline
- `useState` empty-array trap: `never[]`, fixed with `useState<Item[]>([])`
- Discriminated union state pattern (`RequestState`) for async data

## Key Insights
- The event type generic is always the **element** the event attaches to
- Empty arrays need an explicit type annotation or you get `never[]`
- Union state with a `status` discriminator is the production standard for async
- User connected this to the Lesson 1 `type` union example

## User State
- Grasped the polymorphic/union `type` pattern; moved on smoothly
- Wants "what people use at work" — responding well to union state pattern

## Next
- Lesson 3: Typing refs and forwardRef
- Lesson 4: Generic components