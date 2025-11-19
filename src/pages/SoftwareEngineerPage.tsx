import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Code, Database, Globe, GitBranch, Smartphone, Cloud, Award, BookOpen, Briefcase, Trophy, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SoftwareEngineerPage = () => {
  const [activeSection, setActiveSection] = useState<"experience" | "achievements" | "journey" | null>(null);

  // Portfolio data
  const portfolio = [
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

  const workExperience = [
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

  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3"] },
    { category: "Backend", items: ["Node.js", "Python", "Express", "PostgreSQL", "MongoDB", "REST APIs"] },
    { category: "Mobile", items: ["React Native", "Flutter", "iOS Development", "Android Development"] },
    { category: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Git", "Linux"] },
    { category: "Tools & Frameworks", items: ["VS Code", "Figma", "Supabase", "Firebase", "GraphQL", "Jest"] }
  ];

  // Achievements data
  const mentorshipAchievements = [
    {
      title: "Mentored 50+ Junior Developers",
      description: "Guided aspiring developers through their learning journey, helping them land their first tech jobs.",
      year: "2020 - Present",
      icon: <Award className="h-5 w-5" />
    },
    {
      title: "Tech Community Leader",
      description: "Founded and led local developer meetups with 200+ active members, fostering collaboration and learning.",
      year: "2021 - Present",
      icon: <Award className="h-5 w-5" />
    },
    {
      title: "Open Source Contributor",
      description: "Contributed to major open-source projects with 100+ merged pull requests and active code reviews.",
      year: "2019 - Present",
      icon: <GitBranch className="h-5 w-5" />
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: <Cloud className="h-5 w-5" />
    },
    {
      title: "Meta React Developer Certificate",
      issuer: "Meta",
      year: "2022",
      icon: <Code className="h-5 w-5" />
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      year: "2022",
      icon: <Database className="h-5 w-5" />
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      year: "2021",
      icon: <GitBranch className="h-5 w-5" />
    }
  ];

  const otherWins = [
    {
      title: "Best Innovation Award",
      description: "Recognized for developing a groundbreaking AI-powered solution that improved efficiency by 60%.",
      year: "2023"
    },
    {
      title: "Tech Speaker at 10+ Conferences",
      description: "Delivered talks on modern web development, cloud architecture, and developer productivity.",
      year: "2021 - 2024"
    },
    {
      title: "Published Technical Writer",
      description: "Authored 30+ technical articles reaching 100K+ developers worldwide on platforms like Medium and Dev.to.",
      year: "2020 - Present"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container mx-auto px-6 py-4 max-w-4xl">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-foreground">Software Development</h1>
        </div>
      </header>

      {/* Navigation Links */}
      <nav className="container mx-auto px-6 py-2 max-w-4xl">
        <div className="flex flex-col gap-3">
          <button
            onClick={() => setActiveSection(activeSection === "experience" ? null : "experience")}
            className="text-left text-base text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="font-medium">1.</span> Experience & Work
          </button>
          
          <button
            onClick={() => setActiveSection(activeSection === "achievements" ? null : "achievements")}
            className="text-left text-base text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="font-medium">2.</span> Achievements
          </button>
          
          <button
            onClick={() => setActiveSection(activeSection === "journey" ? null : "journey")}
            className="text-left text-base text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="font-medium">3.</span> Journey & Motivation
          </button>
        </div>
      </nav>

      {/* Content Sections */}
      <main className="container mx-auto px-6 py-4 max-w-4xl">
        {/* Experience & Work Section */}
        {activeSection === "experience" && (
          <div className="space-y-8 animate-in fade-in duration-500">
            {/* Portfolio Section */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Portfolio</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolio.map((project, index) => (
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

            {/* Work Experience Section */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Professional Experience</h2>
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {workExperience.map((job, index) => (
                      <div key={index} className={`pb-6 ${index !== workExperience.length - 1 ? 'border-b border-border' : ''}`}>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
                            <p className="text-base font-medium text-primary">{job.company}</p>
                          </div>
                          <Badge variant="outline" className="w-fit">
                            {job.period}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-4">{job.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Skills Section */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Technical Skills</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skillCategory) => (
                  <div key={skillCategory.category} className="space-y-3">
                    <h3 className="text-base font-medium text-foreground border-b border-border pb-2">
                      {skillCategory.category}
                    </h3>
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
          </div>
        )}

        {/* Achievements Section */}
        {activeSection === "achievements" && (
          <div className="space-y-8 animate-in fade-in duration-500">
            {/* Mentorship Section */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Mentorship & Community Impact</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {mentorshipAchievements.map((achievement, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="text-primary mt-1">{achievement.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-2">{achievement.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>
                          <Badge variant="outline" className="text-xs">{achievement.year}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Certifications Section */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Professional Certifications</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="text-primary mt-1">{cert.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-2">{cert.title}</h3>
                          <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                          <Badge variant="outline" className="text-xs">{cert.year}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Other Wins Section */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Recognition & Other Wins</h2>
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {otherWins.map((win, index) => (
                      <div key={index} className={`pb-4 ${index !== otherWins.length - 1 ? 'border-b border-border' : ''}`}>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                          <h3 className="text-lg font-semibold text-foreground">{win.title}</h3>
                          <Badge variant="outline" className="w-fit text-xs">{win.year}</Badge>
                        </div>
                        <p className="text-muted-foreground">{win.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        )}

        {/* Journey & Motivation Section */}
        {activeSection === "journey" && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">My Journey to Becoming a Developer</h2>
              <Card className="bg-card/50 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <BookOpen className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div className="space-y-3 text-muted-foreground leading-relaxed text-sm">
                      <p className="text-lg">
                        <span className="font-semibold text-foreground">The Beginning:</span> My journey into software engineering began with curiosity and a simple "Hello, World!" program. I still remember the excitement I felt when I saw those two words appear on my screen for the first time. It was magic—the realization that I could make a computer do what I wanted with just a few lines of code.
                      </p>
                      
                      <p>
                        What started as tinkering with HTML and CSS in college quickly evolved into a deep passion for solving complex problems through elegant code. I spent countless nights learning, breaking things, fixing them, and learning some more. Each error message was a puzzle to solve, each successful deployment a victory to celebrate.
                      </p>
                      
                      <p>
                        <span className="font-semibold text-foreground">The Challenges:</span> The path wasn't always smooth. There were moments of doubt, imposter syndrome, and seemingly insurmountable technical challenges. I remember struggling with my first major project, feeling overwhelmed by the complexity. But I learned that persistence, asking for help, and breaking problems into smaller pieces were the keys to overcoming obstacles.
                      </p>
                      
                      <p>
                        <span className="font-semibold text-foreground">The Growth:</span> From building my first responsive website to architecting scalable microservices, every project has been a stepping stone in my continuous learning journey. I discovered that I love not just writing code, but mentoring others, sharing knowledge, and contributing to the developer community.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-6">What Motivates Me</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-3">Making an Impact</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          I'm driven by the opportunity to create digital solutions that make a real difference in people's lives. Whether it's building accessible technology, solving real-world problems, or empowering communities through thoughtful engineering—impact is what keeps me coding.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-3">Continuous Learning</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Technology never stops evolving, and neither do I. Every new framework, language, or concept is an opportunity to grow. I thrive on the challenge of staying current and pushing the boundaries of what I can create.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <BookOpen className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-3">Mentorship & Giving Back</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          I believe in lifting others as I climb. Mentoring junior developers and seeing them succeed brings me immense joy. Every developer I help is someone who will go on to make their own impact, creating a ripple effect of positive change.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Code className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-3">Crafting Elegant Code</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          There's beauty in clean, well-structured code. I believe code should not only work but tell a story—maintainable, purposeful, and elegant. The satisfaction of refactoring messy code into something beautiful never gets old.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-8">
                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Looking Forward</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                      Today, I'm passionate about mentoring junior developers, contributing to open-source projects, and staying at the forefront of emerging technologies. My goal is to continue creating digital solutions that make a meaningful impact on people's lives while inspiring the next generation of developers to follow their own path in tech.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 max-w-4xl mt-3">
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Ready to collaborate on your next project? <Link to="/" className="text-primary hover:underline">Get in touch</Link>
          </p>
        </div>
        <div className="border-t border-border"></div>
      </footer>
    </div>
  );
};

export default SoftwareEngineerPage;