import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone, Linkedin, Github, Award, GraduationCap, MapPin, Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const SoftwareEngineerPage = () => {
  const skills = [
    { category: "Frontend", items: ["JavaScript", "React.js", "Angular", "HTML", "CSS"] },
    { category: "Backend", items: ["Express.js (Node.js)", ".NET (C#)", "Hono", "SQL", "PostgreSQL"] },
    { category: "Cloud & DevOps", items: ["Azure", "Docker", "Git", "GitHub"] },
    { category: "AI & Analytics", items: ["OpenAI", "Google Colab", "Power BI", "Power Automate"] },
    { category: "Methodologies", items: ["Agile", "Scrum", "Jira", "Confluence"] }
  ];

  const experience = [
    {
      title: "Full-stack Engineer",
      company: "Griffin Global Technologies",
      period: "Dec 2024 – Present",
      description: "Built and maintained time entry system, customer portal and resource utilization management full-stack systems. Collaborated with Agile team across full SDLC from requirements gathering to deployment.",
      technologies: ["TypeScript", "React", "Angular", ".NET (C#)", "Node.js", "SQL", "PostgreSQL"]
    },
    {
      title: "Software Developer",
      company: "The Jitu",
      period: "May 2023 – Dec 2024",
      description: "Developed task management and car rental system from frontend to backend. Practiced clean code, version control, QA and Agile practices in remote development environment.",
      technologies: ["JavaScript", "React", "Node.js", "Git", "Agile"]
    }
  ];

  const education = {
    degree: "BSC Software Engineering",
    institution: "Kirinyaga University",
    period: "2020 - 2024"
  };

  const projects = [
    {
      title: "LumiBytes",
      description: "A mission-driven platform designed to raise responsible digital citizens by equipping children with essential knowledge on digital safety, ethics, and technology for good while guiding parents with tools and insights.",
      tech: ["React", "Node.js", "PostgreSQL", "OpenAI"],
      status: "Live",
      link: "#"
    }
  ];

  const certifications = [
    "Microsoft Imagine Cup 2023 EMEA World Finals Online Semifinals",
    "KamiLimu Cohort 6.0 Mentee",
    "Beta Microsoft Learn Student Ambassador"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 z-50 p-6">
        <Link 
          to="/" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-foreground leading-tight">
              IM CHARITY<br />
              <span className="text-primary">JELIMO.</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-2 text-lg md:text-xl">
              <span className="text-muted-foreground">Im a</span>
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded font-medium">
                software engineer
              </span>
              <span className="text-muted-foreground">from Kenya.</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>Charityjelimo893@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(+254) 743508413</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </div>
            <div className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </div>
          </div>

          <Button variant="outline" className="mt-8">
            <Download className="h-4 w-4 mr-2" />
            Download CV
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
              <div className="w-16 h-1 bg-primary mb-8"></div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Every line of code I write is a step towards making a difference. I'm a passionate and adaptable software engineer with experience in full-stack development, team collaboration, and building real-world solutions. I thrive in agile environments and enjoy using technology to solve problems and empower communities.
              </p>
              
              {/* Skills */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Technical Skills</h3>
                {skills.map((skillCategory) => (
                  <div key={skillCategory.category} className="space-y-3">
                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                      {skillCategory.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillCategory.items.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              {/* Education */}
              <div className="bg-card p-6 rounded-lg border">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold">Education</h3>
                </div>
                <h4 className="font-medium">{education.degree}</h4>
                <p className="text-primary font-medium">{education.institution}</p>
                <p className="text-sm text-muted-foreground">{education.period}</p>
              </div>

              {/* Featured Project */}
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-4">Featured Project</h3>
                <h4 className="font-medium text-primary mb-2">{projects[0].title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{projects[0].description}</p>
                <div className="flex flex-wrap gap-2">
                  {projects[0].tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Experience</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-16"></div>
          
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="border-l-2 border-muted pl-8 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="space-y-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                    <div>
                      <h3 className="text-2xl font-semibold">{job.title}</h3>
                      <p className="text-lg text-primary font-medium">{job.company}</p>
                    </div>
                    <Badge variant="outline" className="w-fit text-sm">
                      {job.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Certifications Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Achievements</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-16"></div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground leading-relaxed">{cert}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to collaborate on your next project? I'm always excited to take on new challenges and create innovative solutions.
          </p>
          <Button size="lg" className="font-medium">
            <Mail className="h-4 w-4 mr-2" />
            Get In Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SoftwareEngineerPage;