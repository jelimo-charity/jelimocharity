import { Link } from "react-router-dom";
import ParticleBackground from "@/components/ParticleBackground";
import { Code, Globe, ArrowRight, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import galleryPortrait from "@/assets/gallery-portrait.jpg";
import galleryWorkspace from "@/assets/gallery-workspace.jpg";
import galleryAdvocacy from "@/assets/gallery-advocacy.jpg";
import gallerySpeaking from "@/assets/gallery-speaking.jpg";
import galleryTeamwork from "@/assets/gallery-teamwork.jpg";

const Index = () => {
  return (
  <div className="min-h-screen relative font-sans text-slate-100" style={{ background: '#0f172a', zIndex: 1 }}>
      <ParticleBackground />
  {/* Header */}
      <header className="container mx-auto px-4 py-4 max-w-4xl relative z-20 sticky top-0 backdrop-blur-xl bg-[#0f172a]/70 border-b border-slate-800 shadow-lg rounded-b-2xl">
        <div className="flex flex-col items-center text-center gap-2">
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-xl tracking-tight animate-pulse">Charity Jelimo</h1>
          <p className="text-lg md:text-xl text-slate-200 font-semibold tracking-wide mb-1">Software Engineer <span className="text-fuchsia-400">|</span> Digital Citizenship Advocate</p>
          <nav className="flex gap-8 mt-1 text-base font-bold">
            <a href="#loop" className="px-3 py-1 rounded-lg bg-slate-800/60 hover:bg-fuchsia-900/60 hover:text-fuchsia-300 transition-colors duration-200 shadow">Pulse</a>
            <a href="#pixels" className="px-3 py-1 rounded-lg bg-slate-800/60 hover:bg-cyan-900/60 hover:text-cyan-300 transition-colors duration-200 shadow">Frames</a>
            <a href="#hats" className="px-3 py-1 rounded-lg bg-slate-800/60 hover:bg-yellow-900/60 hover:text-yellow-200 transition-colors duration-200 shadow">Roles</a>
            <a href="#connect" className="px-3 py-1 rounded-lg bg-slate-800/60 hover:bg-orange-900/60 hover:text-orange-300 transition-colors duration-200 shadow">Ping</a>
          </nav>
        </div>
      </header>

      {/* Divider */}
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <hr className="border-slate-700" />
      </div>

  {/* Bio Section */}
  <section id="loop" className="flex items-center justify-center w-full scroll-mt-24 relative z-10">
    <div className="w-full max-w-3xl mx-auto bg-slate-900/70 rounded-3xl shadow-2xl p-10 border border-slate-800 backdrop-blur-xl flex flex-col items-center">
      <h2 className="text-4xl font-extrabold text-cyan-200 mb-6 text-center tracking-tight drop-shadow-lg">The Human in the Loop</h2>
      <div className="space-y-5 text-center">
        <p className="text-slate-200 text-lg leading-relaxed font-medium">
          I am a passionate software engineer dedicated to crafting digital solutions that make technology accessible, meaningful, and empowering for everyone. My work bridges the gap between innovation and real-world impact, focusing on building tools and platforms that help people thrive in a digital-first world.
        </p>
        <p className="text-slate-300 text-base leading-relaxed">
          As a digital citizenship advocate, I am committed to empowering families and children with the knowledge and resources needed to navigate our digital world safely and responsibly. I believe in the power of technology to transform lives, promote digital wellness, and foster ethical practices for the next generation.
        </p>
      </div>
    </div>
  </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-6 py-16 max-w-6xl">
        <h2 className="text-2xl font-semibold text-foreground mb-12 text-center">Gallery</h2>
        <div className="bg-muted/30 rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 items-center justify-items-center">
            <div className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64">
              <img 
                src={galleryPortrait} 
                alt="Professional portrait" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="w-36 h-36 md:w-48 md:h-48 lg:w-60 lg:h-60 mt-8 md:mt-12">
              <img 
                src={galleryWorkspace} 
                alt="Workspace" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64">
              <img 
                src={galleryAdvocacy} 
                alt="Digital citizenship advocacy" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="w-36 h-36 md:w-48 md:h-48 lg:w-60 lg:h-60 -mt-4 md:-mt-6">
              <img 
                src={galleryTeamwork} 
                alt="Team collaboration" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 mt-4 md:mt-6">
              <img 
                src={gallerySpeaking} 
                alt="Speaking at conference" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Role Cards */}
  <section id="hats" className="flex items-center justify-center w-full scroll-mt-24 relative z-10">
    <div className="w-full max-w-4xl mx-auto bg-slate-900/80 rounded-3xl shadow-2xl p-10 border border-slate-800 backdrop-blur-xl">
      <h2 className="text-4xl font-extrabold text-yellow-200 mb-8 text-center tracking-tight drop-shadow-lg">Wearing Many Hats</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <Link to="/software-engineer" className="block group">
          <Card className="h-full bg-gradient-to-br from-cyan-900/60 via-slate-900/80 to-fuchsia-900/60 border border-cyan-400/20 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-cyan-200 group-hover:text-cyan-300">
                <Code className="h-6 w-6 text-cyan-400" />
                Software Engineer
              </CardTitle>
              <CardDescription className="text-slate-300">
                Building innovative solutions and applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-200 mb-4">
                Experienced in developing scalable web applications, mobile solutions, and digital platforms that solve real-world problems.
              </p>
              <div className="flex items-center text-cyan-300 group-hover:translate-x-1 transition-transform">
                <span className="text-sm">Learn more</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link to="/advocate" className="block group">
          <Card className="h-full bg-gradient-to-br from-yellow-900/60 via-slate-900/80 to-orange-900/60 border border-yellow-300/20 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-200 group-hover:text-yellow-100">
                <Globe className="h-6 w-6 text-yellow-300" />
                Digital Citizenship Advocate
              </CardTitle>
              <CardDescription className="text-slate-300">
                Promoting responsible technology use
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-200 mb-4">
                Educating families and communities about digital wellness, online safety, and ethical technology practices for the next generation.
              </p>
              <div className="flex items-center text-yellow-200 group-hover:translate-x-1 transition-transform">
                <span className="text-sm">Learn more</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  </section>

      {/* Footer */}
      <footer id="connect" className="container mx-auto px-4 py-6 max-w-4xl border-t border-slate-700 scroll-mt-24 relative z-10">
        <div className="text-center">
          <p className="text-xs text-slate-400">
            © 2024 Charity Jelimo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;