import React, { useState } from 'react';
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa6';

const socialIcons = [
  { icon: <FaFacebookF />, href: "#" },
  { icon: <FaXTwitter />, href: "#" },
  { icon: <FaLinkedinIn />, href: "#" },
  { icon: <FaInstagram />, href: "#" },
  { icon: <FaYoutube />, href: "#" },
  { icon: <FaWhatsapp />, href: "#" },
];

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#" },
      { label: "About", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Technology",
    links: [
      { label: "Technology1", href: "#" },
      { label: "Technology2", href: "#" },
      { label: "Technology3", href: "#" },
      { label: "Technology4", href: "#" },
      
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Workshops", href: "#" },
      { label: "Exhibitions", href: "#" },
      { label: "Blogs", href: "#" },
      { label: "Articles", href: "#" },
    ],
  },
];

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#101625] text-[#efefef] font-sans pt-14 pb-4">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row gap-12 border-b border-[#22263a] pb-10">
          {/* Left Branding */}
          <div className="flex-1 min-w-[250px]">
            <h2 className="text-4xl font-bold mb-2 text-white">
              AWS <span className="text-blue-500">Nuggets</span>
            </h2>
            <p className="text-[#b9bac1] mb-7 leading-relaxed max-w-md text-base">
              Empowering the next generation of digital professionals with cutting-edge courses, expert mentorship, and hands-on learning experiences.
            </p>
            <div className="flex gap-5 text-2xl">
              {socialIcons.map((s, i) => (
                <a key={i} href={s.href} className="hover:text-blue-500 transition-colors" target="_blank" rel="noopener noreferrer" aria-label="social-link">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          {/* Newsletter */}
          <div className="flex-1 min-w-[250px]">
            <h4 className="text-xl font-semibold mb-2 text-gray-200">Join Our Community <span role="img" aria-label="">✨</span></h4>
            <p className="mb-5 text-[#b9bac1]">Get exclusive access to new courses, special offers, and industry insights delivered straight to your inbox.</p>
            {subscribed ? (
              <p className="text-blue-400 font-semibold text-base py-2">Thank you for subscribing!</p>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-md bg-[#23283a] text-white outline-none placeholder:text-[#8f9bb3] focus:ring-2 focus:ring-blue-300 duration-200"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-500 transition-colors py-3 font-bold text-lg rounded-md text-gray-200 hover:text-blue-500 hover:bg-white"
                >
                  Subscribe Now
                </button>
              </form>
            )}
          </div>
        </div>
        {/* Middle Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pt-12 pb-8">
          {/* All link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h5 className="font-bold text-lg mb-4 text-gray-200">{section.title}</h5>
              <ul className="space-y-2 text-base">
                {section.links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`text-[#b9bac1] hover:underline transition-all duration-200 ${link.underline ? "underline" : ""}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* Contact column */}
          <div>
            <h5 className="font-bold text-lg mb-4 text-gray-200">Get in touch</h5>
            <div className="text-[#b9bac1] text-base space-y-2">
              <p>
                Third Floor, Above xyz Showroom,<br />
                ABC Chowk, Patel Nagar,<br />
                Delhi-110XX5
              </p>
              <p>
                <a href="mailto:contact@skillsyard.com" className="hover:underline text-[#b9bac1]">contact@awsnuggets.com</a>
              </p>
              <p>
                <a href="tel:+91985XXX8878" className="hover:underline text-[#b9bac1]">+91 985XXX8878</a>
              </p>
            </div>
          </div>
        </div>
        {/* Copyright row */}
        <div className="flex flex-col gap-4 md:flex-row md:justify-between items-center border-t border-[#22263a] pt-6 text-sm text-[#b9bac1]">
          <span>© 2025 AWS Nuggets. All rights reserved.</span>
          <div className="flex gap-3 flex-wrap">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span className="text-[#70737d]">•</span>
            <a href="#" className="hover:underline">Terms and Condition</a>
            <span className="text-[#70737d]">•</span>
            <a href="#" className="hover:underline">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
