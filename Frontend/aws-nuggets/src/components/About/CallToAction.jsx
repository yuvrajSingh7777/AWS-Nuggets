
import React from 'react';
import {useState} from 'react';

const CallToAction = () => {
      const [signUpOpen, setSignUpOpen] = useState(false)

  return (
    <div className="bg-[#daeaf9] dark:bg-gray-300 px-4 sm:px-0 py-16 text-center">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-black mb-4">
        Ready to Start Your Learning Journey?
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-800 mb-8">
        Join thousands of successful professionals who have transformed their careers with us.
      </p>
     
    </div>
  );
};

export default CallToAction;
