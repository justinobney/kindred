import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center">
        <BookOpen className="h-10 w-10 text-kindred mx-auto mb-6" />
        <h1 className="text-4xl font-light tracking-tight mb-2">Page not found</h1>
        <p className="text-muted-foreground mb-8">
          This page doesn't exist yet. The story continues elsewhere.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-6 py-2.5 text-sm font-medium transition-all hover:opacity-90"
        >
          Back to Kindred
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
