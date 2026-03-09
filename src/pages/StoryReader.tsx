import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import {
  mitchellStory,
  sourceDocuments,
  entities,
  timeline,
} from "@/data/sampleStory";
import {
  BookOpen,
  ChevronRight,
  FileText,
  Image,
  Quote,
  Calendar,
  Users,
  ArrowLeft,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";

const StoryReader = () => {
  const { id } = useParams();
  const story = mitchellStory; // In real app, look up by ID
  const [expandedDocs, setExpandedDocs] = useState<Set<string>>(new Set());
  const [showSidebar, setShowSidebar] = useState<"timeline" | "characters" | null>(null);

  const toggleDoc = (docId: string) => {
    setExpandedDocs((prev) => {
      const next = new Set(prev);
      if (next.has(docId)) next.delete(docId);
      else next.add(docId);
      return next;
    });
  };

  const getSourceDoc = (docId: string) =>
    sourceDocuments.find((d) => d.id === docId);

  const people = entities.filter((e) => e.type === "person");
  const places = entities.filter((e) => e.type === "place");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="flex">
        {/* Main reading area */}
        <main className="flex-1 pt-24 pb-32">
          <article className="max-w-2xl mx-auto px-6">
            {/* Story header */}
            <header className="mb-16 text-center">
              <h1 className="font-serif text-4xl sm:text-5xl italic text-foreground mb-3">
                {story.title}
              </h1>
              <p className="text-lg text-muted-foreground font-serif">
                {story.subtitle}
              </p>
              <div className="flex items-center justify-center gap-4 mt-6 text-xs font-mono text-muted-foreground">
                <span>{story.author}</span>
                <span className="text-border">|</span>
                <span>Updated {story.lastUpdated}</span>
              </div>
            </header>

            {/* Story toolbar */}
            <div className="flex items-center justify-center gap-2 mb-16 pb-8 border-b border-border">
              <button
                onClick={() => setShowSidebar(showSidebar === "timeline" ? null : "timeline")}
                className={cn(
                  "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all",
                  showSidebar === "timeline"
                    ? "bg-kindred/10 text-kindred"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                <Clock className="h-3.5 w-3.5" />
                Timeline
              </button>
              <button
                onClick={() => setShowSidebar(showSidebar === "characters" ? null : "characters")}
                className={cn(
                  "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all",
                  showSidebar === "characters"
                    ? "bg-kindred/10 text-kindred"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                <Users className="h-3.5 w-3.5" />
                Characters
              </button>
            </div>

            {/* Story blocks */}
            <div className="space-y-6">
              {story.blocks.map((block) => {
                if (block.type === "chapter-heading") {
                  return (
                    <h2
                      key={block.id}
                      className="text-2xl font-light tracking-tight mt-16 mb-8 pt-8 border-t border-border"
                    >
                      {block.content}
                    </h2>
                  );
                }

                if (block.type === "timeline-marker") {
                  return (
                    <div
                      key={block.id}
                      className="flex items-center gap-3 my-8 text-sm"
                    >
                      <Calendar className="h-4 w-4 text-kindred" />
                      <span className="font-mono text-muted-foreground">
                        {block.content}
                      </span>
                    </div>
                  );
                }

                if (block.type === "source-embed" && block.sourceDocId) {
                  const doc = getSourceDoc(block.sourceDocId);
                  if (!doc) return null;
                  const isExpanded = expandedDocs.has(doc.id);
                  const isPhoto = doc.type === "photo";
                  const IconComponent = isPhoto ? Image : FileText;

                  return (
                    <button
                      key={block.id}
                      onClick={() => toggleDoc(doc.id)}
                      className={cn(
                        "w-full text-left source-document p-5 cursor-pointer transition-all my-8",
                        isExpanded && "ring-1 ring-kindred/40"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <IconComponent className="h-4 w-4 text-kindred" />
                          <span className="text-sm font-sans font-medium">
                            {block.caption || doc.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-muted-foreground">
                            {doc.date}
                          </span>
                          <ChevronRight
                            className={cn(
                              "h-4 w-4 text-muted-foreground transition-transform",
                              isExpanded && "rotate-90"
                            )}
                          />
                        </div>
                      </div>

                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t border-kindred/10 animate-fade-in">
                          {isPhoto ? (
                            <div className="bg-muted rounded-lg p-8 mb-3 text-center">
                              <Image className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                              <p className="text-sm text-muted-foreground font-sans">
                                [Photograph placeholder]
                              </p>
                            </div>
                          ) : (
                            <div className="bg-amber-50/80 dark:bg-amber-950/30 rounded-lg p-5 mb-3">
                              <p className="text-sm font-serif italic text-foreground/80 whitespace-pre-line leading-relaxed">
                                {doc.transcription}
                              </p>
                            </div>
                          )}

                          <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground mb-3">
                            <span>Confidence: {Math.round(doc.confidence * 100)}%</span>
                            {doc.from && <span>From: {doc.from}</span>}
                            {doc.to && <span>To: {doc.to}</span>}
                          </div>

                          <div className="flex items-start gap-2">
                            <Quote className="h-3 w-3 text-kindred mt-1 shrink-0" />
                            <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                              {doc.whatWeLearned}
                            </p>
                          </div>
                        </div>
                      )}
                    </button>
                  );
                }

                // Prose block
                return (
                  <p
                    key={block.id}
                    className="font-serif text-lg leading-relaxed text-foreground/85"
                  >
                    {block.content}
                  </p>
                );
              })}
            </div>

            {/* End marker */}
            <div className="mt-20 pt-8 border-t border-border text-center">
              <BookOpen className="h-6 w-6 text-kindred mx-auto mb-4" />
              <p className="text-sm text-muted-foreground font-serif italic">
                The story is never done. Family members can add memories,
                corrections, and new materials at any time.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Kindred
              </Link>
            </div>
          </article>
        </main>

        {/* Sidebar — Timeline or Characters */}
        {showSidebar && (
          <aside className="hidden lg:block w-80 border-l border-border pt-24 px-6 pb-16 overflow-y-auto h-screen sticky top-0 animate-slide-in-right">
            {showSidebar === "timeline" && (
              <div>
                <h3 className="text-sm font-semibold mb-6">Timeline</h3>
                <div className="space-y-6">
                  {timeline.map((event, i) => (
                    <div key={i} className="relative pl-6 border-l border-border">
                      <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-kindred -translate-x-[5px]" />
                      <p className="text-xs font-mono text-kindred mb-1">
                        {event.date}
                      </p>
                      <p className="text-sm font-semibold mb-1">{event.label}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {showSidebar === "characters" && (
              <div>
                <h3 className="text-sm font-semibold mb-6">Cast of Characters</h3>
                <div className="space-y-5">
                  <div>
                    <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">
                      People
                    </h4>
                    {people.map((entity) => (
                      <div key={entity.id} className="mb-4">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-sm font-semibold">{entity.name}</p>
                          <span className="text-xs font-mono text-muted-foreground">
                            {entity.mentions} mentions
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {entity.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border">
                    <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">
                      Places
                    </h4>
                    {places.map((entity) => (
                      <div key={entity.id} className="mb-4">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-sm font-semibold">{entity.name}</p>
                          <span className="text-xs font-mono text-muted-foreground">
                            {entity.mentions} mentions
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {entity.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </aside>
        )}
      </div>
    </div>
  );
};

export default StoryReader;
