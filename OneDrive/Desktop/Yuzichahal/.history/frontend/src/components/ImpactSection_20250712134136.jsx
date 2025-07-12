// import React from 'react';
// import CountUp from 'react-countup';
// import { FaTint, FaPeopleCarry, FaLeaf } from 'react-icons/fa';

// const impacts = [
//   {
//     icon: <FaTint className="text-[#2b7a78] text-5xl mb-4" />,
//     label: 'Liters of Water Saved',
//     value: 20000,
//     suffix: 'L',
//     color: 'text-[#2b7a78]',
//   },
//   {
//     icon: <FaPeopleCarry className="text-[#3a506b] text-5xl mb-4" />,
//     label: 'People Helped',
//     value: 500,
//     suffix: '+',
//     color: 'text-[#3a506b]',
//   },
//   {
//     icon: <FaLeaf className="text-[#519872] text-5xl mb-4" />,
//     label: 'Environmental Wins',
//     value: 120,
//     suffix: '+',
//     color: 'text-[#519872]',
//   },
// ];

// const ImpactSection = () => {
//   return (
//     <section className="bg-white py-20 px-4 w-full">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl font-bold text-[#1a3d35] mb-12">Our Impact So Far</h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {impacts.map((impact, index) => (
//             <div
//               key={index}
//               className="bg-[#f0f4f3] rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300"
//             >
//               <div className="flex justify-center">{impact.icon}</div>
//               <h3 className={`text-3xl font-bold mt-4 ${impact.color}`}>
//                 <CountUp end={impact.value} duration={2} />{impact.suffix}
//               </h3>
//               <p className="mt-2 text-[#1a3d35] font-medium">{impact.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ImpactSection;
import React from 'react';
import CountUp from 'react-countup';
import { FaTint, FaPeopleCarry, FaLeaf, FaGlobeAmericas } from 'react-icons/fa';

const impacts = [
  {
    icon: <FaTint className="text-blue-500 text-6xl mb-4 drop-shadow-md" />,
    label: 'Liters of Water Saved',
    value: 20000,
    suffix: 'L',
    color: 'text-blue-600',
  },
  {
    icon: <FaPeopleCarry className="text-yellow-600 text-6xl mb-4 drop-shadow-md" />,
    label: 'People Helped',
    value: 500,
    suffix: '+',
    color: 'text-yellow-700',
  },
  {
    icon: <FaLeaf className="text-green-600 text-6xl mb-4 drop-shadow-md" />,
    label: 'Environmental Wins',
    value: 120,
    suffix: '+',
    color: 'text-green-700',
  },
];

const ImpactSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#e0f7ec] to-[#f1f8f6] py-20 px-4 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a3d35] mb-4 tracking-tight">
          Our Impact So Far
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Every small action makes a big difference. Here's what our community has achieved together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.03]"
            >
              <div className="flex justify-center">{impact.icon}</div>
              <h3 className={`text-4xl font-bold mt-4 ${impact.color}`}>
                <CountUp end={impact.value} duration={2} />{impact.suffix}
              </h3>
              <p className="mt-2 text-[#1a3d35] font-medium text-lg">{impact.label}</p>
            </div>
          ))}
        </div>

        {/* Earth call to action */}
        <div className="mt-20 text-center flex flex-col items-center justify-center">
          <FaGlobeAmericas className="text-[#1a3d35] text-7xl mb-4 animate-pulse" />
          <h3 className="text-3xl md:text-4xl font-bold text-[#1a3d35]">
            You’re Helping Save the 🌍
          </h3>
          <p className="mt-4 text-gray-600 text-lg max-w-xl">
            With every item reused or donated, we reduce waste, save water, and take one step closer to a greener future.
          </p>
          <button className="mt-6 bg-[#447d68] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#366755] transition-all duration-300 shadow-md">
            Contribute to the Cause
          </button>
        </div>
      </div>

      {/* Soft background globe */}
      <div className="absolute bottom-0 right-0 opacity-10 z-0">
        <FaGlobeAmericas className="text-[250px] text-green-500" />
      </div>
    </section>
  );
};

export default ImpactSection;
