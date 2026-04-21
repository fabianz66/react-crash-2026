import logo from '../assets/images/logo.png'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white border-b border-indigo-100">
      <img className="h-10 w-auto" src={logo} alt="Logo" />
      <div className="flex space-x-4">
        <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Home</a>
        <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Contact Us</a>
        <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Profile</a>
      </div>
    </nav>
  )
}

export default Navbar