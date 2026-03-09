# Kindred — Architecture & Component Index

## Quick Reference
- **Pages**: 6 (Index, Features, ArchiveShell, StoryReader, Mobile, NotFound)
- **Landing sections**: 5 (Hero, Problem, Solution, InteractiveDemo, CallToAction)
- **Platform views**: 7 placeholders (Dashboard, Ingestion, Documents, Editor, StoryGraph, Collaborators, Settings)
- **Roles**: 2 in shell (Archivist, Editor) + 2 in reader (Reader, Contributor)

## Routes

| Route | Component | Status |
|-------|-----------|--------|
| `/` | Index.tsx | ✅ Built |
| `/features` | Features.tsx | ✅ Built |
| `/archive-shell` | ArchiveShell.tsx | ⚪ Shell + placeholders |
| `/story/:id` | StoryReader.tsx | ✅ Built (woven read) |
| `/mobile` | Mobile.tsx | ⚪ Content only |
| `*` | NotFound.tsx | ✅ Built |

## Landing Page Sections

| Section | Component | Status |
|---------|-----------|--------|
| Hero | sections/Hero.tsx | ✅ Built |
| Problem | sections/Problem.tsx | ✅ Built |
| Solution | sections/Solution.tsx | ✅ Built |
| Interactive Demo | sections/InteractiveDemo.tsx | ✅ Built |
| Call to Action | sections/CallToAction.tsx | ✅ Built |

## Story Reader Components

| Feature | Status |
|---------|--------|
| Prose blocks | ✅ Built |
| Source document embeds (expandable) | ✅ Built |
| Chapter headings | ✅ Built |
| Timeline markers | ✅ Built |
| Timeline sidebar | ✅ Built |
| Character index sidebar | ✅ Built |
| Contribution overlay | ⚪ Not yet |

## Archive Shell Views

| View | Role | Status |
|------|------|--------|
| Dashboard | Both | ⚪ Placeholder |
| Ingestion Pipeline | Archivist | ⚪ Placeholder |
| Document Library | Both | ⚪ Placeholder |
| Story Editor | Editor | ⚪ Placeholder |
| Story Graph | Both | ⚪ Placeholder |
| Collaborators | Editor | ⚪ Placeholder |
| Settings | Both | ⚪ Placeholder |

## Design System

| Element | Implementation |
|---------|---------------|
| Warm color tokens | ✅ index.css |
| Serif narrative (Newsreader) | ✅ |
| Sans UI (Instrument Sans) | ✅ |
| Mono data (JetBrains Mono) | ✅ |
| Kindred amber accent | ✅ #C4956A |
| Dark mode | ✅ Tokens defined |
| Source document styling | ✅ .source-document class |
| Typography plugin | ✅ @tailwindcss/typography |

## Data

| File | Content |
|------|---------|
| data/sampleStory.ts | Mitchell family: entities, source documents, story blocks, timeline |
