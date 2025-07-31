import React from "react";
import { FiPhone, FiMessageCircle, FiMail } from "react-icons/fi";

export default function BackgroundWithIcons() {
  return (
    <div
      className="relative w-full h-screen bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/bg1-image.jpg')`,
      }}
    >
        <div className="absolute inset-0 dark:bg-black dark:opacity-20"></div>

      
      <div
        className="absolute cursor-pointer"
        style={{
          top: "25%", 
          left: "20%", 
        }}
        title="Phone"
      >
        <FiPhone className="p-2 w-15 h-15 text-blue-500 bg-black rounded-full drop-shadow-lg " />
      </div>

      
      <div
        className="absolute cursor-pointer"
        style={{
          top: "50%",
          left: "40%", 
        }}
        title="Message"
      >
        <FiMessageCircle className="p-2 w-15 h-15 text-blue-500 bg-black rounded-full drop-shadow-lg" />
      </div>

      
      <div
        className="absolute cursor-pointer"
        style={{
          top: "35%", 
          left: "65%", 
        }}
        title="Email"
      >
        <FiMail className="p-2 w-15 h-15 text-blue-500 bg-black rounded-full drop-shadow-lg" />
      </div>
    </div>
  );
}
