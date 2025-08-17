import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import SignUpForm from './components/Navbar/SignUpForm'

import HomePage from './components/HomePage/HomePage'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Pricing from './components/Pricing/Pricing'

import EC2Section from './components/Navbar/EC2Section'
import EBSSection from './components/Navbar/EBSSection'
import SSHSection from './components/Navbar/SSHSection'
import S3Section from './components/Navbar/S3Section'
import SNSSection from './components/Navbar/SNSSection'
import VPCSection from './components/Navbar/VPCSection'
import IAMSection from './components/Navbar/IAMSection'
import AutoScalingSection from './components/Navbar/AutoScalingSection'
import SignInForm from './components/Navbar/SignInForm'
import AuthSuccess from './components/AuthSuccess'
import ForgotPassword from './components/Navbar/ForgotPassword'
import ResetPassword from './components/Navbar/ResetPassword'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  
  const ProtectedRoute = ({ element }) => {
    if (isAuthenticated) {
      return element
    } else {
      navigate('/signup')
      return null
    }
  }

useEffect(() => {
  const token = localStorage.getItem("token")
  if (token) {
    setIsAuthenticated(true)
  } else {
    setIsAuthenticated(false)
  }
}, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])



  const navigate = useNavigate()

  

  return (
    
      <div className="font-sans dark:bg-gray-900">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/auth-success" element={<AuthSuccess />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />



          {/* 🔐 Protected services */}
          <Route path="/ec2" element={<ProtectedRoute element={<EC2Section />} />} />
          <Route path="/ebs" element={<ProtectedRoute element={<EBSSection />} />} />
          <Route path="/ssh" element={<ProtectedRoute element={<SSHSection />} />} />
          <Route path="/s3" element={<ProtectedRoute element={<S3Section />} />} />
          <Route path="/sns" element={<ProtectedRoute element={<SNSSection />} />} />
          <Route path="/vpc" element={<ProtectedRoute element={<VPCSection />} />} />
          <Route path="/iam" element={<ProtectedRoute element={<IAMSection />} />} />
          <Route path="/autoscaling" element={<ProtectedRoute element={<AutoScalingSection />} />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <Footer />


      </div>
  )
}

export default App
