import { Link } from "react-router-dom";
import { Code, Globe, ArrowRight, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen font-sans bg-white flex items-center justify-center">
      
      {/* Hero Section */}
      <section className="px-6 py-20 w-full max-w-4xl mx-auto">
        <div className="text-center space-y-12">
          {/* Main Title */}
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 text-semibold">
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
          <div className="grid sm:grid-cols-3 gap-6 pt-8">
            <Link 
              to="/software-engineer" 
              className="group p-8 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <Code className="h-10 w-10 text-gray-400 mb-4 mx-auto group-hover:text-gray-600 transition-colors" />
              <h3 className="font-medium text-gray-900 mb-2">Software Development</h3>
              <p className="text-sm text-gray-600 mb-4">Experience, mentorship & career achievements</p>
              <div className="flex items-center justify-center text-gray-400 group-hover:text-gray-600 transition-colors">
                <span className="text-xs">Explore</span>
                <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link 
              to="/articles" 
              className="group p-8 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <Globe className="h-10 w-10 text-gray-400 mb-4 mx-auto group-hover:text-gray-600 transition-colors" />
              <h3 className="font-medium text-gray-900 mb-2">Writing and Reflections</h3>
              <p className="text-sm text-gray-600 mb-4">Stories, Learnings & Perspectives</p>
              <div className="flex items-center justify-center text-gray-400 group-hover:text-gray-600 transition-colors">
                <span className="text-xs">Explore</span>
                <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <a 
              href="mailto:your.email@example.com" 
              className="group p-8 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <Mail className="h-10 w-10 text-gray-400 mb-4 mx-auto group-hover:text-gray-600 transition-colors" />
              <h3 className="font-medium text-gray-900 mb-2">Connect</h3>
              <p className="text-sm text-gray-600 mb-4">Get in touch</p>
              <div className="flex items-center justify-center text-gray-400 group-hover:text-gray-600 transition-colors">
                <span className="text-xs">Email</span>
                <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center">
          <p className="text-sm text-gray-400">
            © 2024 Charity Jelimo
          </p>
        </footer>
      </section>
    </div>
  );
};

export default Index;