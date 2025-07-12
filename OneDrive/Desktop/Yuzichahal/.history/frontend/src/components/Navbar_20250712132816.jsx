
// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import logo from "../assets/logo.png"; // Replace with your actual logo path

// const API_KEY = "AIzaSyB39IqC2w3zr9SIbAsf3AWyEwD9niQ93vU";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [translating, setTranslating] = useState(false);
//   const [selectedLang, setSelectedLang] = useState(
//     localStorage.getItem("selectedLang") || ""
//   );

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const handleJoinNowClick = () => {
//     navigate("/signup");
//   };

//   const handleSignInClick = () => {
//     navigate("/login");
//   };

//   const translatePage = async (targetLang) => {
//     if (!targetLang) return;
//     setTranslating(true);

//     try {
//       const elements = document.querySelectorAll("body *:not(script):not(style)");
//       const textNodes = [];
//       const originalTexts = [];

//       for (const el of elements) {
//         for (const node of el.childNodes) {
//           if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
//             textNodes.push(node);
//             originalTexts.push(node.textContent.trim());
//           }
//         }
//       }

//       if (originalTexts.length === 0) return;

//       const response = await fetch(
//         `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             q: originalTexts,
//             target: targetLang,
//             format: "text",
//           }),
//         }
//       );

//       const data = await response.json();

//       if (data?.data?.translations?.length === textNodes.length) {
//         data.data.translations.forEach((translation, idx) => {
//           textNodes[idx].textContent = translation.translatedText;
//         });
//       } else {
//         console.warn("Mismatch in translation results");
//       }
//     } catch (error) {
//       console.error("Translation error:", error);
//       alert("Failed to translate page. Please try again.");
//     }

//     setTranslating(false);
//   };

//   const handleLanguageChange = (e) => {
//     const lang = e.target.value;
//     setSelectedLang(lang);
//     localStorage.setItem("selectedLang", lang);
//     translatePage(lang);
//   };

//   return (
//     <header className="w-full bg-white shadow-sm">
//       <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
//         {/* Logo */}
//         <div className="flex items-center space-x-3">
//           <img src={logo} alt="Rewear Logo" className="h-14 w-auto object-contain" />
//         </div>

//         {/* Nav Links */}
//         <ul className="hidden md:flex items-center gap-12 text-[#1a3d35] text-[16px] font-medium">
//           <li onClick={() => scrollToSection("home")} className="cursor-pointer hover:text-green-700 transition">
//             Home
//           </li>
//           <li onClick={() => scrollToSection("pricing")} className="cursor-pointer hover:text-green-700 transition">
//             Pricing
//           </li>
//           <li onClick={() => scrollToSection("features")} className="cursor-pointer hover:text-green-700 transition">
//             Features
//           </li>
//         </ul>

//         {/* Right side - Buttons and Language */}
//         <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
//           <div className="flex gap-3 w-full md:w-auto">
//             <button
//               onClick={handleSignInClick}
//               className="bg-[#448269] text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-green-900 transition w-full md:w-auto"
//             >
//               Log In
//             </button>
//             <button
//               onClick={handleJoinNowClick}
//               className="border border-[#448269] text-[#1a3d35] px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-green-100 transition w-full md:w-auto"
//             >
//               Join Now
//             </button>
//           </div>

//           {/* Language selector */}
//           <div className="flex flex-col md:flex-row items-center gap-2">
//             <label htmlFor="language-select" className="text-[#1a3d35] font-medium whitespace-nowrap">
//               Translate:
//             </label>
//             <select
//               id="language-select"
//               className="px-3 py-2 rounded-lg bg-[#447d68] text-white border border-green-700 text-sm focus:outline-none"
//               onChange={handleLanguageChange}
//               disabled={translating}
//               value={selectedLang}
//             >
//               <option value="" disabled>Select</option>
//               <option value="en">English</option>
//               <option value="hi">Hindi</option>
//               <option value="es">Spanish</option>
//               <option value="fr">French</option>
//               <option value="de">German</option>
//               <option value="zh-CN">Chinese</option>
//               <option value="ar">Arabic</option>
//               <option value="mr">Marathi</option>
//             </select>
//           </div>

//           {translating && (
//             <p className="text-sm text-green-500 mt-2 md:mt-0">Translating...</p>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const API_KEY = "AIzaSyB39IqC2w3zr9SIbAsf3AWyEwD9niQ93vU";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [translating, setTranslating] = useState(false);
  const [selectedLang, setSelectedLang] = useState(
    localStorage.getItem("selectedLang") || ""
  );

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleJoinNowClick = () => {
    navigate("/signup");
  };

  const handleSignInClick = () => {
    navigate("/login");
  };

  const translatePage = async (targetLang) => {
    if (!targetLang) return;
    setTranslating(true);

    try {
      const elements = document.querySelectorAll("body *:not(script):not(style)");
      const textNodes = [];
      const originalTexts = [];

      for (const el of elements) {
        for (const node of el.childNodes) {
          if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
            textNodes.push(node);
            originalTexts.push(node.textContent.trim());
          }
        }
      }

      if (originalTexts.length === 0) return;

      const response = await fetch(
        `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            q: originalTexts,
            target: targetLang,
            format: "text",
          }),
        }
      );

      const data = await response.json();

      if (data?.data?.translations?.length === textNodes.length) {
        data.data.translations.forEach((translation, idx) => {
          textNodes[idx].textContent = translation.translatedText;
        });
      } else {
        console.warn("Mismatch in translation results");
      }
    } catch (error) {
      console.error("Translation error:", error);
      alert("Failed to translate page. Please try again.");
    }

    setTranslating(false);
  };

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setSelectedLang(lang);
    localStorage.setItem("selectedLang", lang);
    translatePage(lang);
  };

  return (
    <header className="w-full bg-white shadow-md z-50 sticky top-0">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Rewear Logo"
            className="h-20 w-auto object-contain transition-all duration-300"
          />
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-14 text-[#1a3d35] text-[18px] font-medium">
          <li onClick={() => scrollToSection("home")} className="cursor-pointer hover:text-green-700 transition">
            Home
          </li>
          <li onClick={() => scrollToSection("pricing")} className="cursor-pointer hover:text-green-700 transition">
            Pricing
          </li>
          <li onClick={() => scrollToSection("features")} className="cursor-pointer hover:text-green-700 transition">
            Features
          </li>
        </ul>

        {/* Right side */}
        <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto mt-1">
          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={handleSignInClick}
              className="bg-[#448269] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-green-900 transition-all w-full md:w-auto shadow-md"
            >
              Log In
            </button>
            <button
              onClick={handleJoinNowClick}
              className="border-2 border-[#448269] text-[#1a3d35] px-6 py-3 rounded-xl text-sm font-semibold hover:bg-green-100 transition-all w-full md:w-auto shadow-md"
            >
              Join Now
            </button>
          </div>

          {/* Language selector */}
          <div className="flex flex-col md:flex-row items-center gap-2 mt-2 md:mt-0">
            <label htmlFor="language-select" className="text-[#1a3d35] font-medium text-sm">
              Translate:
            </label>
            <select
              id="language-select"
              className="px-3 py-2 rounded-lg bg-[#447d68] text-white border border-green-700 text-sm focus:outline-none"
              onChange={handleLanguageChange}
              disabled={translating}
              value={selectedLang}
            >
              <option value="" disabled>Select</option>
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="zh-CN">Chinese</option>
              <option value="ar">Arabic</option>
              <option value="mr">Marathi</option>
            </select>
          </div>

          {translating && (
            <p className="text-sm text-green-600 mt-2 md:mt-0 font-medium">Translating...</p>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
