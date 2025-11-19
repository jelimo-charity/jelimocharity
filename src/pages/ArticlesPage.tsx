import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Shield, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";

const ArticlesPage = () => {
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  const { data: articles, isLoading } = useQuery({
    queryKey: ['articles'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-muted-foreground">Loading articles...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <header className="container mx-auto px-6 py-8 max-w-6xl border-b border-gray-200">
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-3xl font-light text-gray-900">Charity Jelimo</h1>
          <nav className="flex items-center space-x-6 text-sm">
            <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <span className="text-gray-900 font-medium">Articles</span>
          </nav>
        </div>
      </header>

      {/* Articles Section */}
      <section className="container mx-auto px-6 py-12 max-w-6xl">
        <h2 className="text-2xl font-light text-gray-900 mb-8">Recent Articles</h2>
        
        {articles && articles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <button
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="group text-left p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(article.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-400 group-hover:text-gray-600 transition-colors pt-2">
                    <span className="text-xs">Read more</span>
                    <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">No articles published yet.</p>
          </div>
        )}
      </section>

      {/* Article Modal */}
      <Dialog open={!!selectedArticle} onOpenChange={() => setSelectedArticle(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          {selectedArticle && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-light text-gray-900 pr-8">
                  {selectedArticle.title}
                </DialogTitle>
                <div className="flex items-center gap-4 text-sm text-gray-500 pt-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(selectedArticle.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              </DialogHeader>
              <div className="prose prose-gray max-w-none mt-6">
                <div 
                  className="text-gray-700 leading-relaxed whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 max-w-6xl border-t border-gray-200">
        <div className="text-center">
          <p className="text-sm text-gray-400">
            © 2024 Charity Jelimo
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ArticlesPage;