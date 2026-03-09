import { useState } from "react";
import { ChevronRight, FileText, Calendar, Quote } from "lucide-react";
import { sourceDocuments } from "@/data/sampleStory";
import { cn } from "@/lib/utils";

export const InteractiveDemo = () => {
  const [expandedDoc, setExpandedDoc] = useState<string | null>(null);

  return (
    <section className="px-6 py-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Sticky description */}
          <div className="lg:sticky lg:top-32">
            <p className="text-sm font-mono text-kindred tracking-wider uppercase mb-4">
              The aha moment
            </p>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">
              The Woven Read
            </h2>
            <p className="text-lg text-muted-foreground font-serif leading-relaxed mb-6">
              Source documents aren't behind the story. They're inside it. You read
              the narrative, and the evidence is right there — expandable, explorable,
              woven into the prose.
            </p>
            <p className="text-sm text-muted-foreground">
              Try expanding a source document in the demo. This is what makes Kindred
              different from everything else.
            </p>
          </div>

          {/* Right: Mini story preview */}
          <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <div className="mb-6">
              <h3 className="font-serif text-2xl italic text-foreground/90 mb-1">
                The Sunday Letters
              </h3>
              <p className="text-xs font-mono text-muted-foreground">
                The Mitchell Family — Cedar Falls to Chicago, 1943–1966
              </p>
            </div>

            <div className="space-y-5 font-serif text-foreground/85 leading-relaxed">
              <p>
                Eleanor Mitchell wrote her first letter to James on a Sunday in September
                1943. She would write every Sunday for the next twenty-three years.
              </p>

              {/* Inline source document — the first letter */}
              <button
                onClick={() =>
                  setExpandedDoc(expandedDoc === "sd1" ? null : "sd1")
                }
                className={cn(
                  "w-full text-left source-document p-4 cursor-pointer transition-all",
                  expandedDoc === "sd1" && "ring-1 ring-kindred/40"
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-kindred" />
                    <span className="text-sm font-sans font-medium text-foreground">
                      Eleanor to James — First Letter
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-muted-foreground">
                      Sept 14, 1943
                    </span>
                    <ChevronRight
                      className={cn(
                        "h-4 w-4 text-muted-foreground transition-transform",
                        expandedDoc === "sd1" && "rotate-90"
                      )}
                    />
                  </div>
                </div>

                {expandedDoc === "sd1" && (
                  <div className="mt-3 pt-3 border-t border-kindred/10 animate-fade-in">
                    <div className="bg-amber-50/80 dark:bg-amber-950/30 rounded-lg p-4 mb-3">
                      <p className="text-sm font-serif italic text-foreground/80 whitespace-pre-line leading-relaxed">
                        {sourceDocuments[0].transcription}
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Quote className="h-3 w-3 text-kindred mt-1 shrink-0" />
                      <p className="text-xs text-muted-foreground font-sans">
                        {sourceDocuments[0].whatWeLearned}
                      </p>
                    </div>
                  </div>
                )}
              </button>

              <p>
                A year later, Ruth started school. Eleanor's letter that day is one of
                the most beautiful in the collection — a mother watching her daughter
                walk down a dirt road in a blue dress, wanting to cry but holding steady.
              </p>

              {/* Second inline source */}
              <button
                onClick={() =>
                  setExpandedDoc(expandedDoc === "sd2" ? null : "sd2")
                }
                className={cn(
                  "w-full text-left source-document p-4 cursor-pointer transition-all",
                  expandedDoc === "sd2" && "ring-1 ring-kindred/40"
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-kindred" />
                    <span className="text-sm font-sans font-medium text-foreground">
                      Ruth's First Day of School
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-muted-foreground">
                      Sept 5, 1944
                    </span>
                    <ChevronRight
                      className={cn(
                        "h-4 w-4 text-muted-foreground transition-transform",
                        expandedDoc === "sd2" && "rotate-90"
                      )}
                    />
                  </div>
                </div>

                {expandedDoc === "sd2" && (
                  <div className="mt-3 pt-3 border-t border-kindred/10 animate-fade-in">
                    <div className="bg-amber-50/80 dark:bg-amber-950/30 rounded-lg p-4 mb-3">
                      <p className="text-sm font-serif italic text-foreground/80 whitespace-pre-line leading-relaxed">
                        {sourceDocuments[1].transcription}
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Quote className="h-3 w-3 text-kindred mt-1 shrink-0" />
                      <p className="text-xs text-muted-foreground font-sans">
                        {sourceDocuments[1].whatWeLearned}
                      </p>
                    </div>
                  </div>
                )}
              </button>

              <p>
                Ruth drew her father bigger than the house. Eleanor saved that drawing.
                Sixty years later, it was in the same box as the letters.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground font-sans text-center">
                This is the Woven Read. Source documents live inside the story.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
