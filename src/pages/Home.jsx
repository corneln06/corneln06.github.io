import useReveal from '../hooks/useReveal.js'
import TechMarquee from '../components/TechMarquee.jsx'

export default function Home() {
  const [heroRef, heroVisible] = useReveal()
  const [marqueeRef, marqueeVisible] = useReveal()

  return (
    <div className="flex flex-col gap-20 py-10 md:gap-28 md:py-16">
      <section
        ref={heroRef}
        className={`grid grid-cols-1 md:grid-cols-12 items-center gap-12 md:gap-10 lg:gap-16 px-6 md:px-16 lg:px-28 justify-items-center text-center transition-all duration-700 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <img
          className="md:col-span-5 w-4/5 max-w-[320px] md:max-w-none md:w-full rounded-[50%_30%] border border-white transition-shadow duration-500 hover:shadow-[0_0_35px_seagreen]"
          src="/images/IMG_9770-removebg-preview.png"
          alt="photoOfMe"
        />
        <div className="flex md:col-start-6 md:col-span-8 flex-col gap-6 text-base md:text-lg lg:text-xl max-w-[90%] md:max-w-none">
          <h1 className="font-minecraft-bold text-3xl md:text-4xl lg:text-5xl">
            Hi! My name is <span className="text-seagreen underline">Negru Cornel! </span>
          </h1>
          <p className="leading-relaxed">
            Diploma Engineering student at VIA University College, working as a frontend developer building React applications. I have hands-on full-stack experience with Spring Boot and PostgreSQL, gained through coursework and personal projects, from banking tools to project management platforms. I enjoy the full process of building software, from architecture to the small details that make an interface feel finished, and I'm always looking to grow my skills on projects that blend solid engineering with real-world use.
          </p>
          <a
            className="text-seagreen no-underline underline-offset-4 transition-all duration-300 hover:underline"
            href="/cv"
          >
            Find out more about me -&gt;
          </a>
        </div>
      </section>

      <section
        ref={marqueeRef}
        className={`transition-all duration-700 ${
          marqueeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <TechMarquee />
      </section>
    </div>
  )
}
