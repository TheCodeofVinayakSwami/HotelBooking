import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Placeholder({ title, description }: { title: string; description: string }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-[12px] flex items-center justify-center text-white font-bold text-lg">
              K
            </div>
            <div>
              <h1 className="font-bold text-xl text-foreground">Kolhapur Travel Hub</h1>
            </div>
          </div>
          <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition">
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <ArrowLeft className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">{title}</h2>
          <p className="text-muted-foreground mb-8">{description}</p>
          <p className="text-sm text-muted-foreground mb-8 p-4 bg-card rounded-[12px]">
            💡 This page is a placeholder. Continue chatting to build out the full {title.toLowerCase()} page with all the features you need!
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-[12px] hover:bg-primary/90 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
