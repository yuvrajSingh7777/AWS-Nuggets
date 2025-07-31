import React, { useState, useEffect, useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const TESTIMONIALS = [
  {
    text: "The best part was the mentorship and the live projects. I never felt lost and always had support when I needed it.",
    name: "Anshu",
    role: "Web Development",
    img: "https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/photo1.jpg",
  },
  {
    text: "The curriculum was comprehensive and beginner-friendly. I was able to transition into a data role within 3 months.",
    name: "Aman Sagar",
    role: "Data Science",
    img: "https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/photo2.jpg",
  },
  {
    text: "The Data Analytics course was hands-on and included real-world datasets. It gave me the confidence to start freelancing.",
    name: "Dipanshu",
    role: "Data Analytics",
    img: "https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/photo3.jpg",
  },
  {
    text: "The Data Analytics course was hands-on and included real-world datasets. It gave me the confidence to start freelancing.",
    name: "Yuvraj",
    role: "Web Development",
    img: "https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/photo1.jpg",
  },
  {
    text: "The Data Analytics course was hands-on and included real-world datasets. It gave me the confidence to start freelancing.",
    name: "Karan",
    role: "Software Development",
    img: "https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/photo2.jpg",
  },
  {
    text: "The Data Analytics course was hands-on and included real-world datasets. It gave me the confidence to start freelancing.",
    name: "Arun",
    role: "Web Development",
    img: "https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/photo3.jpg",
  },
];


const SLIDES_TO_SHOW = 3;

export default function TestimonialSlider() {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);
  const slideWidthRef = useRef(0);
  const animationRef = useRef();

  
  const slides = [...TESTIMONIALS, ...TESTIMONIALS];

  
  useEffect(() => {
    if (containerRef.current) {
      const slide = containerRef.current.querySelector(".slide");
      if (slide) slideWidthRef.current = slide.offsetWidth;
    }
  }, []);

  
  useEffect(() => {
    const speed = 0.5; 

    const animate = () => {
      setOffset((prev) => {
        let newOffset = prev + speed;
        
        if (newOffset >= slideWidthRef.current * TESTIMONIALS.length) {
          newOffset = 0;
        }
        return newOffset;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  
  const slideNext = () => {
    setOffset((prev) => {
      const newVal = prev + slideWidthRef.current;
      return newVal >= slideWidthRef.current * TESTIMONIALS.length ? 0 : newVal;
    });
  };

  const slidePrev = () => {
    setOffset((prev) => {
      const newVal = prev - slideWidthRef.current;
      return newVal < 0
        ? slideWidthRef.current * (TESTIMONIALS.length - 1)
        : newVal;
    });
  };

  return (
    <section className="dark:bg-gray-900 bg-[#f7f8fa] w-full py-12 px-6 sm:pb-60 pb-40 sm:h-170 flex flex-col items-center justify-start overflow-hidden select-none">
      <div className="dark:text-gray-300 mb-2 text-lg md:text-xl text-center text-gray-500">
        Student Review's
      </div>
      <h2 className="text-3xl md:text-5xl font-bold dark:text-gray-300 text-center mb-10">
        What <span className="text-blue-500">Student</span> Says
      </h2>
      <div className="relative sm:mt-15 w-full max-w-7xl mx-auto flex items-center justify-center">
        {/* Left arrow */}
        <button
          onClick={slidePrev}
          aria-label="Previous"
          className="absolute sm:left-0 sm:top-1/2 left-20 top-70 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 md:p-3 z-10 hover:bg-blue-50 transition"
        >
          <MdArrowBackIosNew size={24} />
        </button>

        {/* Slider container */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-hidden"
          style={{
            width: "calc(370px * 3 + 12px * 2)", // card width * SLIDES_TO_SHOW + gap * 2
          }}
        >
          <div
            className="flex gap-5"
            style={{
              transform: `translateX(-${offset}px)`,
              transition: "transform 0.1s linear",
              willChange: "transform",
            }}
          >
            {slides.map((testimonial, idx) => (
              <div
                key={idx}
                className="slide bg-white rounded-2xl dark:bg-gray-800 p-7 flex flex-col min-w-[370px] max-w-[370px] shadow-sm border border-gray-200"
                style={{ minHeight: "220px" }}
              >
                <FaQuoteLeft size={28} className="text-blue-500 mb-2" />
                <p className="text-gray-700 dark:text-gray-200 text-base mb-8">{testimonial.text}</p>
                <div className="flex items-center gap-3 mt-auto">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="rounded-full w-12 h-12 object-cover border"
                  />
                  <div>
                    <div className="font-bold text-base text-black dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 dark:text-gray-300 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={slideNext}
          aria-label="Next"
          className="absolute right-20 sm:right-0 sm:top-1/2 top-70 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 md:p-3 z-10 hover:bg-blue-50 transition"
        >
          <MdArrowForwardIos size={24} />
        </button>
      </div>
    </section>
  );
}
