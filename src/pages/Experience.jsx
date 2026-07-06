import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle, FaExternalLinkAlt,
} from "react-icons/fa";

function Experience({ darkMode }) {
  return (
    <section
      id="experience"
      className={`min-h-screen pb-28 flex items-center py-16 lg:py-20 transition-colors duration-500 ${darkMode ? "bg-[#08121F]" : "bg-blue-50"
        }`}>
      <div className="container mx-auto px-5 sm:px-6 lg:px-20">
        <div className="text-center mb-8 lg:mb-10">

          <h2 className={`text-4xl mt-14 lg:mt-20 sm:text-5xl font-extrabold transition-colors duration-500 ${darkMode ? "text-white" : "text-slate-800"
            }`}>
            EXPERIENCE
          </h2>

          <div className="w-24 h-1 bg-blue-500 rounded-full mx-auto mt-4"></div>

        </div>



        <div className={`max-w-4xl mx-auto rounded-3xl shadow-xl p-5 sm:p-7 lg:p-10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ${darkMode
          ? "bg-[#10233B] border border-blue-800"
          : "bg-white border border-blue-100"
          }`}>



          <div className="flex items-start gap-3 sm:gap-4 mb-6">

            <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex justify-center items-center transition-all duration-500 ${darkMode ? "bg-blue-900" : "bg-blue-100"
              }`}>

              <FaBriefcase className="text-blue-500 text-2xl" />

            </div>

            <div>

              <h3 className={`text-[18px] sm:text-2xl md:text-3xl font-bold leading-tight transition-colors duration-500 ${darkMode ? "text-white" : "text-black"
                }`}>
                Full Stack Developer Intern
              </h3>

              <p className={`text-sm sm:text-base transition-colors duration-500 ${darkMode ? "text-gray-400" : "text-gray-500"
                }`}>
                National Informatics Centre (NIC)
              </p>

            </div>

          </div>



          <div className={`flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 mb-8 transition-colors duration-500 ${darkMode ? "text-gray-300" : "text-gray-600"
            }`}>

            <div className="flex items-center gap-2 text-[14px] sm:text-[20px]">

              <FaMapMarkerAlt className="text-blue-500" />

              Sri Vijaya Puram

            </div>

            <div className="flex items-center gap-2 text-[14px] sm:text-[20px]">

              <FaCalendarAlt className="text-blue-500" />

              May 2025 – July 2025

            </div>

          </div>



          <div className="space-y-4">




            <div className="flex gap-2 sm:gap-3">

              <FaCheckCircle className="text-green-500 mt-1 shrink-0" />

              <p className={`text-sm sm:text-base leading-7 sm:leading-8 transition-colors duration-500 ${darkMode ? "text-gray-300" : "text-gray-700"
                }`}>
                Collaborated with a senior developer to build the Integrated Petition Management System (IPMS) as a Full Stack Developer Intern.
              </p>

            </div>

            <div className="flex gap-2 sm:gap-3">

              <FaCheckCircle className="text-green-500 mt-1 shrink-0" />

              <p className={`text-sm sm:text-base leading-7 sm:leading-8 transition-colors duration-500 ${darkMode ? "text-gray-300" : "text-gray-700"
                }`}>
                Developed responsive web interfaces using HTML, CSS, JavaScript, jQuery, Bootstrap, DataTables, and integrated backend functionality with Django ORM and MySQL (HeidiSQL).
              </p>

            </div>

            <div className="flex gap-2 sm:gap-3">

              <FaCheckCircle className="text-green-500 mt-1 shrink-0" />

              <p className={`text-sm md:text-base leading-7 transition-colors duration-500 ${darkMode ? "text-gray-300" : "text-gray-700"
                }`}>
                Implemented an NLP-based document navigation feature using spaCy to automatically extract page numbers from user input and open uploaded documents at the relevant page.
              </p>

            </div>

            <div className="flex gap-2 sm:gap-3">

              <FaCheckCircle className="text-green-500 mt-1 shrink-0" />

              <p className={`text-sm md:text-base leading-7 transition-colors duration-500 ${darkMode ? "text-gray-300" : "text-gray-700"
                }`}>
                Built analytics dashboards and complaint management modules with cascade deletion functionality.
              </p>

            </div>

          </div>


          <div className="flex flex-wrap gap-3 mt-10">

            {[
              "HTML",
              "CSS",
              "JS",
              "Python",
              "Bootstrap",
              "jQuery",
              "Django",
              "MySQL",
              "spaCy",
              "HeidiSQL"
            ].map((skill) => (
              <span
                key={skill}
                className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${darkMode
                  ? "bg-blue-900 text-blue-200 hover:bg-blue-500 hover:text-white"
                  : "bg-blue-100 text-blue-700 hover:bg-blue-500 hover:text-white"
                  }`}>
                {skill}
              </span>
            ))}

          </div>


          <div className="mt-10">

            <a
              href="/certificates/internship.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-3 w-full sm:w-fit justify-center px-5 sm:px-6 py-3
              text-sm sm:text-base rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300 ${darkMode
                  ? "bg-blue-600 text-white hover:bg-blue-500"
                  : "bg-blue-500 text-white hover:bg-blue-700"
                }`}
            >

              <FaExternalLinkAlt />

              View Certificate

            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;