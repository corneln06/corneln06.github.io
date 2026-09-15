import useReveal from '../hooks/useReveal.js'
import tech from '../data/techIcons.js'

const projects = [
  {
    title: 'Village Management System',
    tech: [tech.java, tech.html, tech.css, tech.js],
    points: [
      'Backend for a village management system built in Java, covering API design, data modeling, and database integration for cross-team collaboration with the frontend group.',
    ],
    href: '',
  },
  {
    title: 'Restaurant Management Platform',
    tech: [tech.java, tech.postgresql],
    points: [
      'A server-based restaurant management platform in Java, applying MVVM architecture, Observer and State design patterns, with multithreading for real-time concurrent operations.',
    ],
    href: '',
  },
  {
    title: 'SOLUTEC Project Management System',
    tech: [tech.springboot, tech.postgresql, tech.react, tech.dotnet],
    points: [
      "A centralized project management platform for SOLUTEC's aluminum carpentry operations, with role-based access, Kanban workflows, task dependencies, and automated notifications.",
    ],
    href: '',
  },
  {
    title: 'Bank Account Tracker',
    tech: [tech.springboot, tech.postgresql, tech.python, tech.pytorch],
    points: [
      'A personal finance app with a Spring Boot backend, OAuth-connected Tink open banking API, and PostgreSQL persistence.',
      'A PyTorch-based transaction categorizer that classifies expenses automatically, with no manual labeling required.',
    ],
    href: '',
  },
  {
    title: 'Forum App',
    tech: [tech.dotnet, tech.sqlite, tech.blazor],
    points: [
      'A modular forum app built with .NET Web API, Entity Framework Core, and Blazor, using a layered architecture that separates network and persistence concerns.',
    ],
    href: '',
  },
]

function ProjectCard({ project, index }) {
  const [ref, visible] = useReveal()
  const TitleTag = project.href ? 'a' : 'span'

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${index * 80}ms` : '0ms' }}
      className={`flex w-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/3 p-6 shadow-[1px_2px_10px_seagreen] transition-all duration-500 hover:-translate-y-1 hover:shadow-[1px_2px_25px_seagreen] md:p-8 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <TitleTag
        className="font-minecraft-bold text-base uppercase no-underline transition-colors duration-300 hover:text-seagreen md:text-lg"
        {...(project.href ? { href: project.href, target: '_blank', rel: 'noreferrer' } : {})}
      >
        {project.title}
      </TitleTag>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <div key={t.alt} className="rounded-md bg-white p-1" title={t.alt}>
            <img className="h-4 w-4 md:h-5 md:w-5" src={t.icon} alt={t.alt} />
          </div>
        ))}
      </div>

      <ul className="flex flex-col gap-1.5 text-xs leading-relaxed text-white/70 md:text-sm">
        {project.points.map((point) => (
          <li key={point} className="flex gap-2">
            <span className="text-seagreen">–</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Portfolio() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-8 px-6 pb-8 lg:px-12">
      <h1 className="text-4xl lg:text-6xl col-span-1 md:col-span-2 underline decoration-seagreen">Projects</h1>
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}
    </section>
  )
}
