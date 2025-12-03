import { Link } from "react-router-dom";
import { useState } from "react";
import chao from "@/assets/chao.jpg";
import chakamsit from "@/assets/chakamsit.jpg";
import cha from "@/assets/cha.jpg";
import dsc1 from "@/assets/DSC_2757.jpg";
import dsc2 from "@/assets/DSC_7285.jpg";

const SoftwareEngineerPage = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const renderContent = () => {
    switch (activeTab) {
      case "experience":
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-light text-accent mb-8 text-center">Experience & Work</h2>
            
            <div className="space-y-12 max-w-4xl mx-auto">
              {/* GRIFFIN Global Technologies - Associate Engineer - LEFT */}
              <div className="flex">
                <div className="w-full md:w-10/12">
                  <div className="border-l-2 border-primary pl-6 space-y-3">
                    <div>
                      <h3 className="text-xl font-medium text-accent">Associate Engineer</h3>
                      <p className="text-primary font-medium">GRIFFIN Global Technologies, LLC</p>
                      <p className="text-sm text-muted-foreground">Mar 2025 - Present · 1 year 1 mos · Full-time · Hybrid</p>
                    </div>
                    <ul className="text-secondary space-y-2 text-sm leading-relaxed">
                      <li>• Participated in the full software development lifecycle, from requirements gathering to deployment and maintenance.</li>
                      <li>• Collaborated with senior engineers and stakeholders to deliver high-quality solutions under tight deadlines.</li>
                      <li>• Contributed to testing efforts, code reviews, and documentation to uphold engineering best practices.</li>
                      <li>• Supported the integration of new technologies and tools to improve system performance and team productivity.</li>
                    </ul>
                    {/* <p className="text-xs text-muted-foreground italic">Docker Products, Microsoft Power BI and +15 skills</p> */}
                  </div>
                </div>
              </div>

              {/* GRIFFIN Global Technologies - Engineer Intern - RIGHT */}
              <div className="flex justify-end">
                <div className="w-full md:w-10/12">
                  <div className="border-r-2 border-primary pr-6 space-y-3 text-right">
                    <div>
                      <h3 className="text-xl font-medium text-accent">Engineer Intern</h3>
                      <p className="text-primary font-medium">GRIFFIN Global Technologies, LLC</p>
                      <p className="text-sm text-muted-foreground">Dec 2024 - Feb 2025 · 3 mos · Internship · Nyeri, Kenya · On-site</p>
                    </div>
                    {/* <p className="text-xs text-muted-foreground italic">Node.js, Git and +8 skills</p> */}
                  </div>
                </div>
              </div>

              {/* TEACH2GIVE - LEFT */}
              <div className="flex">
                <div className="w-full md:w-10/12">
                  <div className="border-l-2 border-primary pl-6 space-y-3">
                    <div>
                      <h3 className="text-xl font-medium text-accent">Full-stack Developer</h3>
                      <p className="text-primary font-medium">TEACH2GIVE</p>
                      <p className="text-sm text-muted-foreground">May 2024 - Jul 2024 · 3 mos · Apprenticeship · Nyeri, Kenya · On-site</p>
                    </div>
                    <p className="text-secondary text-sm leading-relaxed">
                      Participated in a 3-month full-stack training program where I enhanced my expertise in React, TypeScript, PostgreSQL, and Hono(Node.js). Successfully developed a car rental application, applying my skills in creating scalable solutions and improving my technical and soft skills.
                    </p>
                    {/* <p className="text-xs text-muted-foreground italic">Drizzle ORM, Node.js and +11 skills</p> */}
                  </div>
                </div>
              </div>

              {/* THE Jitu - RIGHT */}
              <div className="flex justify-end">
                <div className="w-full md:w-10/12">
                  <div className="border-r-2 border-primary pr-6 space-y-3 text-right">
                    <div>
                      <h3 className="text-xl font-medium text-accent">Full Stack Developer</h3>
                      <p className="text-primary font-medium">THE Jitu</p>
                      <p className="text-sm text-muted-foreground">May 2023 - Jul 2023 · 3 mos · Apprenticeship · On-site</p>
                    </div>
                    {/* <p className="text-xs text-muted-foreground italic">Teamwork, Node.js and +12 skills</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "achievements":
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-light text-accent mb-8 text-center">Achievements & Leadership</h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Microsoft Learn Student Ambassador */}
              <div className="bg-card border border-border rounded-lg p-6 space-y-4 hover:border-primary transition-all">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-accent">Beta Microsoft Learn Student Ambassador</h3>
                  <p className="text-primary text-sm font-medium">Microsoft</p>
                  <p className="text-xs text-muted-foreground">Apr 2023 - Sep 2024 · 1 yr 6 mos</p>
                </div>
                <p className="text-secondary text-sm leading-relaxed">
                  Engaged with the tech community through workshops, webinars, and study groups, promoting Microsoft technologies and fostering continuous learning. Led and contributed to technical projects and hackathons, mentored students, and organized tech events to enhance participants' skills. Strengthened leadership, communication, and project management abilities while making a positive impact on the community.
                </p>
              </div>

              {/* KamiLimu Peer Mentor */}
              <div className="bg-card border border-border rounded-lg p-6 space-y-4 hover:border-primary transition-all">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-accent">Peer Mentor</h3>
                  <p className="text-primary text-sm font-medium">KamiLimu</p>
                  <p className="text-xs text-muted-foreground">Mar 2025 - Oct 2025 · 8 mos</p>
                  <p className="text-secondary text-sm leading-relaxed">
                 As a Peer Mentor at KamiLimu, I had the privilege of guiding three students through their intensive 8-month learning and professional development journey. I supported them in strengthening their technical skills, refining their personal branding, and navigating opportunities within the tech ecosystem. Throughout the mentorship, I provided consistent feedback, accountability, and career guidance—helping each mentee identify their strengths and grow with confidence. This experience strengthened my leadership, communication, and coaching abilities while allowing me to give back to a community that has significantly shaped my own growth.
                </p>
                </div>
              </div>

              {/* KamiLimu Mentee */}
              <div className="bg-card border border-border rounded-lg p-6 space-y-4 hover:border-primary transition-all">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-accent">KamiLimu Mentee</h3>
                  <p className="text-primary text-sm font-medium">KamiLimu</p>
                  <p className="text-xs text-muted-foreground">Sep 2021 - May 2022 · 9 mos · Nairobi County, Kenya · Hybrid</p>
                </div>
                <p className="text-secondary text-sm leading-relaxed">
                  Completed the KamiLimu premier 8-month program designed to enhance the global competitiveness of tech-aligned university students. Gained advanced skills in personal and professional development, innovation, ICT, and community engagement. The program provided a comprehensive approach to fostering growth and leadership in the tech industry.
                </p>
              </div>

              {/* Secretary General */}
              <div className="bg-card border border-border rounded-lg p-6 space-y-4 hover:border-primary transition-all">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-accent">Secretary General</h3>
                  <p className="text-primary text-sm font-medium">Computer Society Of Kirinyaga</p>
                  <p className="text-xs text-muted-foreground">Sep 2022 - Apr 2024 · 1 yr 8 mos · Science and Technology</p>
                </div>
                <p className="text-secondary text-sm leading-relaxed">
                  Managed the administrative and organizational functions of the Computer Society. Coordinated meetings, oversaw event planning, and facilitated communication within the society. Played a key role in organizing workshops, tech talks, and competitions, contributing to the development and engagement of the university's tech community. Championed initiatives for women in tech by founding a community to encourage and support female students in participating in tech activities and events.
                </p>
              </div>
            </div>

            {/* Education Section */}
            <div className="mt-12 max-w-5xl mx-auto">
              <h3 className="text-2xl font-light text-accent mb-6 text-center">Education</h3>
              <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                <div>
                  <h4 className="text-xl font-medium text-accent">Bachelor of Science in Software Engineering</h4>
                  <p className="text-primary font-medium">Kirinyaga University</p>
                  <p className="text-sm text-muted-foreground">Sep 2020 - Sep 2024</p>
                </div>
                <p className="text-secondary text-sm leading-relaxed">
                  Pursued a comprehensive education in Software Engineering, focusing on software development, system design, and project management. Gained hands-on experience through practical projects and coursework.
                </p>
                {/* <p className="text-xs text-muted-foreground italic">
                  Activities: Secretary General at Computer Society of Kirinyaga University and Microsoft Learn Student Ambassador
                </p> */}
              </div>
            </div>
          </div>
        );
      case "skills":
        return (
          <div className="space-y-10">
            <h2 className="text-3xl font-light text-accent mb-8 text-center">Skills & Technologies</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Technical Skills Column */}
              <div className="space-y-8">
                <div className="bg-card border border-border rounded-lg p-6 space-y-6">
                  <h3 className="text-xl font-medium text-primary border-b border-border pb-3">Technical Skills</h3>
                  
                  <div className="space-y-5">
                    <div>
                      <p className="text-sm text-accent mb-2 font-medium">Programming Languages</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">C#</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">TypeScript</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">JavaScript</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Python</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-accent mb-2 font-medium">Frameworks & Libraries</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">ASP.NET Core</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">React.js</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Node.js</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Express.js</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">AngularJS</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Redux.js</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-accent mb-2 font-medium">Databases & ORMs</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">PostgreSQL</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Microsoft SQL Server</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Drizzle ORM</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-accent mb-2 font-medium">Cloud & DevOps</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Microsoft Azure</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Azure DevOps</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Docker</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Git</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">GitHub</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-accent mb-2 font-medium">Tools & Platforms</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Power BI</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Power Automate</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Jira</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Confluence</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 space-y-6">
                  <h3 className="text-xl font-medium text-primary border-b border-border pb-3">Specialized Skills</h3>
                  
                  <div className="space-y-5">
                    <div>
                      <p className="text-sm text-accent mb-2 font-medium">Development Practices</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Agile</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Scrum</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">API Development</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Web Development</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-accent mb-2 font-medium">AI & Data Science</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Machine Learning</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">NLP</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Soft Skills Column */}
              <div className="space-y-8">
                <div className="bg-card border border-border rounded-lg p-6 space-y-6">
                  <h3 className="text-xl font-medium text-primary border-b border-border pb-3">Leadership & Soft Skills</h3>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'Communication',
                      'Leadership',
                      'Project Management',
                      'Teamwork',
                      'Mentoring',
                      'Public Speaking',
                      'Technical Writing',
                      'Problem Solving'
                    ].map((skill) => (
                      <div key={skill} className="flex items-center gap-2 px-3 py-2 bg-background border border-primary/20 rounded-md hover:border-primary/50 transition-colors">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-secondary">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 space-y-6">
                  <h3 className="text-xl font-medium text-primary border-b border-border pb-3">Professional Development</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm text-accent font-medium">Community Engagement</p>
                        <p className="text-xs text-muted-foreground">Active participation in tech communities</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm text-accent font-medium">Personal Branding</p>
                        <p className="text-xs text-muted-foreground">Building professional online presence</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm text-accent font-medium">Innovation & Creativity</p>
                        <p className="text-xs text-muted-foreground">Design thinking and problem-solving</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm text-accent font-medium">Continuous Learning</p>
                        <p className="text-xs text-muted-foreground">Always exploring new technologies</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                  <h3 className="text-xl font-medium text-primary border-b border-border pb-3">Additional Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Interview Prep</span>
                    <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Resume Writing</span>
                    <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Pitching Ideas</span>
                    <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Entrepreneurship</span>
                    <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Mobile Apps</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "journey":
        return (
          <div className="space-y-12">
            <h2 className="text-3xl font-light text-accent mb-8 text-center">My Story & Journey</h2>
            
            {/* Story Section */}
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-card border border-primary/30 rounded-lg p-8 space-y-4">
                <p className="text-secondary text-base leading-relaxed">
                  <span className="text-primary font-medium text-lg">Are you a lover? Are you ready to pay the price for what you really love?</span>
                </p>
                
                <p className="text-secondary text-base leading-relaxed">
                  I am a tech lover. I never interacted with computers until secondary school, where Computer Studies sparked my interest. But as a village girl, I was told Agriculture was the better fit—that I couldn't compete with girls who had grown up with technology. I attended Agricultural class for one week before making the bold decision to pursue what I truly loved.
                </p>

                <p className="text-secondary text-base leading-relaxed">
                  In form three, a 'Women In Technology' program by Safaricom women changed everything. That day, I decided I would pursue software engineering. I completed secondary education with an A grade in Computer Studies.
                </p>

                <p className="text-secondary text-base leading-relaxed">
                  Sometimes we drift. When KUCCPS selections came, I was told to choose a "marketable course." I selected civil engineering and nursing, but destiny had other plans. The second selection brought me to Computer Science, which I later transferred to Software Engineering.
                </p>

                <p className="text-secondary text-base leading-relaxed">
                  Now, a year into my professional career, I'm still deeply in love with technology. The journey from a curious student to a working engineer has been one of continuous growth, discovery, and transformation. I've learned that bugs and errors are not disappointments—they're puzzles waiting to be solved. From being mentored through KamiLimu's 8-month program to being challenged through Microsoft Game of Learners, and now navigating real-world engineering challenges at GRIFFIN, each experience has shaped me into who I am today.
                </p>

                <p className="text-secondary text-base leading-relaxed">
                  What began as a small win has accumulated into something much more. Through the confusion, difficulties, and debugging sessions, I found excitement, hope, and fun. <span className="text-primary font-medium">I found what I love.</span>
                </p>

                <p className="text-secondary text-base leading-relaxed italic">
                  Love is not hasty, but patient. This is my journey—the good, the bad, and the beautiful—all coming together to make sense.
                </p>
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-light text-accent mb-6 text-center">Moments Along The Way</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="overflow-hidden rounded-lg border border-border hover:border-primary transition-all">
                  <img src={chao} alt="Journey moment" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg border border-border hover:border-primary transition-all">
                  <img src={chakamsit} alt="Journey moment" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg border border-border hover:border-primary transition-all">
                  <img src={cha} alt="Journey moment" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg border border-border hover:border-primary transition-all">
                  <img src={dsc1} alt="Journey moment" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="overflow-hidden rounded-lg border border-border hover:border-primary transition-all">
                  <img src={dsc2} alt="Journey moment" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
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
              <Link to="/software-engineer" className="text-primary font-medium">
                Portfolio
              </Link>
              <Link to="/articles" className="text-secondary hover:text-primary transition-colors">
                Blogs
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <nav className="mt-8">
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
              onClick={() => setActiveTab("skills")}
              className={`py-3 px-1 border-b-2 transition-colors ${
                activeTab === "skills"
                  ? "border-primary text-primary font-medium"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Skills
            </button>
            
            <button
              onClick={() => setActiveTab("journey")}
              className={`py-3 px-1 border-b-2 transition-colors ${
                activeTab === "journey"
                  ? "border-primary text-primary font-medium"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              My Story & Journey
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
