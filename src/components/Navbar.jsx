import { NavLink, Link } from 'react-router-dom'

const linkClass = ({ isActive }) =>
  `rounded-md px-4 py-1 no-underline transition-colors duration-300 hover:bg-seagreen hover:text-white ${
    isActive ? 'text-seagreen' : ''
  }`

export default function Navbar() {
  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between px-0 md:px-28 pt-6 pb-8 md:pt-6">
      <Link to="/" className="text-[1.3rem] no-underline transition-colors duration-300 hover:text-seagreen">
        Cornel
      </Link>
      <ul className="flex list-none gap-[10px] md:gap-8 ml-0 sm:ml-[70px] text-[0.9rem] mt-12 sm:mt-0">
        <li>
          <NavLink to="/" className={linkClass}>
            AboutMe
          </NavLink>
        </li>
        <li>
          <NavLink to="/cv" className={linkClass}>
            CV
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className={linkClass}>
            Portofolio
          </NavLink>
        </li>
      </ul>
      <a
        href="/files/Negru_Cornel_Resume.pdf"
        download
        className="hidden md:inline rounded-md text-[1.3rem] no-underline px-4 py-1 transition-colors duration-300 hover:bg-seagreen hover:text-white"
      >
        Download CV
      </a>
    </nav>
  )
}
