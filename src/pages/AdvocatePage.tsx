import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Eye, Heart, Globe, Shield, Users, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AdvocatePage = () => {
  // Sample articles - in a real app, this would come from your database
  const articles = [
    {
      id: 1,
      title: "Digital Wellness for Families: Creating Healthy Tech Boundaries",
      excerpt: "Learn how to establish balanced screen time and create meaningful digital experiences for your family.",
      publishedAt: "2024-01-15",
      readTime: "5 min read",
      views: 245,
      likes: 18,
      category: "Digital Wellness"
    },
    {
      id: 2,
      title: "Teaching Children Online Safety: A Parent's Guide",
      excerpt: "Essential strategies for keeping children safe online while encouraging digital exploration and learning.",
      publishedAt: "2024-01-10",
      readTime: "7 min read",
      views: 312,
      likes: 27,
      category: "Online Safety"
    },
    {
      id: 3,
      title: "Building Critical Thinking in the Age of Information",
      excerpt: "Help young minds develop the skills to evaluate sources, fact-check information, and think critically about digital content.",
      publishedAt: "2024-01-05",
      readTime: "6 min read",
      views: 189,
      likes: 22,
      category: "Digital Literacy"
    },
    {
      id: 4,
      title: "The Ethics of Technology: Raising Responsible Digital Citizens",
      excerpt: "Exploring how we can guide the next generation to use technology ethically and responsibly.",
      publishedAt: "2023-12-28",
      readTime: "8 min read",
      views: 156,
      likes: 15,
      category: "Digital Ethics"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Digital Wellness": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Online Safety": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      case "Digital Literacy": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Digital Ethics": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-8 max-w-4xl">
          <Link 
            to="/" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Globe className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold text-foreground">Digital Citizenship Advocate</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Empowering families and communities with the knowledge and tools needed to navigate our digital world safely and responsibly.
            </p>
          </div>
        </div>
      </header>

      {/* Mission Section */}
      <section className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Online Safety
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Teaching essential skills for safe internet navigation and protecting personal information online.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Digital Wellness
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Promoting healthy relationships with technology and balanced screen time for families.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Digital Literacy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Building critical thinking skills for evaluating information and understanding digital platforms.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Articles Section */}
      <section className="container mx-auto px-6 py-12 max-w-4xl">
        <h2 className="text-2xl font-semibold text-foreground mb-8">Latest Articles</h2>
        
        <div className="space-y-6">
          {articles.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <Badge className={getCategoryColor(article.category)}>
                      {article.category}
                    </Badge>
                    <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {article.excerpt}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </span>
                    <span>Published {new Date(article.publishedAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {article.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      {article.likes}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 max-w-4xl border-t border-border">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Charity Jelimo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AdvocatePage;