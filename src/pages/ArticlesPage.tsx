import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { blogs, Blog } from "@/data/blogs";
import ReactMarkdown from "react-markdown";

const ArticlesPage = () => {
  const [selectedArticle, setSelectedArticle] = useState<Blog | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200">
      {/* Sticky Top Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-6 py-4 max-w-6xl">
          <div className="flex items-center justify-between">
            <div>
              <Link to="/" className="text-slate-700 hover:text-[#D4AF37] transition-colors font-medium">
                jelimocharity
              </Link>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/software-engineer" className="text-slate-600 hover:text-[#D4AF37] transition-colors">
                Portfolio
              </Link>
              <Link to="/articles" className="text-[#D4AF37] font-medium">
                Blogs
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Articles Section */}
      <section className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-light text-slate-800 mb-4">Writings & Insights</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Exploring software development, leadership, and lessons learned along the way
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <button
              key={blog.id}
              onClick={() => setSelectedArticle(blog)}
              className="group text-left border border-slate-200 rounded-xl hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 bg-white overflow-hidden h-full flex flex-col"
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
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="px-2 py-1 bg-amber-50 border border-amber-200 rounded text-amber-700 font-medium">
                    {blog.category}
                  </span>
                  <span>•</span>
                  <span>{blog.date}</span>
                </div>
                
                <h3 className="text-xl font-medium text-slate-800 group-hover:text-[#D4AF37] transition-colors leading-tight flex-1">
                  {blog.title}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {blog.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-100 border border-slate-200 rounded-md text-xs text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <span className="text-xs text-slate-500">{blog.readTime}</span>
                  <div className="flex items-center text-[#D4AF37] group-hover:translate-x-1 transition-transform">
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
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-white border-2 border-slate-300 shadow-2xl rounded-xl">
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
              <DialogHeader className="space-y-4 pb-6 border-b border-slate-200">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="px-3 py-1 bg-amber-50 border border-amber-200 rounded text-amber-700 font-medium">
                    {selectedArticle.category}
                  </span>
                  <span>•</span>
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
                <DialogTitle className="text-4xl font-serif text-slate-900 leading-tight pr-8">
                  {selectedArticle.title}
                </DialogTitle>
                <p className="text-slate-600 text-lg leading-relaxed italic">
                  {selectedArticle.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedArticle.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-md text-xs text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </DialogHeader>
              <div className="prose prose-slate max-w-none pt-8 leading-relaxed text-lg">
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => <h2 className="text-3xl font-serif text-slate-900 mt-10 mb-4 border-b border-slate-200 pb-2">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-2xl font-serif text-slate-800 mt-8 mb-3">{children}</h3>,
                    p: ({ children }) => <p className="text-slate-700 mb-5 leading-relaxed text-lg">{children}</p>,
                    strong: ({ children }) => <strong className="text-slate-900 font-semibold">{children}</strong>,
                    ul: ({ children }) => <ul className="list-disc list-outside ml-6 mb-5 space-y-2 text-slate-700">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal list-outside ml-6 mb-5 space-y-2 text-slate-700">{children}</ol>,
                    li: ({ children }) => <li className="text-slate-700 leading-relaxed">{children}</li>,
                    code: ({ children, className }) => {
                      const isInline = !className;
                      return isInline ? (
                        <code className="bg-slate-100 px-2 py-0.5 rounded text-[#D4AF37] text-sm border border-slate-200 font-mono">{children}</code>
                      ) : (
                        <code className="block bg-slate-50 p-4 rounded-lg border border-slate-200 overflow-x-auto text-sm text-slate-800 my-4 font-mono">{children}</code>
                      );
                    },
                    pre: ({ children }) => <pre className="bg-slate-50 p-4 rounded-lg border border-slate-200 overflow-x-auto my-4">{children}</pre>,
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
      <footer className="container mx-auto px-6 py-8 max-w-6xl border-t border-slate-200 mt-12">
        <div className="text-center">
          <p className="text-sm text-slate-500">
            © 2025 Charity Jelimo
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ArticlesPage;