import { Link } from "react-router-dom";
import { Code, Globe, ArrowRight, Mail } from "lucide-react";
import profilePic from "@/assets/cha1.jpg";

const Index = () => {
  return (
    <div className="h-screen font-sans bg-background flex items-center justify-center overflow-hidden">
      
      {/* Hero Section */}
      <section className="px-6 py-8 w-full max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          {/* Main Title */}
          <div className="space-y-2">
            {/* Profile Picture */}
            <div className="flex justify-center pb-2">
              <img 
                src={profilePic} 
                alt="Charity Jelimo Kipruto" 
                className="w-40 h-40 rounded-full object-cover border-2 border-primary shadow-lg"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-accent">
              Charity Jelimo Kipruto
            </h1>
            {/* <p className="text-lg md:text-xl text-gray-600 font-light">
              Software Engineer <span className="text-gray-300">·</span> Digital Storyteller
            </p> */}
          </div>

          {/* Bio
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-700 leading-relaxed">
              Crafting digital solutions that bridge innovation and real-world impact. 
              Passionate about accessible technology and empowering communities through thoughtful engineering.
            </p>
          </div> */}

          {/* Navigation Links */}
          <div className="grid sm:grid-cols-3 gap-6 pt-4">
            <Link 
              to="/software-engineer" 
              className="group p-8 border border-border rounded-lg hover:border-primary hover:shadow-lg transition-all bg-card"
            >
              <Code className="h-10 w-10 text-secondary mb-4 mx-auto group-hover:text-primary transition-colors" />
              <h3 className="font-medium text-accent mb-2">Software Development</h3>
              <p className="text-sm text-secondary mb-4">Experience, mentorship & career achievements</p>
              <div className="flex items-center justify-center text-secondary group-hover:text-primary transition-colors">
                <span className="text-xs">Explore</span>
                <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link 
              to="/articles" 
              className="group p-8 border border-border rounded-lg hover:border-primary hover:shadow-lg transition-all bg-card"
            >
              <Globe className="h-10 w-10 text-secondary mb-4 mx-auto group-hover:text-primary transition-colors" />
              <h3 className="font-medium text-accent mb-2">Writing and Reflections</h3>
              <p className="text-sm text-secondary mb-4">Stories, Learnings & Perspectives</p>
              <div className="flex items-center justify-center text-secondary group-hover:text-primary transition-colors">
                <span className="text-xs">Explore</span>
                <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <a 
              href="mailto:your.email@example.com" 
              className="group p-8 border border-border rounded-lg hover:border-primary hover:shadow-lg transition-all bg-card"
            >
              <Mail className="h-10 w-10 text-secondary mb-4 mx-auto group-hover:text-primary transition-colors" />
              <h3 className="font-medium text-accent mb-2">Connect</h3>
              <p className="text-sm text-secondary mb-4">Get in touch</p>
              <div className="flex items-center justify-center text-secondary group-hover:text-primary transition-colors">
                <span className="text-xs">Email</span>
                <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-8 pt-3 text-sm">
            <a 
              href="https://github.com/jelimo-charity" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/charity-jelimo/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:hello@jelimocharity.com"
              className="text-secondary hover:text-primary transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Charity Jelimo
          </p>
        </footer>
      </section>
    </div>
  );
};

export default Index;