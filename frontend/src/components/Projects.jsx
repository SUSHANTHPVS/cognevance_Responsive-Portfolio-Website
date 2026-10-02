import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "One Wish Willow",
      description: "A unified full-stack platform to centralize productivity, wellness, and AI-powered assistance.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
      features: [
        "Secure JWT authentication",
        "20+ REST APIs",
        "AI integration",
        "Calendar & fitness tracker",
        "Weather & translation services",
        "Responsive UI"
      ],
      liveLink: "https://one-wish-willow-al4k-hazel.vercel.app",
      highlights: "Production-ready full-stack app with modern architecture"
    },
    {
      title: "Hackathon Management Website",
      description: "Centralized platform to streamline participant access to hackathon information, themes, and resources.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Vercel", "Render"],
      features: [
        "Responsive frontend interfaces",
        "Event information management",
        "Complex problem statements",
        "Registration system",
        "Resource organization",
        "User-friendly dashboard"
      ],
      liveLink: "https://hack-fusion2026.vercel.app/",
      highlights: "Improved accessibility & participant experience"
    },
    {
      title: "Yaaryatra - Travel Partner",
      description: "Interactive online itinerary builder allowing users to mix-and-match excursions for travel planning.",
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
      features: [
        "Interactive itinerary builder",
        "Responsive design",
        "Easy booking interface",
        "Excursion management",
        "Mobile-friendly layout",
        "Streamlined user journey"
      ],
      liveLink: "#",
      highlights: "Seamless planning to reservation workflow"
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Projects</h2>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="card group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
              </div>

              {/* Highlights */}
              <div className="bg-indigo-50 border-l-4 border-indigo-600 p-3 mb-4 rounded">
                <p className="text-sm text-indigo-700 font-medium">{project.highlights}</p>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-indigo-600 mb-2">Key Features:</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-gray-100 text-slate-700 rounded text-xs font-medium border border-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-gray-200">
                {project.liveLink !== "#" && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 btn-primary text-sm"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                <a 
                  href="https://github.com/SUSHANTHPVS" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 btn-secondary text-sm"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/SUSHANTHPVS" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-primary"
          >
            View More Projects on GitHub
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
