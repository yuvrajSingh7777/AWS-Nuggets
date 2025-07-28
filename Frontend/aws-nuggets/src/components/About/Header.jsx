import React from 'react'

const Header = () => {
  return (
    <div className="relative flex py-20 sm:py-0 flex-col md:flex-row items-center justify-center min-h-screen bg-center bg-cover bg-no-repeat sm:px-4"  style={{
        backgroundImage: `url('https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/bg-image.jpg')`
      }}>
        <div className="absolute inset-0 dark:bg-black dark:opacity-20"></div>
                {/* Left Image */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0 md:mr-8">
                    <img
                        src="https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/about.webp"
                        alt="Person working on laptop"
                        className="rounded-xl w-[90%] h-100 object-cover"
                    />
                </div>
                {/* Right Content */}
                <div className="w-86 md:w-1/2 sm:max-w-xl sm:mr-30">
                    <p className="text-blue-700 text-lg sm:text-md font-semibold mb-2">
                        Welcome to AWS Nuggets
                    </p>
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight sm:w-160">
                        You can join with AWS Nuggets and<br />
                        learn AWS Cloud Computing for your <span className="text-blue-600">bright future.</span>
                    </h1>
                    <p className="text-gray-600 text-lg mb-6">
                        At AWS Nuggets, we believe in equipping you with in-demand AWS skills that open real-world cloud career opportunities.
                        Whether you're just beginning your cloud journey or aiming for advanced certifications, our hands-on courses are designed to help you grow with confidence and master AWS services that matter in today's tech industry.
                    </p>
                </div>
            </div>
  )
}

export default Header
