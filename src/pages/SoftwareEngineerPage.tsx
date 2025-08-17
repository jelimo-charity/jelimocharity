import { Link } from "react-router-dom";
import { ArrowLeft, Code, Mail, Phone, Linkedin, Github, Award, GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
      {/* Header */}
      <header className="container mx-auto px-6 py-12 max-w-4xl">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-foreground">Charity Jelimo Kipruto</h1>
            <p className="text-xl text-muted-foreground">Software Engineer</p>
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
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every line of code I write is a step towards making a difference. I'm a passionate and adaptable software engineer with experience in full-stack development, team collaboration, and building real-world solutions. I thrive in agile environments and enjoy using technology to solve problems and empower communities.
          </p>
        </div>
      </header>

      {/* Skills Section */}
      <section className="container mx-auto px-6 py-12 max-w-4xl">
        <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">Technical Skills</h2>
        <div className="space-y-6">
          {skills.map((skillCategory) => (
            <div key={skillCategory.category} className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">{skillCategory.category}</h3>
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

      {/* Education Section */}
      <section className="container mx-auto px-6 py-12 max-w-4xl">
        <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">Education</h2>
        <div className="flex justify-center">
          <Card className="w-full max-w-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-primary" />
                <div>
                  <CardTitle className="text-xl">{education.degree}</CardTitle>
                  <CardDescription className="text-base font-medium text-primary">
                    {education.institution}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Badge variant="outline">{education.period}</Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container mx-auto px-6 py-12 max-w-4xl">
        <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">Personal Projects</h2>
        <div className="flex justify-center">
          {projects.map((project, index) => (
            <Card key={index} className="w-full max-w-2xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Badge variant="outline" className="text-primary">
                    {project.status}
                  </Badge>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
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

      {/* Certifications Section */}
      <section className="container mx-auto px-6 py-12 max-w-4xl">
        <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">Certifications & Achievements</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <Card key={index} className="transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">{cert}</p>
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