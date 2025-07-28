import { GiStrong, GiBridge } from 'react-icons/gi';
import { MdTrendingUp } from 'react-icons/md';

const missions = [
  {
    icon: <GiStrong className="text-purple-600" size={36} />,
    bgColor: "bg-purple-100",
    title: "Empower Through Cloud Skills",
    description: "To empower learners with practical, industry-relevant AWS skills",
    textColor: "text-gray-600 dark:text-gray-800",
  },
  {
    icon: <GiBridge className="text-red-400" size={36} />,
    bgColor: "bg-red-100",
    title: "Bridge the Knowledge Gap",
    description: "To simplify complex AWS concepts through curated courses and real-world projects",
    textColor: "text-gray-600 dark:text-gray-800",
  },
  {
    icon: <MdTrendingUp className="text-green-600" size={36} />,
    bgColor: "bg-green-100",
    title: "Support Career Transformation",
    description: "To support students and developers in transforming their careers",
    textColor: "text-gray-600 dark:text-gray-800",
  },
];

export default function MissionSection() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 pb-15 pt-10 px-2 md:px-0">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl dark:text-gray-50 md:text-4xl font-semibold text-gray-900 mb-3">
          Our <span className="text-blue-600 font-bold">Mission</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-400 text-pretty mb-12 text-lg">
          To democratize quality education and create a global community of skilled<br />
          professionals ready to tackle tomorrow&apos;s challenge.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-2">
        {missions.map((item, index) => (
          <div key={index} className="bg-white dark:bg-gray-300 rounded-xl py-12 px-6 flex flex-col items-center">
            <span
              className={`${item.bgColor} flex items-center justify-center rounded-full mb-6`}
              style={{ width: '64px', height: '64px' }}
            >
              {item.icon}
            </span>
            <h3 className="text-xl text-center font-semibold mb-2 text-gray-900 font-[Poppins,sans-serif]">
              {item.title}
            </h3>
            <p className={`${item.textColor} text-center text-base font-[Poppins,sans-serif]`}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
