import useReveal from '../hooks/useReveal.js'
import tech from '../data/techIcons.js'

function TechBadge({ t }) {
  return (
    <div className="rounded-md bg-white p-1" title={t.alt}>
      <img className="h-3.5 w-3.5 md:h-4 md:w-4" src={t.icon} alt={t.alt} />
    </div>
  )
}

function SectionCard({ title, children, className = '' }) {
  const [ref, visible] = useReveal()

  return (
    <div
      ref={ref}
      className={`rounded-2xl border border-white/10 bg-white/3 p-6 transition-all duration-700 md:p-8 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      <h2 className="mb-6 flex items-center gap-3 font-minecraft-bold text-xl md:text-2xl">
        <span className="h-5 w-1 rounded-full bg-seagreen" />
        {title}
      </h2>
      <div className="flex flex-col gap-5">{children}</div>
    </div>
  )
}

function Entry({ title, place, date, techList, points }) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <span className="font-minecraft-bold text-sm md:text-base">{title}</span>
        {date && <span className="shrink-0 text-xs text-seagreen md:text-sm">{date}</span>}
      </div>
      {place && <p className="mt-1 text-xs text-white/50 md:text-sm">{place}</p>}
      {techList && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {techList.map((t) => (
            <TechBadge key={t.alt} t={t} />
          ))}
        </div>
      )}
      {points && (
        <ul className="mt-3 flex flex-col gap-1.5 text-xs leading-relaxed text-white/70 md:text-sm">
          {points.map((point) => (
            <li key={point} className="flex gap-2">
              <span className="text-seagreen">–</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function Fact({ label, children }) {
  return (
    <div>
      <span className="font-minecraft-bold text-sm md:text-base">{label}</span>{' '}
      <span className="text-xs text-white/70 md:text-sm">{children}</span>
    </div>
  )
}

function TechRow({ label, techList }) {
  return (
    <div>
      <span className="font-minecraft-bold text-sm md:text-base">{label}</span>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {techList.map((t) => (
          <TechBadge key={t.alt} t={t} />
        ))}
      </div>
    </div>
  )
}

export default function CV() {
  return (
    <section className="flex flex-col gap-10 px-6 py-10 md:py-16 lg:px-12">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="font-minecraft-bold text-3xl md:text-5xl">Curriculum Vitae</h1>
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-white/70 md:text-sm">
          <a href="tel:+4571393313" className="transition-colors duration-300 hover:text-seagreen">
            +45 71 39 33 13
          </a>
          <span className="text-white/20">|</span>
          <a href="mailto:cornelnegru06@gmail.com" className="transition-colors duration-300 hover:text-seagreen">
            cornelnegru06@gmail.com
          </a>
          <span className="text-white/20">|</span>
          <a
            href="https://linkedin.com/in/negru-cornel-b6155a2b1"
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-300 hover:text-seagreen"
          >
            LinkedIn
          </a>
          <span className="text-white/20">|</span>
          <a
            href="https://github.com/corneln06"
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-300 hover:text-seagreen"
          >
            GitHub
          </a>
        </div>
        <p className="max-w-2xl text-xs leading-relaxed text-white/70 md:text-sm">
          Software Technology Engineering student at VIA University College seeking a
          developer role where I can apply hands-on full-stack experience to build
          reliable, well-architected systems. Looking to take ownership of end-to-end
          projects, from design through deployment, while growing in system architecture
          and production-quality engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <SectionCard title="Education">
            <Entry
              title="VIA University College"
              place="Software Technology Engineering — Horsens, Denmark"
              date="2025 – 2029"
            />
          </SectionCard>

          <SectionCard title="Experience">
            <Entry
              title="Full-Stack Developer, Folkaet"
              place="Copenhagen, Denmark"
              date="Mar 2026 – Present"
              techList={[tech.astro, tech.react]}
              points={[
                'Built and shipped the Work-Pairs marketing website using Astro, Tailwind CSS v4, and daisyUI v5, delivering responsive layouts with custom typography and Lottie animations.',
                'Designed end-to-end form submission infrastructure using Astro API routes and Resend, handling contact inquiries and candidate submissions in production.',
                'Built a client intake questionnaire feature and a privacy policy page on the main Folkaet website using React, extending the frontend with new user-facing functionality.',
              ]}
            />
          </SectionCard>
        </div>

        <div className="flex flex-col gap-8">
          <SectionCard title="Skills">
            <Fact label="Spoken Languages:">
              Romanian (native), English (C1, Cambridge Certificate), Danish (beginner,
              currently studying)
            </Fact>
            <TechRow
              label="Programming Languages:"
              techList={[tech.html, tech.css, tech.js, tech.java, tech.sql, tech.python, tech.csharp]}
            />
            <TechRow
              label="Frameworks:"
              techList={[tech.springboot, tech.react, tech.blazor, tech.astro, tech.dotnet]}
            />
            <TechRow label="Developer Tools:" techList={[tech.git, tech.github, tech.postgresql]} />
          </SectionCard>
        </div>
      </div>
    </section>
  )
}
