import profile from "../assets/images/profile.png";
import { Link } from "react-router-dom";

import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaDownload, } from "react-icons/fa";

function Home({ darkMode }) {

  return (

    <section
      id="home"
      className={`relative  min-h-screen overflow-hidden flex items-center py-28 transition-all duration-500 ${darkMode ? "bg-[#08121F]" : "bg-[#EEF5FF]"
        }`}>



      <div
        className={`absolute top-10 right-0 w-[137.5] h-[137.5] transition-all duration-500 rounded-full blur-3xl opacity-30 ${darkMode ? "bg-blue-700" : "bg-blue-200"
          }`}
      ></div>

      <div
        className={`absolute bottom-0 left-0 w-[87.5] h-[87.5x] transition-all duration-500 rounded-full blur-3xl opacity-50 ${darkMode ? "bg-blue-900" : "bg-blue-100"
          }`}
      ></div>

      <div className="container relative z-10 mx-auto px-8 lg:px-20">

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">



          <div className={`rounded-[35px] p-6 sm:p-8 lg:p-10 flex flex-col items-center transition-all duration-500 shadow-[0_20px_50px_rgba(59,130,246,0.12)]
${darkMode
              ? "bg-[#10233B] border border-blue-800"
              : "bg-white border border-blue-100"
            }`}>

            <div className="relative">

              <div
                className={`absolute inset-0 rounded-full transition-all duration-500
                scale-105 sm:scale-105 lg:scale-110
                ${darkMode ? "bg-blue-800" : "bg-blue-100" }`}></div>

              <img
                src={profile}
                alt="Profile"
                className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-cover aspect-square shrink-0"
              />

            </div>

            <h2 className={`mt-8 text-4xl sm:text-5xl lg:text-5xl whitespace-nowrap  transition-all duration-500 font-extrabold text-center
                            ${darkMode ? "text-white" : "text-black"  }`}>

              Riya

              <span className="text-blue-500">

                {" "}S Menon

              </span>

            </h2>

            <p className={`mt-4 text-xl transition-all duration-500 font-semibold ${darkMode ? "text-white" : "text-black"
              }`}>

              Full Stack Developer

            </p>

            <p className="text-blue-500 font-medium mt-2">

              MERN Stack | AI & ML | UI/UX

            </p>

            <div className="flex gap-5 mt-10">

              <a
                href="https://github.com/Riyamenon09" target="_blank"
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg flex justify-center items-center transition-all duration-500 ${darkMode
                  ? "bg-[#2a4c7c] text-black hover:bg-gray-600 hover:text-white"
                  : "bg-white text-gray-600 hover:bg-gray-600 hover:text-white"
                  }`}
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/riya-s-menon-553951359/" target="_blank"
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg flex justify-center items-center transition-all duration-500 ${darkMode
                  ? "bg-[#2a4c7c] text-blue-500 hover:bg-blue-500 hover:text-white"
                  : "bg-white text-blue-500 hover:bg-blue-500 hover:text-white"
                  }`}
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/riyamenon07/" target="_blank"
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg flex justify-center items-center transition-all duration-500 ${darkMode
                  ? "bg-[#2a4c7c] text-pink-500 hover:bg-pink-500 hover:text-white"
                  : "bg-white text-pink-500 hover:bg-pink-500 hover:text-white"
                  }`}
              >
                <FaInstagram />
              </a>

              <a
                href="mailto:riyamittu2004@gmail.com" target="_blank"
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg flex justify-center items-center transition-all duration-500 ${darkMode
                  ? "bg-[#2a4c7c] text-red-500 hover:bg-red-500 hover:text-white"
                  : "bg-white text-red-500 hover:bg-red-500 hover:text-white"
                  }`}
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

          <div className={`lg:col-span-2 rounded-[35px] p-6 sm:p-8 lg:p-12 relative overflow-hidden transition-all duration-500 shadow-[0_20px_50px_rgba(59,130,246,0.12)]
${darkMode ? "bg-[#10233B] border border-blue-800" : "bg-white border border-blue-100" }`}>

            <div
              className={`absolute
              -right-12 sm:-right-16 lg:-right-20
              top-4 sm:top-6 lg:top-10
              w-52 h-52
              sm:w-64 sm:h-64
              lg:w-80 lg:h-80
              rounded-full
              opacity-40
              transition-all duration-500 ${darkMode ? "bg-blue-800" : "bg-blue-100"
                              }`}
                          ></div>

                        <div
                          className={`absolute
            -bottom-12 sm:-bottom-16 lg:-bottom-24
            right-4 sm:right-10 lg:right-20
            w-56 h-56
            sm:w-72 sm:h-72
            lg:w-96 lg:h-96
            rounded-full
            opacity-40
            transition-all duration-500  ${darkMode ? "bg-blue-900" : "bg-blue-100"
                            }`}
                        ></div>

            <div className="relative z-10">

              <p className="uppercase tracking-[3px] sm:tracking-[5px] lg:tracking-[6px] text-blue-500 font-bold">

                ABOUT ME

              </p>



              <p className={`text-[18px] transition-all duration-500 sm:text-2xl lg:text-3xl mt-5 font-semibold leading-snug ${darkMode ? "text-white" : "text-black"
                }`}>

                Full Stack

                <span className="text-blue-500 text-[18px] sm:text-2xl">
                  {" "} | AI & ML • UI/UX
                </span>

              </p>

              <div className="w-64 sm:w-75 lg:w-95 h-1 rounded-full bg-blue-500 mt-5 mb-8"></div>

              <p className={`text-base sm:text-lg lg:text-xl
              leading-8 sm:leading-9 lg:leading-10
              transition-all duration-500 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>

                I'm passionate about building full-stack web applications that
                combine clean backend architecture with modern, responsive user
                interfaces. I enjoy designing intuitive UI/UX experiences,
                developing scalable backend systems, and solving real-world
                problems through technology.

              </p>

              <p className={`text-base sm:text-lg lg:text-xl
                leading-8 sm:leading-9 lg:leading-10
                mt-6 lg:mt-10
                transition-all duration-500 ${darkMode ? "text-white" : "text-gray-600"
                                }`}>

                Completed B.Tech in Computer Science Engineering from

                <span className={`font-semibold transition-all duration-500 ${darkMode ? "text-white" : "text-black"}`}>

                  {" "}VIT Chennai

                </span>

                , with a strong focus on Artificial Intelligence, Machine Learning,MERN Stack, Generative AI, and LLMs.

              </p>


              <div className="flex flex-col sm:flex-row gap-4 mt-8 lg:mt-12">

                                <a
                  href="/certificates/RIYAMENON_RESUME.pdf"
                  download
                  className="flex items-center justify-center gap-3
                  bg-blue-500 text-white
                  px-5 py-3
                  sm:px-6 sm:py-3
                  lg:px-8 lg:py-4
                  text-sm sm:text-base
                  rounded-xl shadow-lg
                  hover:bg-blue-700 hover:scale-105
                  transition-all duration-300"
                >
                  <FaDownload />
                  Download Resume
                </a>


                <Link to="/contact">
                  <button
                    className="w-full flex items-center justify-center
                    px-5 py-3
                    sm:px-6 sm:py-3
                    lg:px-8 lg:py-4
                    text-sm sm:text-base
                    border-2 border-blue-600
                    text-blue-600
                    rounded-xl font-semibold
                    hover:bg-blue-600 hover:text-white
                    hover:scale-105
                    transition-all duration-300">
                    Contact Me
                  </button>
                </Link>

              </div>



            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Home;