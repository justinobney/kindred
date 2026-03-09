import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-mono text-kindred tracking-wider uppercase mb-6 animate-fade-in">
          A living narrative archive
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light tracking-tight mb-6 animate-fade-in">
          Every family has a story.
          <br />
          <span className="text-muted-foreground">Most of it lives in boxes.</span>
        </h1>

        <p className="font-serif text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in">
          Kindred turns scattered letters, photos, and memories into a told story —
          where the evidence isn't behind the narrative.{" "}
          <span className="text-foreground italic">It's woven into it.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
          <Link
            to="/story/mitchell-family"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-8 py-3 text-sm font-medium transition-all hover:opacity-90"
          >
            Read a story
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/features"
            className="inline-flex items-center gap-2 border border-border rounded-full px-8 py-3 text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:border-foreground/20"
          >
            See how it works
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-5 w-5 text-muted-foreground" />
      </div>
    </section>
  );
};
