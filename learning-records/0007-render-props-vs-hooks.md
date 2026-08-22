# Learning Record 0007: Render Props vs Hooks

## Session
2026-07-22

## What We Did
- User asked whether render props are obsolete, replaced by hooks
- Verified against React docs (TabSwitcher, List renderItem examples)
- Added a "Patterns" section to the glossary

## Key Insight
- Two distinct use cases, not one:
  1. **Sharing logic/state** → hooks replaced render props (useOnlineStatus)
  2. **Customizing rendering** → render props remain standard (renderItem, renderContent, per-column render)
- A hook cannot do the second job — it can't let the caller control how a component renders its own children
- Challenge 4's `render?: (value) => ReactNode` is the correct, still-recommended pattern

## User State
- Strong pattern recognition — correctly sensed the shift, just needed the two-use-cases distinction

## Next
- Lesson 5: Context and custom hooks
- Lesson 6: Utility types (Pick, Omit, Partial)