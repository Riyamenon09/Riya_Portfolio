import graphic from "../assets/images/graphic.png";
import graphic1 from "../assets/images/graphic1.png";
import cpp from "../assets/images/cpp.png";
import python from "../assets/images/python.png";
import c from "../assets/images/c.png";
import genai from "../assets/images/genai.png";
import { FaEye } from "react-icons/fa";

function Certificates({ darkMode }) {

  const certificates = [

    {
      title: "Adobe UI & UX (Graphic Design) Certification Program",
      company: "Codemithra Ethnus",
      image: graphic,
      live: "/certificates/Ethnus.pdf",
    },
    {
      title: "GEN AI: From Basics to Advanced Level",
      company: "Udemy",
      image: genai,
      live: "/certificates/genai.pdf",
    },

    {
      title: "Adobe Photoshop CC - Essentials Training Course",
      company: "Udemy",
      image: graphic1,
      live: "/certificates/UDEMY_PHOTOSHOP.pdf",
    },

    {
      title: "Certificate for the Completion of Cpp Training",
      company: "Spoken Tutorial Project at IIT Bombay",
      image:cpp,
      live: "/certificates/Cpp.pdf",
    },

    {
      title: "Certificate for the Completion of C Training",
      company: "Spoken Tutorial Project at IIT Bombay",
      image:  c,
      live: "/certificates/C.pdf",
    },
     
    {
      title: "Certificate for the Completion of Python Training",
      company: "Spoken Tutorial Project at IIT Bombay",
      image: python,
      live: "/certificates//Python.pdf",
    },

  ];
  return (

    <section
      id="certificates"
      className={`py-20 pb-28 transition-all duration-500 ${darkMode ? "bg-[#08121F]" : "bg-[#EEF5FF]"
        }`}
    >

      <div className="container mx-auto px-8 lg:px-20">

        

        <div className="text-center">

          <h2 className={`text-3xl mt-14 sm:text-5xl font-extrabold transition-colors duration-500 ${darkMode ? "text-white" : "text-slate-800"
            }`}>
            MY CERTIFICATES
          </h2>

          <div className="w-40 h-1 bg-blue-500 rounded-full mx-auto mt-4"></div>


        </div>

     

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">

          {certificates.map((certificate, index) => (

            <div
              key={index}
              className={`rounded-3xl shadow-lg  hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${darkMode
                  ? "bg-[#10233B] border border-blue-800"
                  : "bg-white border border-gray-200"
                }`}
            >
              <div className="flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-5">


             
                <div className="w-full sm:w-32 md:w-36 shrink-0">

                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-34 sm:h-32 object-cover rounded-2xl transition-all duration-500 hover:scale-105"
                  />

                </div>

           

                <div className="flex-1 flex flex-col justify-between text-center sm:text-left">

                  <div>

                    <h3
                      className={`text-[16px] sm:text-base lg:text-base font-bold leading-snug transition-colors duration-500 ${darkMode ? "text-white" : "text-black"
                        }`}
                    >
                      {certificate.title}
                    </h3>

                    <p
                      className={`mt-2 text-sm sm:text-[14px] lg:text-[14px] font-medium leading-snug ${darkMode ? "text-blue-400" : "text-blue-500"
                        }`}
                    >
                      {certificate.company}
                    </p>

                  </div>

                  <div className="mt-6">

                    <a
                      href={certificate.live}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center justify-center gap-2
                      px-4 py-2
                      sm:px-4 sm:py-3
                      text-sm sm:text-base
                      rounded-xl font-semibold shadow-md
                      transition-all duration-300 hover:scale-105 ${darkMode
                                                ? "bg-blue-600 text-white hover:bg-blue-500"
                                                : "bg-blue-500 text-white hover:bg-blue-700"
                                              }`}
                                          >
                      <FaEye />

                      View Certificate

                    </a>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default Certificates;