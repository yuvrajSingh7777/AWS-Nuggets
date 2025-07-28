import { useState, useEffect } from 'react'
import ProfileDropdown from './ProfileDropdown'
import {
  Camera, Bell, Terminal, Database, Cloud, Server, Link,
  Home, User, Mail, Layers, ChevronDown, ChevronUp, Menu, CheckSquare, X
} from 'react-feather'
import { Search, Scaling } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ darkMode, setDarkMode }) => {
  const navigate = useNavigate()

  const [loggedInUser, setLoggedInUser] = useState(null)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const services = [
    { name: "Ec2", icon: <Server size={18} />, color: "bg-orange-500" },
    { name: "Sns", icon: <Bell size={18} />, color: "bg-pink-500" },
    { name: "S3", icon: <Database size={18} />, color: "bg-amber-700" },
    { name: "Ebs", icon: <Camera size={18} />, color: "bg-red-500" },
    { name: "Vpc", icon: <Link size={18} />, color: "bg-purple-500" },
    { name: "Ssh", icon: <Terminal size={18} />, color: "bg-yellow-500" },
    {
      name: "Iam", icon: (
        <div className="relative w-8 h-8 bg-green-600 rounded-sm">
          <span className="absolute text-white w-5 h-4 top-1 left-1">IAM</span>
        </div>
      )
    },
    { name: "Autoscaling", icon: <Scaling size={18} />, color: "bg-orange-500" },
    { name: "Dynamodb", icon: <Database size={18} />, color: "bg-blue-500" },
    {
      name: "Cloudwatch", icon: (
        <div className="relative w-8 h-8">
          <Cloud className="absolute text-white w-7 h-6 top-1 left-1" />
          <Search className="absolute text-[red] w-5 h-3 top-4 left-3" />
        </div>
      ), color: "bg-cyan-500"
    }
  ]

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)
  const closeDropdowns = () => setDropdownOpen(false)

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setLoggedInUser(null)
    window.location.href = "/"
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown')) closeDropdowns()
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user")
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser)
        if (parsedUser && parsedUser.name && parsedUser.email) {
          setLoggedInUser(parsedUser)
        }
      }
    } catch (err) {
      console.error("Error parsing user from localStorage:", err)
    }
  }, [])

  return (
    <>
      <nav className="bg-gray-100 dark:bg-gray-900 fixed w-full top-0 left-0 z-50 border-b border-blue-200 dark:border-blue-700 backdrop-blur-sm">
        <div className="px-3 md:px-6 flex justify-between items-center h-16">
          <div className="brand flex items-center gap-6">
            <h2
              onClick={() => navigate('/')}
              className="cursor-pointer w-max text-xl md:text-2xl mr-10 sm:mr-0 font-extrabold dark:text-gray-200"
            >
              AWS <span className="text-blue-500">Nuggets</span>
            </h2>

            <div className="dropdown relative">
              <button
                className="cursor-pointer border-2 border-gray-400 dark:text-gray-200 nav-link flex items-center px-3 py-2 rounded-md font-semibold text-gray-800 transition"
                onClick={toggleDropdown}
              >
                <span className="flex items-center">
                  <Layers size={20} className="mr-1 text-blue-500" />
                  Explore
                  {dropdownOpen
                    ? <ChevronUp size={20} className="ml-1 text-blue-500 pointer-events-none" />
                    : <ChevronDown size={20} className="ml-1 text-gray-800 dark:text-gray-200 pointer-events-none" />
                  }
                </span>
              </button>

              {dropdownOpen && (
                <div className="absolute top-16 -left-47 sm:left-0 w-90 sm:w-140 bg-gray-100 dark:bg-gray-800 border dark:border-gray-600 border-blue-200 rounded-lg shadow-lg p-4 z-50">
                  <div className="grid sm:grid-cols-2 grid-cols-none gap-y-3 gap-x-4">
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-center border-b-1 border-b-gray-300 dark:border-b-gray-700 space-x-3 cursor-pointer text-gray-600 dark:text-gray-100 dark:font-normal font-semibold text-sm dark:hover:text-gray-800 dark:hover:font-semibold dark:hover:bg-gray-300 hover:bg-blue-100 p-2 rounded transition"
                        onClick={() => {
                          navigate(`/${service.name.toLowerCase().replace(/\s/g, '')}`)
                          closeDropdowns()
                        }}
                      >
                        <div className={`w-8 h-8 flex items-center justify-center text-white rounded ${service.color}`}>
                          {service.icon}
                        </div>
                        <span>{service.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="nav-desktop dark:bg-gray-300 hidden md:flex items-center gap-4 bg-white/60 px-4 py-1 rounded-full border border-blue-200 shadow-sm">
            <a onClick={() => navigate('/')} className="nav-link flex items-center px-3 py-2 rounded-full font-semibold text-gray-800 hover:bg-blue-100 hover:text-blue-500 transition">
              <Home size={18} className="mr-1 text-blue-500" /> Home
            </a>
            <a onClick={() => navigate('/about')} className="nav-link flex items-center px-3 py-2 rounded-full font-semibold text-gray-800 hover:bg-blue-100 hover:text-blue-500 transition">
              <User size={18} className="mr-1 text-blue-500" /> About
            </a>
            <a onClick={() => navigate('/pricing')} className="nav-link flex items-center px-3 py-2 rounded-full font-semibold text-gray-800 hover:bg-blue-100 hover:text-blue-500 transition">
              <CheckSquare size={18} className="mr-1 text-blue-500" /> Pricing
            </a>
            <a onClick={() => navigate('/contact')} className="nav-link flex items-center px-3 py-2 rounded-full font-semibold text-gray-800 hover:bg-blue-100 hover:text-blue-500 transition">
              <Mail size={18} className="mr-1 text-blue-500" /> Contact
            </a>
          </div>

          <div className="hidden md:flex gap-2 items-center">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-white hover:border-1 hover:border-blue-500 hover:bg-white dark:text-blue-500 hover:text-blue-500 font-semibold dark:bg-gray-300 px-3 py-2 rounded-md bg-blue-500 transition"
            >
              {darkMode ? '☀️Light' : '🌙Dark'}
            </button>

            {loggedInUser ? (
              <ProfileDropdown user={loggedInUser} onLogout={handleLogout} />
            ) : (
              <>
                <a href="#" onClick={() => navigate('/signin')} className="sign-in text-blue-700 dark:text-blue-400 font-semibold hover:text-white px-3 py-2 rounded-md hover:bg-blue-500 border border-blue-500 transition">
                  Sign In
                </a>
                <a href="#" onClick={() => navigate('/signup')} className="sign-in text-blue-700 dark:text-blue-400 font-semibold hover:text-white px-3 py-2 rounded-md hover:bg-blue-500 border border-blue-500 transition">
                  Create Account
                </a>
              </>
            )}
          </div>

          <button
            className="mobile-menu-button md:hidden text-blue-800 dark:text-blue-300 ml-5 md:ml-0 focus:outline-none"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(prev => !prev)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden relative px-6 pb-4 bg-white dark:bg-gray-800 border-t border-blue-200 dark:border-blue-700">
            <a onClick={() => { navigate('/'); setMobileMenuOpen(false) }} className="block px-3 py-2 rounded-md text-gray-800 dark:text-gray-200 font-semibold hover:bg-blue-100 hover:text-blue-500 transition">
              <Home size={18} className="inline-block mr-2 text-blue-500" /> Home
            </a>
            <a onClick={() => { navigate('/about'); setMobileMenuOpen(false) }} className="block px-3 py-2 rounded-md text-gray-800 dark:text-gray-200 font-semibold hover:bg-blue-100 hover:text-blue-500 transition">
              <User size={18} className="inline-block mr-2 text-blue-500" /> About
            </a>
            <a onClick={() => { navigate('/pricing'); setMobileMenuOpen(false) }} className="block px-3 py-2 rounded-md text-gray-800 dark:text-gray-200 font-semibold hover:bg-blue-100 hover:text-blue-500 transition">
              <CheckSquare size={18} className="inline-block mr-2 text-blue-500" /> Pricing
            </a>
            <a onClick={() => { navigate('/contact'); setMobileMenuOpen(false) }} className="block px-3 py-2 rounded-md text-gray-800 dark:text-gray-200 font-semibold hover:bg-blue-100 hover:text-blue-500 transition">
              <Mail size={18} className="inline-block mr-2 text-blue-500" /> Contact
            </a>
            <div className="flex flex-col gap-2 mt-4">
              <button
                onClick={() => {
                  setDarkMode(!darkMode);
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-md font-semibold text-white bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 border transition dark:bg-gray-100 dark:text-blue-500"
              >
                {darkMode ? '☀️ Light' : '🌙 Dark'}
              </button>
              {loggedInUser ? (
                <ProfileDropdown className="absolute top-10 left-20" user={loggedInUser} onLogout={handleLogout} />
              ) : (
                <>
                  <a onClick={() => { navigate('/signin'); setMobileMenuOpen(false) }} className="block text-blue-700 dark:text-blue-400 font-semibold px-3 py-2 rounded-md hover:bg-blue-500 hover:text-white border border-blue-500 transition">
                    Sign In
                  </a>
                  <a onClick={() => { navigate('/signup'); setMobileMenuOpen(false) }} className="block text-blue-700 dark:text-blue-400 font-semibold px-3 py-2 rounded-md hover:bg-blue-500 hover:text-white border border-blue-500 transition">
                    Create Account
                  </a>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar 