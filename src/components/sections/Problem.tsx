import { Archive, Database, Clock } from "lucide-react";

export const Problem = () => {
  const problems = [
    {
      icon: Archive,
      title: "Scanning isn't storytelling",
      description:
        "Digitization services give you organized files. A folder of JPEGs isn't a narrative. Your family's story deserves more than a file browser.",
    },
    {
      icon: Database,
      title: "Family history tools are databases",
      description:
        "Names, dates, and trees. But where's the voice? Where's the letter about the blue dress on the first day of school? The context dies with the generation that lived it.",
    },
    {
      icon: Clock,
      title: "Every year, connections are lost",
      description:
        "The person who knows that 'CK' stood for 'Cousin Katherine' is getting older. The handwriting that only your mother can read is fading. The stories told at Thanksgiving are told to fewer people each year.",
    },
  ];

  return (
    <section className="px-6 py-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-mono text-kindred tracking-wider uppercase mb-4">
            The problem
          </p>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">
            Digitized isn't told
          </h2>
          <p className="text-lg text-muted-foreground font-serif leading-relaxed">
            Every family history product treats source documents as records in a database.
            But letters aren't data. Photos aren't metadata. They're evidence of lives lived —
            and they deserve to be part of a story, not filed away behind it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, i) => (
            <div key={i} className="group">
              <problem.icon className="h-8 w-8 text-muted-foreground mb-4 transition-colors group-hover:text-kindred" />
              <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
