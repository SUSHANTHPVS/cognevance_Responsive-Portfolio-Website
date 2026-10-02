import { Award, BookOpen } from 'lucide-react'

export default function About() {
  const education = [
    {
      school: "Mohan Babu University, Tirupati",
      degree: "B.Tech - Computer Science Engineering (Data Science)",
      period: "2023 - 2027",
      cgpa: "8.8 / 10.0"
    },
    {
      school: "Sri Chaitanya Junior College, Tirupati",
      degree: "12th Standard",
      period: "2021 - 2023",
      cgpa: "9.4 / 10.0"
    },
    {
      school: "Sri Chaitanya Techno Curriculum, Tirupati",
      degree: "10th Standard",
      period: "2020 - 2021",
      cgpa: "10.0 / 10.0"
    }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Personal Summary */}
          <div className="animate-slide-in-left">
            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-indigo-600">Who I Am</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                I'm a Computer Science student at Mohan Babu University with a passion for full-stack web development. 
                With strong foundations in both frontend and backend technologies, I enjoy creating seamless, efficient, 
                and user-friendly applications.
              </p>
              <p className="text-slate-600 leading-relaxed">
                I'm seeking a Full Stack Developer role where I can apply my technical knowledge, contribute to building 
                efficient applications, and continue growing as a developer in a collaborative and challenging environment.
              </p>
            </div>
          </div>

          {/* Key Stats */}
          <div className="animate-slide-in-right">
            <div className="space-y-4">
              <div className="card">
                <h4 className="text-lg font-semibold text-indigo-600 mb-2">Current CGPA</h4>
                <p className="text-3xl font-bold text-slate-900">8.8 / 10.0</p>
              </div>
              <div className="card">
                <h4 className="text-lg font-semibold text-indigo-600 mb-2">Technical Expertise</h4>
                <p className="text-slate-600">MERN Stack, Full Stack Development, Database Design</p>
              </div>
              <div className="card">
                <h4 className="text-lg font-semibold text-indigo-600 mb-2">Cloud Platforms</h4>
                <p className="text-slate-600">AWS, Vercel, Render, Docker & Kubernetes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-indigo-600">Education</h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="card animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex items-start gap-4">
                  <BookOpen className="text-indigo-600 flex-shrink-0 mt-1" size={24} />
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900">{edu.school}</h4>
                    <p className="text-indigo-600">{edu.degree}</p>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mt-2 text-sm text-slate-600">
                      <span>{edu.period}</span>
                      <span className="font-semibold text-indigo-700">CGPA: {edu.cgpa}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
