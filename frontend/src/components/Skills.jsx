import { Code2, Database, Cloud, Zap } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Languages & Frameworks",
      skills: ["Java", "Node.js", "React.js", "JSP", "HTML/CSS", "JavaScript"]
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MongoDB", "MySQL", "SQL"]
    },
    {
      icon: Zap,
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Leadership", "Communication"]
    },
    {
      icon: Cloud,
      title: "Cloud & Deployment",
      skills: ["AWS", "Vercel", "Render", "Docker", "Kubernetes"]
    }
  ]

  const certifications = [
    "Google Project Management - 2025",
    "Java Spring Boot Essentials - 2025",
    "Agile Approaches And Change Strategies - 2025",
    "Docker & Kubernetes - 2025"
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Skills & Expertise</h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div 
                key={index} 
                className="card animate-fade-in-up" 
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <IconComponent className="text-indigo-600" size={28} />
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium hover:bg-indigo-200 transition cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-indigo-600">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg border border-gray-200 hover:border-indigo-600 transition animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-2 h-2 bg-indigo-600 rounded-full flex-shrink-0"></div>
                <span className="text-slate-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Visual */}
        <div className="mt-16 p-8 bg-gradient-to-br from-indigo-600 from-10% to-pink-600 to-90% rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-white">Tech Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">MERN</div>
              <p className="text-sm opacity-90">Full Stack</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">SQL</div>
              <p className="text-sm opacity-90">Databases</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">REST</div>
              <p className="text-sm opacity-90">APIs</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">AWS</div>
              <p className="text-sm opacity-90">Cloud</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
