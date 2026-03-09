import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { InteractiveDemo } from "@/components/sections/InteractiveDemo";
import { CallToAction } from "@/components/sections/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <InteractiveDemo />
      <CallToAction />
    </div>
  );
};

export default Index;
