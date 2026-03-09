import { useState } from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Upload,
  FileText,
  PenTool,
  Users,
  BarChart3,
  Settings,
  Sun,
  Moon,
  Monitor,
  ChevronLeft,
  ChevronRight,
  Search,
  Bell,
  LogOut,
} from "lucide-react";

type Role = "archivist" | "editor";
type View =
  | "dashboard"
  | "ingestion"
  | "documents"
  | "editor"
  | "story-graph"
  | "collaborators"
  | "settings";

const roleNavItems: Record<Role, { icon: typeof Upload; label: string; path: View }[]> = {
  archivist: [
    { icon: BarChart3, label: "Dashboard", path: "dashboard" },
    { icon: Upload, label: "Ingestion", path: "ingestion" },
    { icon: FileText, label: "Documents", path: "documents" },
    { icon: Users, label: "Story Graph", path: "story-graph" },
    { icon: Settings, label: "Settings", path: "settings" },
  ],
  editor: [
    { icon: BarChart3, label: "Dashboard", path: "dashboard" },
    { icon: PenTool, label: "Story Editor", path: "editor" },
    { icon: FileText, label: "Documents", path: "documents" },
    { icon: Users, label: "Story Graph", path: "story-graph" },
    { icon: Users, label: "Collaborators", path: "collaborators" },
    { icon: Settings, label: "Settings", path: "settings" },
  ],
};

const ArchiveShell = () => {
  const isMobile = useIsMobile();
  const [activeRole, setActiveRole] = useState<Role>("archivist");
  const [selectedPath, setSelectedPath] = useState<View>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isDark, setIsDark] = useState(false);

  if (isMobile) {
    return (
      <div className="flex items-center justify-center min-h-screen p-6">
        <div className="text-center max-w-sm">
          <Monitor className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-xl font-semibold mb-2">Desktop Experience</h2>
          <p className="text-muted-foreground mb-6">
            The archive workspace is designed for larger screens. Please visit on a desktop or laptop.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-6 py-2.5 text-sm font-medium"
          >
            Back to site
          </Link>
        </div>
      </div>
    );
  }

  const navItems = roleNavItems[activeRole];

  return (
    <div className={cn("flex h-screen", isDark && "dark")}>
      {/* Sidebar */}
      <aside
        className={cn(
          "border-r border-border bg-sidebar flex flex-col transition-all duration-200",
          sidebarOpen ? "w-64" : "w-0 overflow-hidden"
        )}
      >
        {/* Logo */}
        <div className="h-16 flex items-center gap-2.5 px-5 border-b border-sidebar-border">
          <BookOpen className="h-5 w-5 text-kindred" />
          <span className="text-lg font-semibold tracking-tight">Kindred</span>
        </div>

        {/* Role selector */}
        <div className="px-3 py-3">
          <select
            value={activeRole}
            onChange={(e) => {
              setActiveRole(e.target.value as Role);
              setSelectedPath("dashboard");
            }}
            className="w-full text-sm bg-sidebar-accent text-sidebar-accent-foreground rounded-md px-3 py-2 border border-sidebar-border"
          >
            <option value="archivist">Archivist</option>
            <option value="editor">Editor</option>
          </select>
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-3 py-2 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => setSelectedPath(item.path)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                selectedPath === item.path
                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </nav>

        {/* Sidebar collapse */}
        <div className="p-3 border-t border-sidebar-border">
          <button
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-2 text-xs text-sidebar-foreground/50 hover:text-sidebar-foreground transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Collapse
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 border-b border-border px-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            {!sidebarOpen && (
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-1.5 hover:bg-muted rounded-md transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            )}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="capitalize">{activeRole}</span>
              <span>/</span>
              <span className="text-foreground font-medium capitalize">
                {selectedPath.replace("-", " ")}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-muted rounded-md transition-colors">
              <Search className="h-4 w-4 text-muted-foreground" />
            </button>
            <button className="p-2 hover:bg-muted rounded-md transition-colors">
              <Bell className="h-4 w-4 text-muted-foreground" />
            </button>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 hover:bg-muted rounded-md transition-colors"
            >
              {isDark ? (
                <Sun className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Moon className="h-4 w-4 text-muted-foreground" />
              )}
            </button>
            <Link
              to="/"
              className="p-2 hover:bg-muted rounded-md transition-colors"
            >
              <LogOut className="h-4 w-4 text-muted-foreground" />
            </Link>
          </div>
        </header>

        {/* Content area */}
        <main className="flex-1 overflow-auto p-6">
          <PlaceholderView role={activeRole} view={selectedPath} />
        </main>
      </div>
    </div>
  );
};

function PlaceholderView({ role, view }: { role: Role; view: View }) {
  const viewConfig: Record<string, { title: string; description: string; status: string }> = {
    dashboard: {
      title: "Archive Dashboard",
      description: "Overview of your family archive: document count, transcription progress, story status, recent activity.",
      status: "Coming Soon",
    },
    ingestion: {
      title: "Ingestion Pipeline",
      description: "Upload source documents. Watch AI process them sequentially, building context as it goes. Review transcriptions, confidence scores, and extracted entities.",
      status: "Coming Soon",
    },
    documents: {
      title: "Document Library",
      description: "Browse all source documents. Filter by type, date, person, or theme. View transcriptions and entity tags.",
      status: "Coming Soon",
    },
    editor: {
      title: "Story Editor",
      description: "Block-based editor for shaping the narrative. Drag source documents inline. Accept AI connection suggestions. Preview the reading experience.",
      status: "Coming Soon",
    },
    "story-graph": {
      title: "Story Graph",
      description: "Visual map of characters, places, events, and themes. See relationships between entities. Explore the web of connections across all source documents.",
      status: "Coming Soon",
    },
    collaborators: {
      title: "Collaborators",
      description: "Manage family members who can contribute. View pending contributions, corrections, and new materials.",
      status: "Coming Soon",
    },
    settings: {
      title: "Settings",
      description: "Archive settings, sharing preferences, and export options.",
      status: "Coming Soon",
    },
  };

  const config = viewConfig[view] || viewConfig.dashboard;

  return (
    <div className="max-w-2xl mx-auto mt-16 text-center">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-kindred/10 text-kindred text-xs font-mono mb-6">
        {config.status}
      </div>
      <h2 className="text-2xl font-light tracking-tight mb-3">{config.title}</h2>
      <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
        {config.description}
      </p>
    </div>
  );
}

export default ArchiveShell;
