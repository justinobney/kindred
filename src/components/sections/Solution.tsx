import { Upload, Brain, PenTool, BookOpen, Users } from "lucide-react";

export const Solution = () => {
  const layers = [
    {
      icon: Upload,
      label: "Upload",
      title: "Ingestion & Smart Transcription",
      description:
        "Upload letters, photos, documents. AI processes them sequentially, building context as it goes. Names, places, and shorthand recognized in earlier documents improve accuracy of later ones.",
    },
    {
      icon: Brain,
      label: "Understand",
      title: "Narrative Intelligence",
      description:
        "A second pass builds the story graph: cast of characters, timeline of events, emotional arcs, unanswered questions. Not just metadata — the raw material the story is made from.",
    },
    {
      icon: PenTool,
      label: "Shape",
      title: "Story Editor",
      description:
        "Block-based, like Notion meets Descript. Narrative prose blocks alongside source documents as draggable assets. AI suggests connections between letters written weeks apart about the same trip.",
    },
    {
      icon: BookOpen,
      label: "Share",
      title: "Published Experience",
      description:
        "A shareable, beautiful reading experience. Source documents expand inline. Timeline navigation. Character index. Feels like a book, not a database. One link, any device, no account.",
    },
    {
      icon: Users,
      label: "Grow",
      title: "Family Collaboration",
      description:
        "Readers leave comments, add memories, flag corrections, upload new materials. Every contribution feeds back into the narrative intelligence. The story is never done.",
    },
  ];

  return (
    <section className="px-6 py-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-mono text-kindred tracking-wider uppercase mb-4">
            The platform
          </p>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">
            From artifacts to narrative
          </h2>
          <p className="text-lg text-muted-foreground font-serif leading-relaxed">
            Five layers that transform a box of letters into a living story.
            Each layer builds on the last. The AI assists — the family shapes.
          </p>
        </div>

        <div className="space-y-12">
          {layers.map((layer, i) => (
            <div
              key={i}
              className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 items-start"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-kindred/10 text-kindred">
                  <layer.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    Layer {i + 1}
                  </p>
                  <p className="text-sm font-semibold">{layer.label}</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{layer.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                  {layer.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
