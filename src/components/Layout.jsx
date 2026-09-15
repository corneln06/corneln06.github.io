import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  return (
    <div className="bg-black text-white min-h-screen">
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md">
        <Navbar />
      </header>
      <main className="mx-auto max-w-7xl">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
