import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-white bg-opacity-95 backdrop-blur z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={() => scrollToSection('hero')} className="text-2xl font-bold gradient-text">
              PS
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-indigo-600 transition px-3 py-2 text-sm font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-slate-700 hover:text-indigo-600 transition px-3 py-2 text-sm font-medium">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-700 hover:text-indigo-600 transition px-3 py-2 text-sm font-medium">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn-primary text-sm">
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-slate-700 hover:text-indigo-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-gray-100 rounded">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-gray-100 rounded">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-gray-100 rounded">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-gray-100 rounded">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
