import techIconMap from '../data/techIcons.js'

const techIcons = [
  techIconMap.html,
  techIconMap.css,
  techIconMap.js,
  techIconMap.java,
  techIconMap.sql,
  techIconMap.python,
  techIconMap.csharp,
  techIconMap.springboot,
  techIconMap.react,
  techIconMap.blazor,
  techIconMap.astro,
  techIconMap.dotnet,
  techIconMap.git,
  techIconMap.github,
  techIconMap.postgresql,
].map(({ icon, alt }) => ({ src: icon, alt }))

export default function TechMarquee() {
  return (
    <div>
      <div className="mb-10 flex items-center justify-center gap-4 px-6">
        <span className="h-px w-12 bg-linear-to-r from-transparent to-seagreen/70 md:w-20" />
        <span className="text-xs md:text-sm uppercase tracking-[0.35em] text-seagreen">
          Tech Stack
        </span>
        <span className="h-px w-12 bg-linear-to-l from-transparent to-seagreen/70 md:w-20" />
      </div>

      <div className="group overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-5 py-2 group-hover:[animation-play-state:paused] md:gap-6">
          {[...techIcons, ...techIcons].map((icon, i) => (
            <div
              key={`${icon.alt}-${i}`}
              className="flex w-20 md:w-24 shrink-0 flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/3 p-4 transition-all duration-300 hover:-translate-y-2 hover:border-seagreen hover:bg-seagreen/10 hover:shadow-[0_0_25px_-5px_seagreen] md:p-5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white p-2 md:h-12 md:w-12">
                <img className="h-full w-full object-contain" src={icon.src} alt={icon.alt} />
              </div>
              <span className="text-[0.6rem] md:text-xs text-white/60 whitespace-nowrap">{icon.alt}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
