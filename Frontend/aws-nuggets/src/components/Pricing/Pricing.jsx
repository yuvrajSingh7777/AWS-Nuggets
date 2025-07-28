import React from "react";

export default function Pricing() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-300 dark:from-gray-300 py-24 px-4 sm:px-10">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Simple, Transparent <span className="text-blue-500">Pricing</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          No hidden fees. No long-term contracts. Choose the plan that fits your AWS learning journey.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-10 max-w-6xl mx-auto">
        {/* Basic Plan */}
        <PlanCard
          title="Basic"
          price="0"
          period="/mo"
          description="Kickstart your AWS journey with free tutorials and community access."
          features={[
            "Basic AWS topics",
            "Community forum access",
            "Basic support",
          ]}
         
        />

        {/* Pro Plan (Most Popular) */}
        <PlanCard
          title="Pro"
          price="29"
          period="/mo"
          popular
          description="Go deeper with full video courses, projects, and expert sessions."
          features={[
            "Advanced AWS Topics",
            "Priority email support",
            "Q&A sessions with experts",
          ]}
          buttonText="Upgrade to Pro"
          buttonStyle="bg-white text-blue-700 dark:bg-gray-300 hover:bg-blue-200 hover:text-black"
        />

       
      </div>
    </section>
  );
}

const PlanCard = ({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  buttonStyle,
  popular,
}) => {
  return (
    <div
      className={`relative flex flex-col justify-between flex-1 rounded-2xl shadow-lg ${
        popular
          ? "bg-blue-600 dark:bg-blue-700 text-white dark:text-gray-200 border-2 border-blue-700 px-10 py-12 z-10"
          : "bg-white dark:bg-gray-300 text-gray-800 dark:text-black border border-gray-200 px-8 py-10"
      } transition-transform hover:-translate-y-1 hover:shadow-xl`}
    >
      {popular && (
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-6 py-1 rounded-full text-sm font-semibold uppercase tracking-wide shadow">
          Most Popular
        </div>
      )}

      <div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className={`mb-6 ${popular ? "opacity-95" : "text-gray-600"}`}>{description}</p>
        <div className="flex items-end mb-7">
          <span className="text-5xl font-extrabold">{`₹${price}`}</span>
          <span className="ml-2 text-xl opacity-80">{period}</span>
        </div>
        <ul className={`mb-10 space-y-3 ${popular ? "opacity-95" : "text-gray-700"}`}>
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className={`font-bold  ${popular ?  "text-gray-50":"text-[darkblue]"}`}>✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
          
      <button
        className={`w-full py-3 text-center font-semibold rounded-lg shadow ${buttonStyle} transition`}
      >
        {buttonText}
      </button>
    </div>
  );
};
