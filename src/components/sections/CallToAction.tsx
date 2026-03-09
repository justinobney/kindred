import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="px-6 py-32 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <BookOpen className="h-10 w-10 text-kindred mx-auto mb-8" />

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-6">
          Your family's story
          <br />
          <span className="text-muted-foreground">is waiting to be told</span>
        </h2>

        <p className="font-serif text-xl text-muted-foreground leading-relaxed mb-12 max-w-xl mx-auto">
          Start with one letter. One photo. One memory someone told you at
          Thanksgiving. Kindred turns it into a narrative that grows every
          time your family touches it.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/story/mitchell-family"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-8 py-3 text-sm font-medium transition-all hover:opacity-90"
          >
            Read a sample story
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/archive-shell"
            className="inline-flex items-center gap-2 border border-border rounded-full px-8 py-3 text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:border-foreground/20"
          >
            Explore the platform
          </Link>
        </div>

        <p className="mt-16 text-sm text-muted-foreground italic font-serif">
          "The evidence IS the story."
        </p>
      </div>
    </section>
  );
};
