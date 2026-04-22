import logo from '../assets/images/logo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const navLinkClass = ({isActive}) => (isActive ? "bg-black text-white font-bold py-2 px-4 rounded-lg" : "text-slate-600 hover:text-indigo-600 py-2 px-4 rounded-lg");
  
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white border-b border-indigo-100">
      <NavLink to="/" className="flex items-center">
        <img className="h-10 w-auto" src={logo} alt="React Jobs" />
        <span className="text-slate-900 text-xl font-bold ml-2">React Jobs</span>
      </NavLink>
      <div className="flex space-x-4">
        <NavLink to="/" className={navLinkClass}>Home</NavLink>
        <NavLink to="/jobs" className={navLinkClass}>Jobs</NavLink>
      </div>
    </nav>
  )
}

export default Navbar