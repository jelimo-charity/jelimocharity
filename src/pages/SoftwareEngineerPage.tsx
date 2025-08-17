import { Link } from "react-router-dom";
import { ArrowLeft, Code, Database, Globe, GitBranch, Smartphone, Cloud } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SoftwareEngineerPage = () => {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3"] },
    { category: "Backend", items: ["Node.js", "Python", "Express", "PostgreSQL", "MongoDB", "REST APIs"] },
    { category: "Mobile", items: ["React Native", "Flutter", "iOS Development", "Android Development"] },
    { category: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Git", "Linux"] },
    { category: "Tools & Frameworks", items: ["VS Code", "Figma", "Supabase", "Firebase", "GraphQL", "Jest"] }
  ];

  const experience = [
    {
      title: "Senior Software Engineer",
      company: "Tech Innovation Corp",
      period: "2022 - Present",
      description: "Leading development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.",
      technologies: ["React", "Node.js", "AWS", "PostgreSQL"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd",
      period: "2020 - 2022",
      description: "Built responsive web applications and mobile apps. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      technologies: ["Vue.js", "Python", "MongoDB", "Docker"]
    },
    {
      title: "Frontend Developer",
      company: "StartupX",
      period: "2018 - 2020",
      description: "Developed user-friendly interfaces and implemented modern design systems. Improved application performance by 40%.",
      technologies: ["React", "JavaScript", "SASS", "Webpack"]
    }
  ];

  const projects = [
    {
      title: "E-Learning Platform",
      description: "A comprehensive platform for online education with real-time video conferencing and progress tracking.",
      tech: ["React", "Node.js", "WebRTC", "PostgreSQL"],
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "Mobile Banking App",
      description: "Secure financial application with biometric authentication and real-time transaction processing.",
      tech: ["React Native", "Express", "MongoDB", "JWT"],
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      title: "Cloud Analytics Dashboard",
      description: "Data visualization platform processing millions of records with interactive charts and reports.",
      tech: ["Vue.js", "Python", "AWS", "D3.js"],
      icon: <Database className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container mx-auto px-6 py-8 max-w-4xl">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="flex items-center gap-3">
            <Code className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Software Engineer</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Passionate about creating innovative digital solutions that solve real-world problems and make technology accessible to everyone.
          </p>
        </div>
      </header>

      {/* Skills Section */}
      <section className="container mx-auto px-6 py-12 max-w-4xl">
        <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillCategory) => (
            <Card key={skillCategory.category} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{skillCategory.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-6 py-12 max-w-4xl">
        <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">Professional Experience</h2>
        <div className="space-y-6">
          {experience.map((job, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">{job.title}</CardTitle>
                    <CardDescription className="text-base font-medium text-primary">
                      {job.company}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    {job.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container mx-auto px-6 py-12 max-w-4xl">
        <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-primary">{project.icon}</div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
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
            Ready to collaborate on your next project? <Link to="/contact" className="text-primary hover:underline">Get in touch</Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SoftwareEngineerPage;