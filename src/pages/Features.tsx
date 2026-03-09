import { Navigation } from "@/components/Navigation";
import {
  Upload,
  Brain,
  PenTool,
  BookOpen,
  Users,
  Search,
  Sparkles,
  GitBranch,
  Share2,
} from "lucide-react";

const features = [
  {
    icon: Upload,
    title: "Smart Ingestion Pipeline",
    description:
      "Upload letters, photos, audio, documents — any family artifact. AI processes them sequentially, building an accumulating context document. Names, places, and shorthand recognized earlier improve accuracy later. Each document gets a confidence score and a 'what we learned' summary.",
    tag: "Layer 1",
  },
  {
    icon: Brain,
    title: "Narrative Intelligence",
    description:
      "After transcription, a second pass builds the story graph: cast of characters, timeline of events, places, emotional arcs, and unanswered questions. This isn't metadata — it's the understanding that lives behind the story.",
    tag: "Layer 2",
  },
  {
    icon: Sparkles,
    title: "Accumulating Context",
    description:
      "The system gets smarter with every document. 'CK' becomes 'Cousin Katherine' after the third letter. 'The farm' resolves to 'Cedar Falls, Iowa.' Handwriting recognition improves as the model learns each writer's style.",
    tag: "AI-Native",
  },
  {
    icon: PenTool,
    title: "Story Editor",
    description:
      "Block-based, like Notion meets Descript. Narrative prose blocks that can be AI-assisted or hand-written. Source documents are draggable assets woven inline. The AI suggests connections between documents written weeks apart.",
    tag: "Layer 3",
  },
  {
    icon: GitBranch,
    title: "Connection Suggestions",
    description:
      "\"These two letters are 3 weeks apart and both mention this trip.\" The AI surfaces relationships between documents that a human might miss across hundreds of artifacts. Thematic threads, chronological links, emotional arcs.",
    tag: "AI-Native",
  },
  {
    icon: BookOpen,
    title: "The Woven Read",
    description:
      "The published story experience. Source documents expand inline within the narrative. You read the prose, and the evidence is right there. Timeline navigation, character index, beautiful typography. Feels like a book, not a database.",
    tag: "Layer 4",
  },
  {
    icon: Users,
    title: "Family Collaboration",
    description:
      "Readers leave contextual comments, add their own memories, flag corrections ('that's a place, not a person'), or upload additional materials. Every contribution feeds back into the narrative intelligence layer.",
    tag: "Layer 5",
  },
  {
    icon: Search,
    title: "Character & Timeline Index",
    description:
      "Navigate the story by person or by time. See every mention of a character across all source documents. Jump to any point in the family timeline. The index is auto-generated from the story graph.",
    tag: "Navigation",
  },
  {
    icon: Share2,
    title: "One Link, Any Device",
    description:
      "Share your family's story with a single link. No account required to read. Beautiful reading experience on phones, tablets, and desktops. Designed for the grandmother who just wants to read, not create an account.",
    tag: "Sharing",
  },
];

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-28 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-mono text-kindred tracking-wider uppercase mb-4">
            Features
          </p>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-4">
            Five layers.
            <br />
            <span className="text-muted-foreground">One told story.</span>
          </h1>
          <p className="text-xl text-muted-foreground font-serif leading-relaxed max-w-2xl">
            From a box of letters to a living narrative archive. Every feature
            serves one goal: making the source documents part of the story,
            not filed away behind it.
          </p>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-4xl mx-auto space-y-16">
          {features.map((feature, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 items-start"
            >
              <div>
                <div className="inline-flex items-center gap-2 mb-3">
                  <feature.icon className="h-5 w-5 text-kindred" />
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    {feature.tag}
                  </span>
                </div>
                <h2 className="text-xl font-semibold">{feature.title}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Features;
