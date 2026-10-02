import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">PS</h3>
            <p className="text-slate-600">
              Full Stack Developer crafting elegant solutions with clean code and modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-slate-900 mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="text-slate-600 hover:text-indigo-600 transition block">About</a>
              <a href="#skills" className="text-slate-600 hover:text-indigo-600 transition block">Skills</a>
              <a href="#projects" className="text-slate-600 hover:text-indigo-600 transition block">Projects</a>
              <a href="#contact" className="text-slate-600 hover:text-indigo-600 transition block">Contact</a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-slate-900 mb-4">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com/SUSHANTHPVS" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white text-slate-700 border border-gray-300 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition transform hover:scale-110"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/sushanth-p-v-67290a31b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white text-slate-700 border border-gray-300 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition transform hover:scale-110"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:pvsushanthpv@gmail.com"
                className="p-2 rounded-lg bg-white text-slate-700 border border-gray-300 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition transform hover:scale-110"
                title="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-slate-600 text-sm">
            © {currentYear} P.V. Sushanth. All rights reserved.
          </p>
          <a 
            href="https://github.com/SUSHANTHPVS" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-700 text-sm transition"
          >
            View Source on GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
