import {
  UserCog,
  Rocket,
  Award,
  CheckCircle,
} from 'lucide-react'; 
import React from 'react';

const values = [
  {
    icon: <UserCog className="w-6 h-6 text-blue-700" />,
    title: 'Student First',
    description:
      "Every decision we make prioritizes our learners' growth.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-blue-700" />,
    title: 'Innovation',
    description:
      'Constantly evolving our method to provide good education.',
  },
  {
    icon: <Award className="w-6 h-6 text-blue-700" />,
    title: 'Excellence',
    description:
      'Maintaining the highest standards in everything we do.',
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-blue-700" />,
    title: 'Impact',
    description:
      "Creating meaningful change in our students' careers and lives.",
  },
];

const CoreValues = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 pb-45 pt-25 px-4">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-50 mb-12">
        Our Core <span className="text-blue-600">Values</span>
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {values.map((val, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl dark:bg-blue-200 shadow-sm p-6 flex items-start gap-4"
          >
            <div className="bg-blue-100 rounded-lg p-3">{val.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {val.title}
              </h3>
              <p className="text-gray-600">{val.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
