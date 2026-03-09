# Kindred — Site Overview

## What This Site Is

A vision prototype for **Kindred**, a living narrative archive platform for families. This site demonstrates how scattered family artifacts — letters, photos, recordings, documents — become a told story where the evidence is woven directly into the narrative.

## Platform Philosophy

### "The Evidence IS the Story"

Every family history product treats source documents as attachments — files in folders, records in databases. Kindred treats them as **first-class narrative elements**. You don't read the story and then go find the letter. The letter is right there, mid-paragraph, expanding to show the handwriting that proves what you just read.

This is documentary filmmaking applied to family history. Longform journalism applied to your grandmother's letters.

### The Five Layers

1. **Ingestion** — Upload anything. AI builds understanding progressively.
2. **Intelligence** — Story graph: characters, timeline, places, emotional arcs.
3. **Editor** — Block-based. Narrative + evidence, side by side.
4. **Published** — A shareable book, not a database. One link, any device.
5. **Collaboration** — Family contributes. The story evolves. Never "done."

## Landing Page Narrative Arc

### 1. Hero — "Every family has a story. Most of it lives in boxes."
Emotional hook. The problem isn't digitization — it's that no one has turned the artifacts into a *told story*. Kindred does.

### 2. Problem — "Digitized isn't told"
- Scanning services give you organized files, not narrative
- Family history tools are databases, not stories
- The context dies with the generation that lived it
- Every year that passes, more connections are lost

### 3. Solution — "From artifacts to narrative"
Four-role experience:
- **Archivist**: Upload and review. AI builds context progressively.
- **Editor**: Shape the story. Evidence at your fingertips.
- **Reader**: A beautiful reading experience. Source docs woven in.
- **Contributor**: Add memories, flag corrections, keep it alive.

### 4. The Woven Read — Interactive Demo (AHA MOMENT)
A live preview of the reading experience. Narrative prose with inline expandable source documents. The reader sees the story AND the evidence simultaneously.

### 5. How It Works — The Pipeline
Visual walkthrough of the five layers: Upload → AI Understanding → Story Editor → Published → Family Loop

### 6. Call to Action — "Your family's story is waiting"
Emotional close. Start with one letter. One photo. One memory.

## Site Routes

| Route | Purpose | Responsive |
|-------|---------|------------|
| `/` | Landing page — narrative story | Yes |
| `/features` | Deep-dive feature showcase | Yes |
| `/archive-shell` | Primary demo — Archivist + Editor workspace | Desktop only |
| `/story/:id` | Published story reading experience | Yes |
| `/mobile` | Mobile scanning/contribution experience | Phone frames |

## Design System

### Typography
- **Serif**: Newsreader — For narrative prose, the reading experience. Literary, warm, readable.
- **Sans**: Instrument Sans — For UI chrome, labels, navigation. Clean, modern.
- **Mono**: JetBrains Mono — For metadata, dates, confidence scores, entity tags.

### Color Philosophy
- **Warm neutrals**: Cream/linen for reading surfaces. Not sterile white.
- **Sepia semantic**: Source documents get warm treatment — they're "the past"
- **Amber accent**: `#C4956A` — Kindred's signature. Warmth, heritage, connection.
- **Dark mode**: Warm charcoal, not blue-black. Reading-friendly.

### Aesthetic
- Editorial warmth — NYT longform meets a family Bible
- Typography-forward — the words matter most
- Generous whitespace — the reading experience breathes
- Archival texture — source documents feel preserved, not clinical

## Content Philosophy

### Voice
- Warm but not sentimental
- Literary but not pretentious
- Confident but not clinical
- The platform respects the weight of what families are preserving

### Key Phrases
- "The evidence IS the story"
- "Every family has a story. Most of it lives in boxes."
- "Digitized isn't told"
- "A living narrative archive"
- "The story is never done"
- "Woven, not attached"

## Domain Model

### Core Entities
- **Source Document** — Letter, photo, audio, video, document (the raw material)
- **Transcription** — AI-generated text from a source document, with confidence score
- **Entity** — Person, place, date, theme extracted from transcriptions
- **Story** — A narrative composed of prose blocks and inline source references
- **Block** — A unit of story content (prose, source embed, photo, timeline marker)
- **Contribution** — A family member's addition (memory, correction, new material)

### Relationships
- Source Document → Transcription (1:1)
- Transcription → Entities (1:many)
- Story → Blocks (1:many, ordered)
- Block → Source Document (0:1 reference)
- Entity → Entity (relationships: family, mentioned-together, same-event)

## Technical Notes

- All data is mock/sample — no real AI processing in vision site
- Reading experience is the priority — this IS the product differentiator
- The editor is a visual mockup, not a real block editor
- Timeline and character index are navigational aids in the reading experience
