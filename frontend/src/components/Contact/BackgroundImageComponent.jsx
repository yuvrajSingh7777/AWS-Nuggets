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

      {/* Phone icon */}
      <div
        className="absolute cursor-pointer"
        style={{
          top: "25%", // adjust as needed
          left: "20%", // adjust as needed
        }}
        title="Phone"
      >
        <FiPhone className="p-2 w-15 h-15 text-blue-500 bg-black rounded-full drop-shadow-lg " />
      </div>

      {/* Message icon */}
      <div
        className="absolute cursor-pointer"
        style={{
          top: "50%", // adjust as needed
          left: "40%", // adjust as needed
        }}
        title="Message"
      >
        <FiMessageCircle className="p-2 w-15 h-15 text-blue-500 bg-black rounded-full drop-shadow-lg" />
      </div>

      {/* Email icon */}
      <div
        className="absolute cursor-pointer"
        style={{
          top: "35%", // adjust as needed
          left: "65%", // adjust as needed
        }}
        title="Email"
      >
        <FiMail className="p-2 w-15 h-15 text-blue-500 bg-black rounded-full drop-shadow-lg" />
      </div>
    </div>
  );
}
