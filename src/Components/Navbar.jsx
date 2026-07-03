import { FaMoon, FaSun, FaLaptopCode } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { GiMoonBats } from "react-icons/gi";
import {FaHome,FaGraduationCap,FaBriefcase,FaTools,FaProjectDiagram,FaEnvelope,} from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  const navItems = [
  {
    label: "Home",
    path: "/",
    icon: <FaHome />,
  },
  {
    label: "Education",
    path: "/education",
    icon: <FaGraduationCap />,
  },
  {
    label: "Experience",
    path: "/experience",
    icon: <FaBriefcase />,
  },
  {
    label: "Skills",
    path: "/skills",
    icon: <FaTools />,
  },
  {
    label: "Projects",
    path: "/projects",
    icon: <FaLaptopCode />,
  },
  {
    label: "Certificates",
    path: "/certificates",
    icon: <GrCertificate />,
  },
  {
    label: "Contact",
    path: "/contact",
    icon: <FaEnvelope />,
  },
];

    return (
  <>
    {/* ===================== TOP NAVBAR ===================== */}

    <nav className="fixed top-0 left-0 w-full z-50">

      <div
        className={`backdrop-blur-xl shadow-lg border-b transition-colors duration-500 ${
          darkMode
            ? "bg-[#08121F]/90 border-blue-900"
            : "bg-white/90 border-blue-100"
        }`}
      >

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Desktop Navbar */}

          <div className="hidden lg:flex items-center justify-between h-20">

            {/* Logo */}

            <Link
              to="/"
              className="text-5xl font-bold bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
              style={{
                fontFamily: "Dancing Script",
                lineHeight: "1.4",
                paddingBottom: "4px",
                display: "inline-block",
                overflow: "visible",
              }}
            >
              Riya<span className="text-blue-500">.</span>
            </Link>

            {/* Desktop Navigation */}

            <ul className="flex items-center gap-3 font-medium">

              {navItems.map((item) => (

                <li key={item.path}>

                  <Link
                    to={item.path}
                    className={`group flex flex-col items-center justify-center gap-1 px-5 py-3 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                      darkMode
                        ? "text-gray-300 hover:text-blue-400 hover:bg-blue-900/40 hover:shadow-blue-900/40"
                        : "text-black hover:text-blue-600 hover:bg-blue-50 hover:shadow-blue-200"
                    }`}
                  >

                    <span className="text-[18px] transition-all duration-300 group-hover:scale-125 group-hover:rotate-6">
                      {item.icon}
                    </span>

                    <span className="text-xs font-semibold tracking-wide">
                      {item.label}
                    </span>

                  </Link>

                </li>

              ))}

            </ul>

            {/* Theme Toggle */}

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-14 h-14 text-2xl rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-180 flex items-center justify-center ${
                darkMode
                  ? "bg-blue-900 text-yellow-300 hover:bg-yellow-400 hover:text-black"
                  : "bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white"
              }`}
            >
              {darkMode ? <FaSun /> : <GiMoonBats />}
            </button>

          </div>

          {/* Mobile Top Navbar */}

          <div className="flex lg:hidden items-center justify-between h-20 px-2">

            <Link
              to="/"
              className="text-5xl font-bold bg-linear-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent transition-all duration-300 hover:scale-105"
              style={{
                fontFamily: "Dancing Script",
                lineHeight: "1.4",
                paddingBottom: "4px",
                display: "inline-block",
                overflow: "visible",
              }}
            >
              Riya<span className="text-blue-500">.</span>
            </Link>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-12 h-12 text-2xl rounded-full flex items-center justify-center transition-all duration-300 ${
                darkMode
                  ? "bg-blue-900 text-yellow-300"
                  : "bg-blue-100 text-blue-600"
              }`}
            >
              {darkMode ? <FaSun /> : <GiMoonBats />}
            </button>

          </div>

        </div>

      </div>

    </nav>

    {/* ===================== MOBILE BOTTOM NAVBAR ===================== */}

    <nav
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] lg:hidden z-50 rounded-3xl backdrop-blur-2xl shadow-2xl border transition-all duration-500 ${
        darkMode
          ? "bg-[#08121F]/95 border-blue-900"
          : "bg-white/95 border-blue-100"
      }`}
    >

      <ul
        className="flex justify-around items-center h-18 px-3 overflow-x-auto"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >

        {navItems.map((item) => (

          <li key={item.path} className="shrink-0">

            <Link
              to={item.path}
              className={`group flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? "text-white hover:text-blue-400 hover:bg-blue-900/40"
                  : "text-black hover:text-blue-600 hover:bg-blue-50"
              }`}
            >

              <span className="text-2xl transition-all duration-300 group-hover:scale-125 group-hover:rotate-6">
                {item.icon}
              </span>

              <span className="text-xs font-semibold tracking-wide">
                {item.label}
              </span>

            </Link>

          </li>

        ))}

      </ul>

    </nav>

  </>
);
}

export default Navbar;