import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-indigo-600 to-pink-600 p-1 glow">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-5xl font-bold text-indigo-600">
              PS
            </div>
          </div>
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold mb-6 gradient-text leading-tight">
          P.V. SUSHANTH
        </h1>

        <p className="text-xl sm:text-2xl text-slate-600 mb-4">
          Full Stack Developer & Computer Science Student
        </p>

        <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
          Crafting elegant solutions through clean code, modern technologies, and collaborative teamwork. Passionate about building efficient, user-centric applications.
        </p>

        {/* Social Links */}
        <div className="flex gap-6 justify-center mb-12">
          <a href="https://github.com/SUSHANTHPVS" target="_blank" rel="noopener noreferrer" 
             className="p-3 rounded-lg bg-gray-100 text-slate-700 hover:bg-indigo-600 hover:text-white transition transform hover:scale-110">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/sushanth-p-v-67290a31b" target="_blank" rel="noopener noreferrer" 
             className="p-3 rounded-lg bg-gray-100 text-slate-700 hover:bg-indigo-600 hover:text-white transition transform hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="mailto:pvsushanthpv@gmail.com" 
             className="p-3 rounded-lg bg-gray-100 text-slate-700 hover:bg-indigo-600 hover:text-white transition transform hover:scale-110">
            <Mail size={24} />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-secondary">
            Get In Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce mt-12">
          <ChevronDown size={32} className="mx-auto text-indigo-600" />
        </div>
      </div>
    </section>
  )
}
