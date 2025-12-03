import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { blogs, Blog } from "@/data/blogs";
import ReactMarkdown from "react-markdown";

const ArticlesPage = () => {
  const [selectedArticle, setSelectedArticle] = useState<Blog | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Top Navigation */}
      <nav className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container mx-auto px-6 py-4 max-w-6xl">
          <div className="flex items-center justify-between">
            <div>
              <Link to="/" className="text-secondary hover:text-primary transition-colors">
                jelimocharity
              </Link>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/software-engineer" className="text-secondary hover:text-primary transition-colors">
                Portfolio
              </Link>
              <Link to="/articles" className="text-primary font-medium">
                Blogs
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Articles Section */}
      <section className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-light text-accent mb-4">Writings & Insights</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Exploring software development, leadership, and lessons learned along the way
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <button
              key={blog.id}
              onClick={() => setSelectedArticle(blog)}
              className="group text-left border border-border rounded-lg hover:border-primary transition-all duration-300 bg-card overflow-hidden h-full flex flex-col"
            >
              {blog.coverImage && (
                <div className="w-full h-48 overflow-hidden">
                  <img 
                    src={blog.coverImage} 
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6 space-y-4 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="px-2 py-1 bg-background border border-primary/30 rounded text-primary">
                    {blog.category}
                  </span>
                  <span>•</span>
                  <span>{blog.date}</span>
                </div>
                
                <h3 className="text-xl font-medium text-accent group-hover:text-primary transition-colors leading-tight flex-1">
                  {blog.title}
                </h3>
                
                <p className="text-sm text-secondary leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {blog.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-background border border-border rounded-md text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">{blog.readTime}</span>
                  <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                    <span className="text-xs font-medium">Read article</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Article Modal */}
      <Dialog open={!!selectedArticle} onOpenChange={() => setSelectedArticle(null)}>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-card border-border">
          {selectedArticle && (
            <>
              {selectedArticle.coverImage && (
                <div className="w-full h-64 md:h-80 overflow-hidden rounded-t-lg -mt-6 -mx-6 mb-6">
                  <img 
                    src={selectedArticle.coverImage} 
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <DialogHeader className="space-y-4 pb-6 border-b border-border">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="px-3 py-1 bg-background border border-primary/30 rounded text-primary">
                    {selectedArticle.category}
                  </span>
                  <span>•</span>
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
                <DialogTitle className="text-3xl font-light text-accent leading-tight pr-8">
                  {selectedArticle.title}
                </DialogTitle>
                <p className="text-secondary text-base leading-relaxed">
                  {selectedArticle.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedArticle.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-background border border-border rounded-md text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </DialogHeader>
              <div className="prose prose-invert max-w-none pt-6 text-secondary leading-relaxed text-base">
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => <h2 className="text-2xl font-medium text-accent mt-8 mb-4">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-xl font-medium text-primary mt-6 mb-3">{children}</h3>,
                    p: ({ children }) => <p className="text-secondary mb-4 leading-relaxed">{children}</p>,
                    strong: ({ children }) => <strong className="text-accent font-semibold">{children}</strong>,
                    ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2 text-secondary">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2 text-secondary">{children}</ol>,
                    li: ({ children }) => <li className="text-secondary">{children}</li>,
                    code: ({ children, className }) => {
                      const isInline = !className;
                      return isInline ? (
                        <code className="bg-background px-2 py-0.5 rounded text-primary text-sm border border-border">{children}</code>
                      ) : (
                        <code className="block bg-background p-4 rounded border border-border overflow-x-auto text-sm text-secondary my-4">{children}</code>
                      );
                    },
                    pre: ({ children }) => <pre className="bg-background p-4 rounded border border-border overflow-x-auto my-4">{children}</pre>,
                  }}
                >
                  {selectedArticle.content}
                </ReactMarkdown>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 max-w-6xl border-t border-border mt-12">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Charity Jelimo
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ArticlesPage;