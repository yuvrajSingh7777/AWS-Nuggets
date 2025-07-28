import {useState} from 'react';
import { ChevronRight } from 'react-feather'
import TestimonialSlider from './TestimonialSlider';
const HomePage = () => {
  
  return (
     <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col">
    

      {/* Hero Section */}
       <div className="relative h-200 md:h-screen w-full bg-cover bg-center flex items-center justify-center" style={{
      backgroundImage: `url('https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/home-header-1.avif')` 
    }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 mt-20 md:mt-0 text-white max-w-3xl px-4 md:px-6 text-left ">
        <h1 className="text-[27px] text-left sm:text-5xl font-bold  leading-tight mb-4">
          Empower Your Potential with <br />
          AWS cloud computing
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Step into the future of education with tools designed to maximize your growth.
          Learn at your own pace with expert guidance and a community of like-minded learners.
        </p>
        
      </div>

    </div>



      {/* Services Section */}
        <section id="services" className="md:py-20 py-14 bg-white dark:bg-gray-900 bg-opacity-80 md:px-12">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl md:text-4xl  font-bold text-center text-gray-800 dark:text-gray-300  md:mb-16 mb-12">
            <span className="text-blue-500">Explore AWS</span> Core Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cards */}
            {[
              {
                title: "Architecture & Deployment",
                image: "https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/gear.avif",
                bg: "bg-[#f5f6e8] hover:bg-[#f5f8e1] dark:bg-gray-800 dark:hover:bg-gray-700",
                border: "border-yellow-300",
                text: [
                  "AWS CloudFormation Designer for template creation.",
                  "AWS Well-Architected Framework for best practices."
                ]
              },
              {
                title: "Compute (EC2, Lambda)",
                image: "https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/server.png",
                bg: "bg-[#eaf4fa] hover:bg-[#dceffc] dark:bg-gray-800 dark:hover:bg-gray-700",
                border: "border-[#0988e3]",
                text: [
                  "Amazon EC2 for resizable compute capacity.",
                  "AWS Lambda for serverless compute."
                ]
              },
              {
                title: "Networking & CDN",
                image: "https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/router-icon.jpg",
                bg: "bg-[#effbf0] hover:bg-[#e4f9e4] dark:bg-gray-800 dark:hover:bg-gray-700",
                border: "border-green-600",
                text: [
                  "Elastic Load Balancing for traffic distribution.",
                  "Amazon CloudFront for fast content delivery."
                ]
              },
              {
                title: "Databases",
                image: "https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/database.jpg",
                bg: "bg-[#fdf4f4] hover:bg-[#f5e7e7] dark:bg-gray-800 dark:hover:bg-gray-700",
                border: "border-red-600",
                text: [
                  "Supports multi-AZ Amazon RDS database instances.",
                  "Suitable for WordPress installations with local MySQL/RDS."
                ]
              },
              {
                title: "Storage (S3)",
                image: "https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/memory.png",
                bg: "bg-[#fcf4fd] hover:bg-[#eee7f8] dark:bg-gray-800 dark:hover:bg-gray-700",
                border: "border-purple-600",
                text: [
                  "Amazon S3 for secure and scalable object storage.",
                  "99.999999999% durability across multiple zones."
                ]
              },
              {
                title: "Web & App Hosting",
                image: "https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/web-hosting.png",
                bg: "bg-[#fbf6f2] hover:bg-[#fcf1e9] dark:bg-gray-800 dark:hover:bg-gray-700",
                border: "border-orange-600",
                text: [
                  "It Amplify Hosting for static and server-side rendered apps.",
                  "Support for various CMS and platforms."
                ]
              }
            ].map((card, i) => (
              <div
                key={i}
                className={`rounded-xl shadow-xl p-6 transform hover:scale-105 transition duration-300 border-1 ${card.bg} ${card.border}`}
              >
                <div className="flex items-center mb-4">
                  <img src={`${card.image}`} alt={card.title} className="mr-4 h-12 w-16" />
                  <h4 className="text-lg md:text-xl font-semibold dark:text-white">{card.title}</h4>
                </div>
                <p className="text-gray-800 dark:text-gray-200 mb-2">Tools and frameworks to design, deploy, and manage your cloud infrastructure.</p>
                <ul className="text-gray-600 dark:text-gray-300 text-sm list-disc pl-5">
                  {card.text.map((t, j) => (
                    <li key={j}>{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

    <TestimonialSlider/>


      {/* Benefits Section */}
      <section id="benefits" className="py-20 md:px-12 bg-gradient-to-r from-blue-600 to-purple-700 dark:bg-gradient-to-r dark:from-blue-900 dark:to-purple-1000 ">
        <div className="container mx-auto px-6 text-center">
          <h3 className="sm:text-5xl text-4xl font-bold dark:text-blue-100 mb-12 sm:mb-16">Why Choose <span className='text-blue-50 dark:text-black'>AWS?</span></h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="p-8 bg-white dark:bg-blue-300 bg-opacity-20 rounded-xl shadow-lg transform hover:translate-y-2 transition duration-300">
              <img src="https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/globe.png" alt="Global Reach" className="mx-auto mb-6"/>
              <h4 className="text-3xl font-semibold mb-4 ">Global Reach</h4>
              <p className="text-lg">Datacenters worldwide for optimal performance.</p>
            </div>
            <div className="p-8 dark:bg-blue-300 bg-white bg-opacity-20 rounded-xl shadow-lg transform hover:translate-y-2 transition duration-300">
              <img src="https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/money.png" alt="Cost-Effective" className="mx-auto  mb-7 h-24 w-20"/>
              <h4 className="text-3xl font-semibold mb-4">Cost-Effective</h4>
              <p className="text-lg">Pay-as-you-go pricing with no upfront costs.</p>
            </div>
            <div className="p-8 dark:bg-blue-300 bg-white bg-opacity-20 rounded-xl shadow-lg transform hover:translate-y-2 transition duration-300">
              <img src="https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/scale.png" alt="Scalability" className="mx-auto mb-6"/>
              <h4 className="text-3xl font-semibold mb-4">Scalability</h4>
              <p className="text-lg">Infrastructure that grows and shrinks with your needs.</p>
            </div>
            <div className="p-8 dark:bg-blue-300 bg-white bg-opacity-20 rounded-xl shadow-lg transform hover:translate-y-2 transition duration-300">
              <img src="https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/security.png" alt="Security" className="mx-auto mb-6 h-25 w-25"/>
              <h4 className="text-3xl font-semibold mb-4">Security</h4>
              <p className="text-lg">Robust data protection with encryption and access control.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section - Simple example */}
      <section id="solutions" className="py-14 md:py-20 dark:bg-gray-800 bg-white bg-opacity-80 md:px-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-50 mb-10 md:mb-16">Common <span className='text-blue-500'>AWS</span> Solutions</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8  bg-gray-100 rounded-xl dark:bg-gray-600 shadow-md border-b-4 border-yellow-500">
              <h4 className="text-3xl dark:text-gray-900 font-semibold text-gray-700 mb-4">Static Website Hosting</h4>
              <p className="text-gray-600 dark:text-gray-100 mb-4">
                Host your static websites with high reliability and low cost using Amazon S3 or AWS Amplify.
              </p>
              <a href="https://aws.amazon.com/websites/" className="text-blue-500 dark:text-blue-300 hover:underline">Learn More about Static Websites</a>
            </div>
            <div className="p-8 bg-gray-100 dark:bg-gray-600 rounded-xl shadow-md border-b-4 border-cyan-500">
              <h4 className="text-3xl font-semibold dark:text-gray-900 text-gray-700 mb-4">WordPress Deployment</h4>
              <p className="text-gray-600 dark:text-gray-100 mb-4">
                Easily deploy and scale WordPress sites using Amazon Lightsail or EC2 instances with RDS.
              </p>
              <a href="https://aws.amazon.com/websites/" className="text-blue-500 dark:text-blue-300 hover:underline">Learn More about WordPress on AWS</a>
            </div>
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default HomePage;
