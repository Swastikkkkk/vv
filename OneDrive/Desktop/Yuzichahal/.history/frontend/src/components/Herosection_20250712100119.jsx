// // // import React from 'react';
// // // import heroImage from '../assets/Heroimage.jpg';

// // // const HeroSection = () => {
// // //   return (
// // //     // <section
// // //     //  className="relative z-10 w-screen h-screen text-center text-white px-4 mt-[80px] pb-[100px] w-full"

// // //     //   style={{ backgroundImage: `url(${heroImage})` }}>
    
// // //     //   {/* Dark overlay */}
// // //     //   <div className="absolute inset-0 bg-black/50 z-0" />

// // //     //   {/* Content pushed downward */}
// // //     //   <div className="relative z-10 text-center text-white px-4 mt-[80px] pb-[100px] w-full">
// // //     //     <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
// // //     //       Welcome to Rewear
// // //     //     </h1>
// // //     //     <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto drop-shadow-md mb-6">
// // //     //       Giving fashion a second chance. Shop sustainably, wear consciously.
// // //     //     </p>

// // //     //     <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
// // //     //       <button className="bg-[#447d68] text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-[#366755] transition">
// // //     //         Get Started
// // //     //       </button>
// // //     //       <button className="border border-white text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-white hover:text-[#1a3d35] transition">
// // //     //         Learn More
// // //     //       </button>
// // //     //     </div>
// // //     //   </div>
// // //     // </section>
// // //     <section
// // //   className="w-screen mt-10 h-screen bg-center bg-cover bg-no-repeat relative flex items-start justify-center"
// // //   style={{ backgroundImage: `url(${heroImage})` }}
// // // >
// // //   <div className="absolute inset-0 bg-black/30 z-0" />
  
// // //   <div className="relative z-10 w-full max-w-screen-xl text-center text-white px-4 mt-[80px] pb-[100px]">
// // //     <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
// // //       Welcome to Rewear
// // //     </h1>
// // //     <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto drop-shadow-md mb-6">
// // //       Giving fashion a second chance. Shop sustainably, wear consciously.
// // //     </p>

// // //     <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
// // //       <button className="bg-[#447d68] text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-[#366755] transition">
// // //         Get Started
// // //       </button>
// // //       <button className="border border-white text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-white hover:text-[#1a3d35] transition">
// // //         Learn More
// // //       </button>
// // //     </div>
// // //   </div>
// // // </section>

// // //   );
// // // };

// // // export default HeroSection;
// // import React from 'react';
// // import heroImage from '../assets/Heroimage.jpg';

// // const HeroSection = () => {
// //   return (
// //     <section 
// //       className="w-screen h-screen bg-center bg-cover bg-no-repeat relative flex items-start justify-center overflow-hidden"
// //       style={{ 
// //         backgroundImage: `url(${heroImage})`,
// //         backgroundPosition: 'center 20%', // Adjust vertical position to hide bottom elements
// //         backgroundSize: 'cover'
// //       }}
// //     >
// //       {/* Reduced opacity overlay for better clarity */}
// //       <div className="absolute inset-0 bg-black/20 z-0" />
      
// //       {/* Additional bottom overlay to hide unwanted elements */}
// //       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent z-5" />
      
// //       <div className="relative z-10 w-full max-w-screen-xl text-center text-white px-4 mt-[80px] pb-[100px]">
// //         <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
// //           Welcome to Rewear
// //         </h1>
// //         <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto drop-shadow-md mb-6">
// //           Giving fashion a second chance. Shop sustainably, wear consciously.
// //         </p>
        
// //         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
// //           <button className="bg-[#447d68] text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-[#366755] transition">
// //             Get Started
// //           </button>
// //           <button className="border border-white text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-white hover:text-[#1a3d35] transition">
// //             Learn More
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default HeroSection;
// import React from 'react';
// import heroImage from '../assets/Heroimage.jpg';

// const HeroSection = () => {
//   return (
//     <section 
//       className="w-screen h-screen bg-center bg-cover bg-no-repeat relative flex items-start justify-center overflow-hidden"
//       style={{ 
//         backgroundImage: `url(${heroImage})`,
//         backgroundPosition: 'center 20%', // Adjust vertical position to hide bottom elements
//         backgroundSize: 'cover'
//       }}
//     >
//       {/* Reduced opacity overlay for better clarity */}
//       <div className="absolute inset-0 bg-black/30 z-0" />
      
//       {/* Additional bottom overlay to hide unwanted elements */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent z-5" />
      
//       {/* Center overlay for better text readability */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 z-1" />
      
//       <div className=" mr -20 relative z-10 w-full max-w-4xl text-center text-white px-6 md:px-12 mt-[120px] pb-[100px]">
//         <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-2xl leading-tight">
//           Welcome to Rewear
//         </h1>
//         <p className="text-lg md:text-xl lg:text-2xl font-medium max-w-3xl mx-auto drop-shadow-lg mb-8 leading-relaxed">
//           Giving fashion a second chance. Shop sustainably, wear consciously.
//         </p>
        
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
//           <button className="bg-[#447d68] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#366755] transition-all duration-300 transform hover:scale-105 shadow-lg">
//             Get Started
//           </button>
//           <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-[#1a3d35] transition-all duration-300 transform hover:scale-105 shadow-lg">
//             Learn More
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;