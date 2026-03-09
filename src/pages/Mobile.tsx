import { Navigation } from "@/components/Navigation";
import { Camera, MessageSquare, Upload } from "lucide-react";

const Mobile = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-28 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-mono text-kindred tracking-wider uppercase mb-4">
            Mobile
          </p>
          <h1 className="text-4xl font-light tracking-tight mb-4">
            Contribute from anywhere
          </h1>
          <p className="text-xl text-muted-foreground font-serif leading-relaxed max-w-2xl mx-auto">
            Scan a letter at Thanksgiving. Record a memory in the car.
            Upload a photo from the attic. The mobile experience is built
            for contribution, not creation.
          </p>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Camera,
              title: "Quick Scan",
              description:
                "Point your camera at a letter, document, or photo. AI handles the rest — transcription, entity extraction, context building.",
            },
            {
              icon: MessageSquare,
              title: "Voice Memory",
              description:
                "Record a memory, a correction, or context that only you know. 'That's actually Uncle Henry, not a neighbor.' Your voice becomes part of the archive.",
            },
            {
              icon: Upload,
              title: "Photo Upload",
              description:
                "Found a photo in a drawer? Upload it with a note. AI will place it in the timeline and connect it to existing entities.",
            },
          ].map((feature, i) => (
            <div key={i} className="text-center p-6">
              <feature.icon className="h-8 w-8 text-kindred mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Mobile;
