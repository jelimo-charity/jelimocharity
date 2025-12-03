import { Link } from "react-router-dom";
import { Code, Globe, ArrowRight, Mail } from "lucide-react";
import profilePic from "@/assets/cha1.jpg";
import ParticleBackground from "@/components/ParticleBackground";

const Index = () => {
  return (
    <div className="min-h-screen font-sans bg-background flex items-center justify-center py-8 px-4 relative">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="w-full max-w-4xl mx-auto relative z-10">
        <div className="text-center space-y-6 md:space-y-8">
          {/* Main Title */}
          <div className="space-y-2">
            {/* Profile Picture */}
            <div className="flex justify-center pb-2">
              <img 
                src={profilePic} 
                alt="Charity Jelimo Kipruto" 
                className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full object-cover border-2 border-primary shadow-lg"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-accent px-4">
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-4">
            <Link 
              to="/software-engineer" 
              className="group p-6 md:p-8 border border-border rounded-lg hover:border-primary hover:shadow-lg transition-all bg-card"
            >
              <Code className="h-8 w-8 md:h-10 md:w-10 text-secondary mb-3 md:mb-4 mx-auto group-hover:text-primary transition-colors" />
              <h3 className="font-medium text-accent mb-2 text-base md:text-lg">Software Development</h3>
              <p className="text-xs md:text-sm text-secondary mb-3 md:mb-4">Experience, mentorship & career achievements</p>
              <div className="flex items-center justify-center text-secondary group-hover:text-primary transition-colors">
                <span className="text-xs">Explore</span>
                <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link 
              to="/articles" 
              className="group p-6 md:p-8 border border-border rounded-lg hover:border-primary hover:shadow-lg transition-all bg-card"
            >
              <Globe className="h-8 w-8 md:h-10 md:w-10 text-secondary mb-3 md:mb-4 mx-auto group-hover:text-primary transition-colors" />
              <h3 className="font-medium text-accent mb-2 text-base md:text-lg">Writing and Reflections</h3>
              <p className="text-xs md:text-sm text-secondary mb-3 md:mb-4">Stories, Learnings & Perspectives</p>
              <div className="flex items-center justify-center text-secondary group-hover:text-primary transition-colors">
                <span className="text-xs">Explore</span>
                <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <a 
              href="mailto:your.email@example.com" 
              className="group p-6 md:p-8 border border-border rounded-lg hover:border-primary hover:shadow-lg transition-all bg-card"
            >
              <Mail className="h-8 w-8 md:h-10 md:w-10 text-secondary mb-3 md:mb-4 mx-auto group-hover:text-primary transition-colors" />
              <h3 className="font-medium text-accent mb-2 text-base md:text-lg">Connect</h3>
              <p className="text-xs md:text-sm text-secondary mb-3 md:mb-4">Get in touch</p>
              <div className="flex items-center justify-center text-secondary group-hover:text-primary transition-colors">
                <span className="text-xs">Email</span>
                <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 pt-3 text-xs sm:text-sm">
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
              href="mailto:charityjelimo893@gmail.com"
              className="text-secondary hover:text-primary transition-colors"
            >
              Email
            </a>
            <a 
              href="https://medium.com/@charityjelimo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              Medium
            </a>
            <a 
              href="https://charityjelimo.hashnode.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              Hashnode
            </a>
            
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 md:mt-20 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © 2025 Charity Jelimo
          </p>
        </footer>
      </section>
    </div>
  );
};

export default Index;