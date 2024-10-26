import { useState } from 'react'
import { Link, Outlet } from "react-router-dom"
import { Menu, X } from 'lucide-react'
import Footer from './components/Footer'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between sm:justify-center px-4 sm:px-6 lg:px-8 h-[80px] border-b-[1px]">
        <div className="logo">
          <Link to="/">
            <h1 className="text-[22px] sm:text-[26px] font-[500] leading-[39px] text-cutt">
              Lanka<span className="text-cut">Stay<span>.</span></span>
            </h1>
          </Link>
        </div>
        <nav className="hidden sm:flex gap-4 lg:gap-7 items-center sm:ml-8 lg:ml-[500px]">
          <Link to="/" className="font-[400] text-[14px] lg:text-[16px] leading-[24px] text-cut">Home</Link>
          <Link to="/hotels" className="font-[400] text-[14px] lg:text-[16px] leading-[24px] text-cut">Hotels</Link>
          <Link to="/rooms" className="font-[400] text-[14px] lg:text-[16px] leading-[24px] text-cut">Rooms</Link>
          <Link to="/about" className="font-[400] text-[14px] lg:text-[16px] leading-[24px] text-cut">About</Link>
          <Link to="/contact" className="font-[400] text-[14px] lg:text-[16px] leading-[24px] text-cut">Contact</Link>
          <Link to="/login" className="font-[400] text-[14px] lg:text-[16px] leading-[24px] text-cut">
            <button className="h-[35px] w-[100px] bg-cutt text-white rounded-md text-[14px] lg:text-[16px]">Login</button>
          </Link>
        </nav>
        <button className="sm:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </header>

      {isMenuOpen && (
        <nav className="sm:hidden flex flex-col items-center gap-4 py-4 bg-white border-b-[1px]">
          <Link to="/" className="font-[400] text-[16px] leading-[24px] text-cut">Home</Link>
          <Link to="/hotels" className="font-[400] text-[16px] leading-[24px] text-cut">Hotels</Link>
          <Link to="/rooms" className="font-[400] text-[16px] leading-[24px] text-cut">Rooms</Link>
          <Link to="/about" className="font-[400] text-[16px] leading-[24px] text-cut">About</Link>
          <Link to="/contact" className="font-[400] text-[16px] leading-[24px] text-cut">Contact</Link>
          <Link to="/login" className="font-[400] text-[16px] leading-[24px] text-cut">
            <button className="h-[35px] w-[100px] bg-cutt text-white rounded-md text-[16px]">Login</button>
          </Link>
        </nav>
      )}

      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}