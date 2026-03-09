# Kindred - Scope Document

## Problem Statement

Families have boxes of letters, photos, audio recordings, and documents that tell their story — but no way to transform scattered artifacts into a living, shareable narrative. Existing "digitize your history" tools treat source documents as database records, not as evidence woven into a told story. The result is organized files, not meaningful narrative.

## Core Insight

**The source documents aren't *behind* the story. They're *woven into* it.** You read the narrative, and the evidence is right there — exactly like good documentary filmmaking or longform journalism.

## User Roles

| Role | Responsibilities | Landing State | 100x Actions |
|------|------------------|---------------|--------------|
| **Archivist** | Uploads source materials, reviews transcriptions, builds context | Ingestion pipeline — upload queue, transcription review | Reviewing/correcting transcriptions, tagging entities |
| **Editor** | Shapes narrative from transcribed materials + AI suggestions | Story editor — block-based with source doc sidebar | Weaving documents into narrative prose, accepting AI suggestions |
| **Reader** | Consumes published story, explores source materials inline | Published story — beautiful reading experience | Reading, expanding inline sources, timeline navigation |
| **Contributor** | Adds memories, corrections, additional materials | Comment/contribution overlay on published story | Flagging corrections, adding context, uploading new materials |

## Platform Layers

### Layer 1: Ingestion & Smart Transcription
- Upload source documents (letter photos, images, PDFs, audio, video)
- Sequential processing with **accumulating context document**
  - Names, places, shorthand, recurring themes build over time
  - Each new document benefits from prior context
- Retrospective refinement pass after batch processing
- Per-document outputs:
  - Confidence score
  - "What we learned" summary
  - Extracted entities (people, places, dates, themes)

### Layer 2: Narrative Intelligence
- **Story graph**: Cast of characters, timeline, places, emotional arcs
- Relationship mapping between documents
- Connection suggestions ("these two letters are 3 weeks apart and both mention this trip")
- Unanswered questions surfaced for family input
- Thematic threads across documents

### Layer 3: Story Editor
- Block-based editor (Notion meets Descript)
- Narrative prose blocks (AI-assisted or hand-written)
- Source documents as draggable inline assets
  - Letter images with transcription callouts
  - Photos with captions and context
  - Audio clips with transcription
- Dual-pane: story + evidence sidebar
- AI suggestions for connections, transitions, context

### Layer 4: Published Story Experience
- Shareable, beautiful reading experience
- Inline expandable source documents
- Timeline navigation
- Character index
- Designed to feel like a book, not a database
- One link, works on any device, no account required to read

### Layer 5: Family Collaboration Loop
- Contextual comments on any element
- "Add your memory" prompts
- Correction flagging ("that's a place name, not a person")
- Upload additional materials
- Contributions feed back into narrative intelligence
- The story is never "done"

## Core Workflows (Priority Order)

### 1. The Woven Read — THE "AHA MOMENT"
**Why first**: This is the single feature that differentiates Kindred from everything else. A reader sees narrative prose with source documents woven inline — click to expand a letter image, see the handwriting, read the AI transcription alongside the narrative context. The evidence IS the story.

**Demo flow**:
1. Open a published story
2. Read a narrative paragraph about a family event
3. See an inline source callout — a letter mentioning this event
4. Expand to see the actual letter image + transcription
5. Continue reading as the narrative weaves in photos, dates, connections
6. Navigate via timeline or character index

### 2. Smart Ingestion Pipeline
**Why second**: Shows the AI-native value prop — upload a batch of letters and watch the system build understanding progressively.

**Demo flow**:
1. View upload queue with batch of letter images
2. Watch sequential processing with growing context
3. See entity extraction (people, places, dates)
4. Review transcription with confidence scores
5. See "what we learned" summaries accumulate

### 3. Story Editor
**Why third**: The creative workspace where narrative meets evidence.

**Demo flow**:
1. Block-based editor with narrative prose
2. Source document sidebar with draggable assets
3. AI connection suggestions
4. Inline source document placement
5. Preview toggle to see reader experience

### 4. Family Collaboration
**Why fourth**: The loop that makes the story alive.

**Demo flow**:
1. Reader leaves contextual comment
2. Contributor adds a memory
3. Someone flags a correction
4. New material uploaded
5. Narrative intelligence re-analyzes

## MVP Phases

**Phase 1 — Vision Site Scope**:
- [ ] Landing page with narrative arc
- [ ] Published story reading experience (the "woven read")
- [ ] Ingestion pipeline view (upload + transcription review)
- [ ] Story editor view (block-based with source docs)
- [ ] Character/timeline index
- [ ] Family collaboration overlay

**Phase 2+ — Future**:
- Real AI transcription pipeline
- Actual file upload + processing
- Authentication + family sharing
- Audio/video ingestion
- Print-quality PDF export
- Mobile companion app for scanning
- Multi-story collections per family
