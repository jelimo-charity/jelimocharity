import { Link } from "react-router-dom";
import ParticleBackground from "@/components/ParticleBackground";
import { Code, Globe, ArrowRight, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import cha from "@/assets/cha1.jpg";
import galleryWorkspace from "@/assets/kmbanner.jpg";
import galleryAdvocacy from "@/assets/chao.jpg";
import gallerySpeaking from "@/assets/chasit.jpg";
import galleryTeamwork from "@/assets/gallery-workspace.jpg";

const Index = () => {
  return (
  <div className="min-h-screen relative font-sans text-slate-100" style={{ background: '#0f172a', zIndex: 1 }}>
      <ParticleBackground />
  {/* Header */}
      <header className=" mx-auto px-4 py-4  relative z-20 sticky top-0   border-b border-slate-800 shadow-lg ">
        <div className="flex flex-col items-center text-center gap-2">
          <h1 className="text-5xl md:text-6xl text-cyan-100 font-bold drop-shadow-xl tracking-tight">Charity Jelimo</h1>
          <p className="text-lg md:text-md text-slate-100 font-semibold tracking-wide mb-1">Software Engineer <span className="text-fuchsia-400">|</span> Digital Storyteller</p>
          <nav className="flex mt-1 text-base">
            <a href="#loop" className="px-3 py-1 text-sm hover:bg-fuchsia-900/60 hover:text-fuchsia-300 transition-colors duration-200 shadow">Pulse</a>
            <a href="#pixels" className="px-3 py-1 text-sm  hover:bg-cyan-900/60 hover:text-cyan-300 transition-colors duration-200 shadow">Frames</a>
            <a href="#hats" className="px-3 py-1 text-sm hover:bg-yellow-900/60 hover:text-yellow-200 transition-colors duration-200 shadow">Roles</a>
            <a href="#connect" className="px-3 py-1 text-sm  hover:bg-orange-900/60 hover:text-orange-300 transition-colors duration-200 shadow">Ping</a>
            <a href="#connect" className="px-3 py-1 text-sm  hover:bg-orange-900/60 hover:text-blue-300 transition-colors duration-200 shadow">Pieces</a>

          </nav>
        </div>
      </header>

      {/* Divider */}
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <hr className="border-slate-700" />
      </div>

  {/* Bio Section */}
  <section id="loop" className="flex items-center justify-center w-full scroll-mt-24 relative z-10">
    <div className="w-full  mx-auto bg-slate-900/20 rounded-3xl shadow-2xl p-10 border border-slate-800  flex flex-col items-center">
      <h2 className="text-2xl font-extrabold text-cyan-200 mb-6 text-center tracking-tight drop-shadow-lg">The Human in the Loop</h2>
      <div className="space-y-5 text-center">
        <p className="text-slate-200 text-sm leading-relaxed font-semibold">
          I am a passionate software engineer dedicated to crafting digital solutions that make technology accessible, meaningful, and empowering for everyone. My work bridges the gap between innovation and real-world impact, focusing on building tools and platforms that help people thrive in a digital-first world.
        </p>
        <p className="text-slate-200 text-sm leading-relaxed">
          As a digital citizenship advocate, I am committed to empowering families and children with the knowledge and resources needed to navigate our digital world safely and responsibly. I believe in the power of technology to transform lives, promote digital wellness, and foster ethical practices for the next generation.
        </p>
      </div>
    </div>
  </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative z-10 py-16 px-2 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center tracking-tight text-yellow-300 drop-shadow-lg">
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
            Gallery
          </span>
        </h2>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 [column-fill:_balance]">
          {/* Card 1 */}
          <div className="break-inside-avoid mb-4">
            <div className="bg-white/10 rounded-xl shadow-2xl border border-orange-300/30 p-2 pb-6 relative group transition-transform duration-300 hover:-rotate-1 hover:scale-105"
              style={{ boxShadow: '0 8px 32px 0 rgba(135, 90, 31, 0.27)' }}>
              <img src={gallerySpeaking} alt="Speaking engagement"
                className="w-full h-auto max-h-64 rounded-lg shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-transform duration-300 object-cover"
                style={{ transform: 'perspective(600px) rotateY(-4deg)' }}
              />
              <span className="absolute left-1/2 -translate-x-1/2 bottom-2 text-xs bg-orange-200/80 text-slate-900 px-2 py-1 rounded shadow font-semibold tracking-wide border border-orange-400/60">
                Speaking Engagement
              </span>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="break-inside-avoid mb-4">
            <div className="bg-white/10 rounded-xl shadow-2xl border border-fuchsia-400/30 p-2 pb-6 relative group transition-transform duration-300 hover:rotate-2 hover:scale-105"
              style={{ boxShadow: '0 8px 32px 0 rgba(135, 31, 135, 0.27)' }}>
              <img src={galleryWorkspace} alt="Workspace"
                className="w-full h-auto max-h-84 rounded-lg shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-transform duration-300 object-cover"
                style={{ transform: 'perspective(600px) rotateY(8deg)' }}
              />
              <span className="absolute left-1/2 -translate-x-1/2 bottom-2 text-xs bg-fuchsia-200/80 text-slate-900 px-2 py-1 rounded shadow font-semibold tracking-wide border border-fuchsia-400/60">
                Workspace
              </span>
            </div>
          </div>
          {/* Card 3 */}
          <div className="break-inside-avoid mb-4">
            <div className="bg-white/10 rounded-xl shadow-2xl border border-yellow-300/30 p-2 pb-6 relative group transition-transform duration-300 hover:-rotate-2 hover:scale-105"
              style={{ boxShadow: '0 8px 32px 0 rgba(135, 135, 31, 0.27)' }}>
              <img src={cha} alt="Professional portrait"
                className="w-full h-auto max-h-84 rounded-lg shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-transform duration-300 object-cover"
                style={{ transform: 'perspective(600px) rotateY(-10deg)' }}
              />
              <span className="absolute left-1/2 -translate-x-1/2 bottom-2 text-xs bg-yellow-200/80 text-slate-900 px-2 py-1 rounded shadow font-semibold tracking-wide border border-yellow-400/60">
                Polaroid
              </span>
            </div>
          </div>
          {/* Card 4 */}
          <div className="break-inside-avoid mb-4">
            <div className="bg-white/10 rounded-xl shadow-2xl border border-blue-300/30 p-2 pb-6 relative group transition-transform duration-300 hover:rotate-1 hover:scale-105"
              style={{ boxShadow: '0 8px 32px 0 rgba(31, 135, 135, 0.27)' }}>
              <img src={galleryTeamwork} alt="Teamwork"
                className="w-full h-auto max-h-64 rounded-lg shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-transform duration-300 object-cover"
                style={{ transform: 'perspective(600px) rotateY(5deg)' }}
              />
              <span className="absolute left-1/2 -translate-x-1/2 bottom-2 text-xs bg-cyan-200/80 text-slate-900 px-2 py-1 rounded shadow font-semibold tracking-wide border border-blue-400/60">
                Teamwork
              </span>
            </div>
          </div>
          {/* Card 5
          <div className="break-inside-avoid mb-4 ">
            <div className="bg-white/10 rounded-xl shadow-2xl border border-yellow-300/30 p-2 pb-6 relative group transition-transform duration-300 hover:-rotate-3 hover:scale-105 "
              style={{ boxShadow: '0 8px 32px 0 rgba(135, 135, 31, 0.27)' }}>
              <img src={galleryAdvocacy} alt="Digital citizenship advocacy"
                className="w-full h-auto max-h-64 rounded-lg shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-transform duration-300 object-cover"
                style={{ transform: 'perspective(600px) rotateY(-6deg)' }}
              />
              <span className="absolute left-1/2 -translate-x-1/2 bottom-2 text-xs bg-yellow-200/80 text-slate-900 px-2 py-1 rounded shadow font-semibold tracking-wide border border-yellow-400/60">
                Digital Citizenship Advocacy
              </span>
            </div>
          </div> */}
          
        </div>
  {/* End Gallery Section */}
      </section>

      {/* Role Cards */}
  <section id="hats" className="flex items-center justify-center w-full scroll-mt-24 relative z-10 bg-slate-600/20">
    <div className="w-full  mx-auto  rounded-3xl shadow-2xl p-10 border border-slate-800 ">
      <h2 className="text-2xl font-extrabold text-cyan-200 mb-8 text-center tracking-tight drop-shadow-lg">Wearing Many Hats</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <Link to="/software-engineer" className="block group">
          <Card className="h-full bg-muted/5  from-cyan-900/60 via-slate-900/80 to-fuchsia-900/60 border border-cyan-400/20 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300">
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
          <Card className="h-full bg-muted/5  from-cyan-900/60 via-slate-900/80 to-fuchsia-900/60 border border-cyan-400/20 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-cyan-200 group-hover:text-cyan-300">
                <Globe className="h-6 w-6 text-cyan-400" />
                Digital Storyteller
              </CardTitle>
              <CardDescription className="text-slate-300">
                Promoting responsible technology use
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-200 mb-4">
                Educating families and communities about digital wellness, online safety, and ethical technology practices for the next generation.
              </p>
              <div className="flex items-center text-cyan-200 group-hover:translate-x-1 transition-transform">
                <span className="text-sm">Learn more</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  </section>

      {/* Get In Touch Section */}
      <section id="connect" className="relative z-10 py-16 px-4 scroll-mt-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-cyan-200 mb-4 tracking-tight drop-shadow-lg">
            Get In Touch
          </h2>
          <p className="text-slate-300 mb-8">Let's connect and collaborate</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:charity@example.com"
              className="px-8 py-3 bg-cyan-600/80 hover:bg-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Email
            </a>
            <a
              href="https://github.com/charityjelimo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-slate-700/80 hover:bg-slate-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/charityjelimo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-600/80 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto px-4 py-6 border-t border-slate-800 relative z-10 bg-slate-600/20">
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