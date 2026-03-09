# CLAUDE.md — Kindred

## Project Overview

**Kindred** is a vision prototype for a living narrative archive platform for families. It demonstrates how scattered family artifacts — letters, photos, recordings, documents — become a told story where source documents are woven directly into the narrative.

### Related Documentation

- **`SITE_OVERVIEW.md`** — Narrative arc, content strategy, design philosophy
- **`docs/plan.md`** — Requirements and scope (SOURCE OF TRUTH)
- **`docs/architecture.md`** — Component index and implementation status

**When in doubt about requirements, refer to `docs/plan.md`.**

## Development Commands

```sh
bun install
bun run dev        # localhost:8080
bun run build
bun run lint
```

## Architecture

### Tech Stack
- React 18 + TypeScript (relaxed checking)
- Vite + SWC
- Tailwind CSS with custom warm design system
- shadcn/ui (Radix primitives)
- React Router 6
- TanStack Query

### Design System
- **Serif**: Newsreader — narrative prose, reading experience
- **Sans**: Instrument Sans — UI chrome, navigation
- **Mono**: JetBrains Mono — dates, metadata, confidence scores
- **Accent**: Amber `#C4956A` — warmth, heritage, connection
- **Philosophy**: Editorial warmth. Typography-forward. Generous whitespace.

### Path Aliases
```tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
```

## Directory Structure

```
src/
├── pages/
│   ├── Index.tsx           # Landing page
│   ├── Features.tsx        # Feature showcase
│   ├── ArchiveShell.tsx    # Primary demo — Archivist + Editor workspace
│   ├── StoryReader.tsx     # Published story reading experience
│   ├── Mobile.tsx          # Mobile experiences
│   └── NotFound.tsx        # 404
├── components/
│   ├── ui/                 # shadcn/ui primitives
│   ├── sections/           # Landing page sections
│   ├── platform/           # Archive shell views (ingestion, editor, etc.)
│   ├── reader/             # Published story reading components
│   └── mockups/            # Static mockup components
├── data/                   # Sample family data, letters, entities
├── hooks/
├── lib/
└── contexts/
```

## Routes

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | Index | Landing page |
| `/features` | Features | Feature deep-dive |
| `/archive-shell` | ArchiveShell | Primary demo (desktop only) |
| `/story/:id` | StoryReader | Published reading experience |
| `/mobile` | Mobile | Mobile experiences |
| `*` | NotFound | 404 |

## Domain Language

- **Source Document** — Any uploaded artifact (letter, photo, audio, document)
- **Transcription** — AI-generated text from a source document
- **Entity** — Person, place, date, or theme extracted from transcriptions
- **Story** — A narrative composed of prose blocks and inline source references
- **Block** — A unit of story content (prose, source embed, photo, timeline marker)
- **Story Graph** — The interconnected web of entities, events, and relationships
- **Woven Read** — The reading experience where source documents appear inline
- **Contribution** — A family member's addition (memory, correction, material)
- **Context Document** — The accumulating knowledge base that improves transcription

## Key Patterns

### The Woven Read (AHA MOMENT)
The core differentiator. In the reading experience, source documents appear inline within narrative prose. Readers can expand to see the original letter image, transcription, and context without leaving the story flow.

### Accumulating Context
During ingestion, each document processed adds to a growing context document. Names, places, shorthand, and themes recognized in earlier documents improve accuracy of later ones.

### Four Roles
- **Archivist** — Uploads, reviews transcriptions, builds context
- **Editor** — Shapes narrative, weaves in evidence
- **Reader** — Consumes published story
- **Contributor** — Adds memories, corrections, new materials

## Sample Data

All mockups use fictional but emotionally resonant scenarios:
- **The Mitchell Family Letters** — 1940s-1960s correspondence
- **Characters**: Eleanor Mitchell, James Mitchell, Ruth (daughter), Henry (son), Aunt Clara
- **Places**: Cedar Falls, Iowa; Camp Pendleton; Chicago
- **Themes**: WWII service, family farm, migration to the city, holiday traditions
