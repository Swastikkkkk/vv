import React from 'react';
import CountUp from 'react-countup';
import { FaTint, FaPeopleCarry, FaLeaf } from 'react-icons/fa';

const impacts = [
  {
    icon: <FaTint className="text-[#2b7a78] text-5xl mb-4" />,
    label: 'Liters of Water Saved',
    value: 20000,
    suffix: 'L',
    color: 'text-[#2b7a78]',
  },
  {
    icon: <FaPeopleCarry className="text-[#3a506b] text-5xl mb-4" />,
    label: 'People Helped',
    value: 500,
    suffix: '+',
    color: 'text-[#3a506b]',
  },
  {
    icon: <FaLeaf className="text-[#519872] text-5xl mb-4" />,
    label: 'Environmental Wins',
    value: 120,
    suffix: '+',
    color: 'text-[#519872]',
  },
];

const ImpactSection = () => {
  return (
    <section className="bg-white py-20 px-4 w-full">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#1a3d35] mb-12">Our Impact So Far</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="bg-[#f0f4f3] rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-center">{impact.icon}</div>
              <h3 className={`text-3xl font-bold mt-4 ${impact.color}`}>
                <CountUp end={impact.value} duration={2} />{impact.suffix}
              </h3>
              <p className="mt-2 text-[#1a3d35] font-medium">{impact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
