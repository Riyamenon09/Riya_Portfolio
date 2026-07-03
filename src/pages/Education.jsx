import { FaGraduationCap } from "react-icons/fa";

function Education({darkMode}) {

    const education = [
        {
            degree: "B.Tech in CSE",
            specialization: "Artificial Intelligence & Machine Learning",
            institute: "Vellore Institute of Technology",
            location: "Kelambakkam, Chennai",
            duration: "2022 - 2026",
            score: "CGPA : 8.87",
            side: "left"
        },
        {
            degree: "Kendriya Vidyalaya No.2",
            stream: "PCM (Physics, Chemistry & Mathematics)",
            institute: "CBSE 12th Board",
            duration: "2020 - 2022",
            score: "Percentage : 91.4%",
            location: "Minnie Bay, Sri Vijaya Puram",
            side: "right"
        },
        {
            degree: "Sagritara School",
            institute: "CBSE 10th Board",
            duration: "2018 - 2020",
            score: "Percentage : 95.6%",
            location: "Haddo, Sri Vijaya Puram",
            side: "left"
        }
    ];

    return (

        <section id="education" className={`py-16 lg:py-20 overflow-hidden transition-all duration-500 ${
  darkMode ? "bg-[#08121F]" : "bg-[#EEF5FF]"
}`}>

            <div className="container mx-auto px-5 sm:px-6 lg:px-16">

                <div className="text-center mb-10 lg:mb-16">

                    <div className="text-center mb-10 lg:mb-16">

                        <h2 className={`text-4xl sm:text-5xl font-extrabold transition-all duration-500 ${
    darkMode ? "text-white" : "text-slate-800"
  }`}>
                            Education
                        </h2>

                        <div className="w-24 h-1 bg-blue-500 rounded-full mx-auto mt-4"></div>

                    </div>

                </div>

                <div className="relative max-w-6xl mx-auto">

                    <div className="absolute left-4 sm:left-5 md:left-1/2 top-0 h-full w-1 bg-blue-300 md:-translate-x-1/2"></div>

                    {
                        education.map((item, index) => (

                            <div
                                key={index}
                                className={`relative flex mb-16 ${item.side === "left" ? "md:justify-start" : "md:justify-end"
                                    } justify-end`}
                            >

                                <div className={`w-[calc(100%-2.5rem)] md:w-5/12 rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 border transition-all duration-500 ${
  darkMode
    ? "bg-[#10233B] border-blue-800 text-white"
    : "bg-white border-gray-200 text-black"
}`}>

                                    <div className="flex gap-4 items-center mb-5">

                                        <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex justify-center items-center transition-all duration-500 ${
  darkMode ? "bg-blue-900" : "bg-blue-100"
}`}>

                                            <FaGraduationCap className="text-blue-600 text-xl sm:text-2xl" />

                                        </div>

                                        <div>

                                            <h3 className="text-blue-500 text-2xl font-semibold">
                                                {item.degree}
                                            </h3>
                                            <p className={`text-sm sm:text-base font-medium mt-1 transition-all duration-500 ${
  darkMode ? "text-gray-300" : "text-gray-700"
}`}>
                                                {item.specialization || item.stream}
                                            </p>

                                            <p className={`text-sm sm:text-base transition-all duration-500 ${
  darkMode ? "text-gray-400" : "text-gray-500"
}`}>
                                                {item.institute}
                                            </p>


                                        </div>

                                    </div>

                                    <p className={`transition-all duration-500 text-sm sm:text-base ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
  <strong>Duration:</strong> {item.duration}
</p>

<p className={`mt-2 transition-all duration-500 text-sm sm:text-base  ${darkMode ? "text-blue-500" : "text-blue-400"}`}>
  <strong>{item.score}</strong>
</p>

<p className={`mt-2 transition-all duration-500 text-sm sm:text-base ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
  <strong>Location:</strong> {item.location}
</p>

                                </div>

                                <div className="absolute left-5 md:left-1/2 top-8 sm:top-10 md:-translate-x-1/2 -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-blue-500 border-4 border-white"></div>

                            </div>

                        ))
                    }

                </div>

            </div>

        </section>

    );

}

export default Education;