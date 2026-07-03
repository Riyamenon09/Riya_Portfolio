import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaRocket, FaGithub, FaPaperPlane, } from "react-icons/fa";
import Coder from "../assets/images/Coder.png"

function Contact({ darkMode }) {
    const roles = [
        "Backend Developer",
        "Data Analyst",
        "Full Stack Developer",
        "AI Engineer",
        "Data Scientist",
        "ML Engineer",
        
    ];
    return (
        <>
            <section id="contact" className={`py-20 transition-all duration-500 ${darkMode ? "bg-[#08121F]" : "bg-[#EEF5FF]"}`}
            >
                <div className="container mx-auto pbe-14 px-5 sm:px-8 lg:px-20">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mt-10 lg:mt-10">
                        <div
                            className={`rounded-3xl p-6 sm:p-8 shadow-lg ${darkMode
                                ? "bg-[#10233B] border border-blue-800"
                                : "bg-white border border-blue-100"
                                }`}
                        >

                            <h4
                                className={`text-2xl sm:text-3xl text-center font-extrabold ${darkMode ? "text-white" : "text-slate-800"
                                    }`}
                            >
                                CONTACT ME
                            </h4>
                            <div className="w-40 h-1 bg-blue-500 rounded-full mx-auto mt-4"></div>
                            <p
                                className={`mt-4 text-sm sm:text-base leading-7 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                                Feel free to contact me for internships,
                                full-time opportunities or collaborations.
                            </p>
                            <div className="space-y-6 mt-10">

                                <div className="flex items-center gap-4">

                                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-400 flex justify-center items-center text-white">

                                        <FaLinkedin />

                                    </div>

                                    <div>

                                        <p className={`font-semibold ${darkMode ? "text-white" : "text-black"
                                            }`}>Linkedin</p>




                                        <a
                                            href="https://www.linkedin.com/in/riya-s-menon-553951359/" target="_blank"
                                            className={"text-blue-500 text-sm sm:text-base break-all"}>https://www.linkedin.com/in/riya-s-menon-553951359/</a>



                                    </div>

                                </div>


                                <div className="flex items-center gap-4">

                                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-400 flex justify-center items-center text-white">

                                        <FaEnvelope />

                                    </div>

                                    <div>

                                        <p className={`font-semibold ${darkMode ? "text-white" : "text-black"
                                            }`}>Email</p>

                                        <a
                                            href="mailto:riyamittu2004@gmail.com" target="_blank"
                                            className={"text-blue-500 text-sm sm:text-base break-all"}>riyamittu2004@gmail.com</a>

                                    </div>

                                </div>
                                <div className="flex items-center gap-4">

                                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-400 flex justify-center items-center text-white">

                                        <FaPhoneAlt />

                                    </div>

                                    <div>

                                        <p className={`font-semibold ${darkMode ? "text-white" : "text-black"
                                            }`}>

                                            Phone

                                        </p>

                                        <a
                                            href="tel:9679540290" target="_blank"
                                            className={"text-blue-500 text-sm sm:text-base break-all"}>9679540290</a>

                                    </div>

                                </div>



                                <div className="flex items-center gap-4">

                                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-400 flex justify-center items-center text-white">

                                        <FaMapMarkerAlt />

                                    </div>

                                    <div>

                                        <p className={`font-semibold ${darkMode ? "text-white" : "text-black"
                                            }`}>

                                            Location

                                        </p>

                                        <p className="text-blue-500 text-sm sm:text-base break-all">

                                            A&N Islands, India

                                        </p>

                                    </div>

                                </div>

                            </div>
                           

                            

                        </div>
                        <div
                            className={`rounded-3xl p-6 sm:p-8 shadow-lg flex items-center justify-center ${darkMode
                                    ? "bg-[#10233B] border border-blue-800"
                                    : "bg-white border border-blue-100"
                                }`}
                        >

                            <div className="text-center w-full">

                                <h4
                                    className={`flex items-center justify-center gap-2 text-2xl sm:text-3xl font-extrabold ${darkMode ? "text-white" : "text-slate-800"
                                        }`}
                                >
                                    <span>Let's Connect</span>
                                    <FaRocket className="text-blue-500 text-xl sm:text-2xl" />
                                </h4>

                                <div className="w-40 h-1 bg-blue-500 rounded-full mx-auto mt-4"></div>

                                
                                

                                <img
                                    src={Coder}
                                    alt="Female Developer"
                                    className="w-64 rounded-3xl sm:w-80 md:w-64 lg:w-64 mx-auto mt-8 transition-transform duration-500 hover:scale-105"
                                />
                                 <h4 className={`text-xl sm:text-2xl mt-8 text-center font-extrabold ${darkMode ? "text-white" : "text-slate-800"
                                }`}
                            >
                                AVAILABLE FOR
                            </h4>
                            <div className="w-40 h-1 bg-blue-500 rounded-full mx-auto mt-4"></div>
                                <div className="flex flex-wrap gap-3 mt-6">

                                {roles.map((role) => (

                                    <span

                                        key={role}

                                        className={`px-3 py-2 text-sm sm:text-base rounded-full font-medium transition-all duration-300 cursor-pointer ${darkMode
                                            ? "bg-blue-900 text-blue-200 hover:bg-blue-500 hover:text-white"
                                            : "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white"
                                            }`}

                                    >

                                        {role}

                                    </span>

                                ))}

                            </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}
export default Contact