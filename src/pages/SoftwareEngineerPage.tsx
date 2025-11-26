import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import galleryWorkspace from "@/assets/gallery-workspace.jpg";

const SoftwareEngineerPage = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const renderContent = () => {
    switch (activeTab) {
      case "experience":
        return (
          <div className="space-y-8">
            <div className="w-full">
              <img 
                src={galleryWorkspace} 
                alt="Workspace" 
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Experience & Work</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  {/* Add your work experience content here */}
                  Details about your professional experience, roles, and projects.
                </p>
              </div>
            </div>
          </div>
        );
      case "achievements":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Achievements</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Content about your achievements and accomplishments goes here.
              </p>
              {/* Add your achievements content here */}
            </div>
          </div>
        );
      case "journey":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Journey & Motivation</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Content about your journey and motivation goes here.
              </p>
              {/* Add your journey content here */}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-screen bg-background flex flex-col">
      <div className="container mx-auto px-6 py-4 max-w-6xl">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
      </div>

      <nav className="border-b border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("experience")}
              className={`py-3 px-1 border-b-2 transition-colors ${
                activeTab === "experience"
                  ? "border-primary text-primary font-medium"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Experience & Work
            </button>
            
            <button
              onClick={() => setActiveTab("achievements")}
              className={`py-3 px-1 border-b-2 transition-colors ${
                activeTab === "achievements"
                  ? "border-primary text-primary font-medium"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Achievements
            </button>
            
            <button
              onClick={() => setActiveTab("journey")}
              className={`py-3 px-1 border-b-2 transition-colors ${
                activeTab === "journey"
                  ? "border-primary text-primary font-medium"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Journey & Motivation
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-6 py-8 max-w-6xl">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default SoftwareEngineerPage;
