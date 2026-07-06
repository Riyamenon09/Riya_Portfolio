import { FaReact, FaNodeJs, FaDatabase, FaTools,FaChartLine, FaBrain, FaChartBar, FaPalette, FaRegFileExcel, FaPython, FaJava, FaCode } from "react-icons/fa";
import { TbBrandAdobePhotoshop, TbBrandCpp } from "react-icons/tb";
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiBootstrap, SiTailwindcss, SiNodedotjs, SiExpress, SiFlask, SiDjango, SiMongodb,
  SiMysql, SiGit, SiPostman, SiFigma, SiDocker, SiC, SiNumpy,SiPandas,SiPlotly,SiScikitlearn,SiTensorflow,SiKeras,SiOpencv
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

function Skills({ darkMode }) {
  const skills = [
    {
      title: "Programming Languages",
      icon: <FaCode className="text-3xl text-blue-500" />,
      items: [
        { name: "Python", icon: <FaPython className="text-blue-600" /> },
        { name: "Java", icon: <FaJava className="text-red-400" /> },
        { name: "C", icon: <SiC className="text-blue-600" /> },
        { name: "C++", icon: <TbBrandCpp className="text-blue-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      ],
    },

    {
      title: "Frontend",
      icon: <FaReact className="text-3xl text-blue-500" />,
      items: [
        { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <SiCss className="text-blue-500" /> },
        { name: "JS", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "React", icon: <SiReact className="text-cyan-500" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
      ],
    },

    {
      title: "Backend",
      icon: <FaNodeJs className="text-3xl text-green-600" />,
      items: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
        { name: "Express.js", icon: <SiExpress className="text-black" /> },
        { name: "Flask", icon: <SiFlask className="text-black" /> },
        { name: "Django", icon: <SiDjango className="text-green-600" /> },
        { name: "REST API", icon: <FaTools className="text-blue-800" /> },
      ],
    },

    {
      title: "Database",
      icon: <FaDatabase className="text-3xl text-orange-500" />,
      items: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "MySQL", icon: <SiMysql className={darkMode ? "text-white" : "text-blue-800"} /> },
      ],
    },

    {
      title: "AI & ML",
      icon: <FaBrain className="text-3xl text-purple-600" />,
      items: [
        { name: "NumPy", icon: <SiNumpy className="text-blue-500" /> },
        { name: "Pandas", icon: <SiPandas className="text-purple-600" /> },
        { name: "ML", icon: <FaBrain className="text-black" /> },
        { name: "Matplotlib", icon: <SiPlotly className="text-orange-500" /> },
        { name: "Seaborn", icon: <FaChartLine className="text-cyan-500" /> },
        { name: "DL", icon: <FaBrain className="text-black" /> },
        { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
        { name: "XAI", icon: <FaBrain className="text-black" /> },
      ],
    },
    {
      title: "Data & Analytics",
      icon: <FaChartBar className="text-3xl text-yellow-500" />,
      items: [
        {
          name: "Power BI",
          icon: <FaChartBar className="text-yellow-500" />,
        },
        {
          name: "Excel",
          icon: <FaRegFileExcel className="text-green-600" />,
        },
      ],
    },

    {
      title: "Design",
      icon: <FaPalette className="text-3xl text-pink-500" />,
      items: [
        {
          name: "Figma",
          icon: <SiFigma className="text-pink-500" />,
        },
        {
          name: "Adobe Photoshop",
          icon: <TbBrandAdobePhotoshop className="text-blue-600" />,
        },
        {
          name: "UI / UX Design",
          icon: <FaPalette className="text-purple-500" />,
        },
      ],
    },

    {
      title: "Tools",
      icon: <FaTools className="text-3xl text-blue-500" />,
      items: [
        {
          name: "Git",
          icon: <SiGit className="text-orange-500" />,
        },
        {
          name: "Postman",
          icon: <SiPostman className="text-orange-500" />,
        },
        {
          name: "Docker",
          icon: <SiDocker className="text-blue-500" />,
        },
      ],
    },

  ];
  return (
    <section
      id="skills"
      className={`min-h-screen py-16 lg:py-20 pb-28 overflow-hidden transition-colors duration-500 ${darkMode ? "bg-[#08121F]" : "bg-[#EEF5FF]"
        }`}
    >

      <div className="container mx-auto px-5 sm:px-6 lg:px-20">

        <div className="text-center mb-4">

          <h2 className={`text-4xl mt-14 sm:text-5xl font-extrabold transition-colors duration-500 ${darkMode ? "text-white" : "text-slate-800"
            }`}>
            SKILLS
          </h2>

          <div className="w-24 h-1 bg-blue-500 rounded-full mx-auto mt-4"></div>

        </div>

        <p className={`text-center mt-4 text-sm sm:text-base max-w-2xl mx-auto transition-colors duration-500 ${darkMode ? "text-gray-400" : "text-gray-500"
          }`}>
          Languages, frameworks, databases and AI technologies
          that I use to build modern applications.
        </p>



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10 lg:mt-16">

          {skills.map((skill, index) => (

            <div
              key={index}
              className={`rounded-3xl  h-full shadow-lg p-5 sm:p-6 lg:p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${darkMode
                ? "bg-[#10233B] border border-blue-800"
                : "bg-white border border-blue-100"
                }`}
            >

              <div className="flex items-center gap-3 sm:gap-4">

                <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl flex justify-center items-center transition-colors duration-500 ${darkMode ? "bg-blue-900" : "bg-blue-50"
                  }`}>

                  {skill.icon}

                </div>

                <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold transition-colors duration-500 ${darkMode ? "text-white" : "text-black"
                  }`}>

                  {skill.title}

                </h3>

              </div>



              <div className="flex flex-wrap  gap-2 sm:gap-3 mt-5">

                {skill.items.map((item) => (

                  <span
                    key={item.name}
                    className={`group flex items-center gap-1.5
                    px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2
                    rounded-full border text-xs sm:text-sm lg:text-base
                    font-medium cursor-pointer hover:scale-105
                    transition-all duration-300 ${darkMode
                        ? "bg-[#1B365D] border-blue-700 text-white hover:bg-blue-500"
                        : "bg-white border-black text-black hover:bg-blue-300 hover:text-white"
                      }`}
                  >

                    <span className="text-sm sm:text-base lg:text-lg group-hover:rotate-12 transition-transform duration-300">

                      {item.icon}

                    </span>

                    <span>

                      {item.name}

                    </span>

                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>



      </div>

    </section>
  )
}
export default Skills