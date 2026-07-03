import image from "../assets/images/image.png";
import lung from "../assets/images/lung.png";
import eye from "../assets/images/eye.png";
import customer from "../assets/images/customer.png"
import foodhub from "../assets/images/foodhub.png"
import carpool from "../assets/images/carpool.png"
import cellular from "../assets/images/cellular.png"
import donut from "../assets/images/donut.png"
import pizza from "../assets/images/pizza.png"
import customerreport from "../assets/images/customerreport.png"
import sales from "../assets/images/sales.png"
import airbnb from "../assets/images/airbnb.png"
import portfolio from "../assets/images/portfolio.png"

import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function Projects({ darkMode }) {

  const projects = [
    {
      title: "FoodHub",
      image: foodhub,
      description:
        "A full-stack food ordering platform with secure role-based access, restaurant management, cart, and order processing",

      tech: ["HTML", "CSS", "JS", "Node.js", "Express", "MongoDB", "Mongoose", "EJS", "Bootstrap", "JWT"],

      github: "https://github.com/Riyamenon09/foodhub",
      live: "#",
    },
    {
      title: "Portfolio Website",
      image: portfolio,
      description:
        "A responsive portfolio website built using React and Tailwind CSS.",

      tech: ["React", "Tailwind CSS"],

      github: "https://github.com/Riyamenon09/Riya_Portfolio",
      live: "#",
    },
    {
      title: "Andaman Rideshare",
      image: carpool,
      description:
        "A full-stack carpooling platform, featuring secure authentication, REST APIs for ride search and location autocomplete, and a responsive frontend.",

      tech: ["Flask", "HTML", "CSS", "JS", "REST API", "MongoDB"],

      github: "https://github.com/Riyamenon09/Andaman-RideShare",
      live: "#",
    },
    {
      title: "Visit Andaman",
      image: cellular,
      description:
        "A full-stack tourism web application, featuring hotel/package booking, tourist spot exploration.",

      tech: ["Django", "HTML", "CSS", "JS", "MySQL", "REST API", "Bootstrap"],

      github: "https://github.com/Riyamenon09/VisitAndaman",
      live: "#",
    },
    {
      title: "Lung disease classification with XAI techniques",
      image: lung,
      description:
        "An interpretable VGG19-based deep learning system for accurate lung disease classification using multiple Explainable AI (XAI) techniques.",

      tech: ["Python", "Deep Learning", "Explainable AI"],

      github: "https://github.com/Riyamenon09/Lung-disease-detection-and-classification-with-XAI-techniques",
      live: "#",
    },
    {
      title: "Retinal Disease Classification using EfficientNet-B0 & GCN",
      image: eye,
      description:
        "Developed a hybrid deep learning framework combining EfficientNet-B0 and GCN to classify retinal diseases with quantitative biomarker analysis using Computer Vision, achieving 98.7% classification accuracy. (Under publication)",

      tech: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "Computer Vision",
        "EfficientNet-B0",
        "Graph Convolutional Network (GCN)",
        "OpenCV",
        "Scikit-learn",
        "NumPy",
        "Pandas"
      ],

      github: "https://github.com/Riyamenon09/Eye-disease-Classification-and-Detection-using-EfficientNet-AND-Graph-Convolutional-Network",
      live: "#",
    },
    {
      title: "Customer Churn Model",
      image: customer,
      description:
        "Built an end-to-end customer churn prediction system using EDA, feature engineering, model comparison, hyperparameter tuning, and deployment.",

      tech: ["Python", "Machine Learning", "Pandas", "Numpy"],

      github: "https://github.com/Riyamenon09/Customer-Churn-Prediction-using-Machine-Learning",
      live: "#",
    },
    {
      title: "Superstore Sales Dashboard",
      image: sales,
      description:
        "Developed an interactive Power BI dashboard with KPI cards, dynamic filters, and insightful visualizations to analyze sales, profit, customer segments, regional performance, and product trends.",

      tech: [
        "Power BI",
        "Power Query",
        "DAX",
        "KPI",
        "Data Visualization",
        "Excel"
      ],

      github: "https://github.com/Riyamenon09/Superstore-Sales-Dashboard",
      live: "#",
    },
    {
      title: "Customer & Credit Analytics Dashboard",
      image: customerreport,
      description:
        "Built interactive Power BI dashboards by integrating MySQL with Power BI to visualize customer insights, credit analytics, revenue trends, and business KPIs.",

      tech: [
        "Power BI",
        "MySQL",
        "SQL",
        "DAX",
        "Power Query",
        "KPI",
        "Data Visualization",
        "CSV"
      ],

      github: "https://github.com/Riyamenon09/Customer-Credit-Analytics-Dashboard",
      live: "#",
    },
    {
      title: "Donut Delight",
      image: donut,
      description:
        "An interactive Figma prototype featuring six unique donut varieties with a vibrant UI, smooth navigation, and an intuitive user experience.",

      tech: ["Python", "Deep Learning", "Machine Learning", "Pandas", "Numpy"],

      github: "#",
      live: "https://www.figma.com/proto/4phgKlkWAc5yH0nIANkGjO/DONUTS?node-id=4-87&t=gUrfE1WDpH6QheO5-0&scaling=scale-down&content-scaling=fixed&page-id=4%3A86",
    },
    {
      title: "Pizza Carousel UI",
      image: pizza,
      description:
        "Designed a modern pizza ordering interface in Figma with an interactive image carousel, allowing users to preview different pizzas by selecting thumbnails.",

      tech: ["Python", "Machine Learning", "Pandas", "Numpy"],

      github: "#",
      live: "https://www.figma.com/proto/ynDywoh1emfvqcOMDSrd0f/Pizza?node-id=11-2&t=TbVi9NZtfMeuvHvc-0&scaling=scale-down&content-scaling=fixed&page-id=9%3A47&starting-point-node-id=11%3A2",
    },
    {
      title: "Airbnb Clone UI/UX",
      image: airbnb,
      description:
        "Designed a high-fidelity Airbnb-inspired mobile prototype in Figma featuring destination browsing, category filters, property listings, and intuitive navigation.",

      tech: [
        "Figma",
        "UI Design",
        "UX Design",
        "Prototyping",
        "Wireframing"
      ],

      github: "#",
      live: "https://www.figma.com/proto/X0P1Q1TE0vYVLSp3nBRCbS/Airbnb?node-id=42-46&p=f&t=JDjiWIy1x5zLVVsc-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
    },
  ];

  return (
    <section
      id="projects"
      className={`py-16 lg:py-20 overflow-hidden transition-colors duration-500 ${darkMode ? "bg-[#08121F]" : "bg-[#EEF5FF]"
        }`}
    >
      <div className="container mx-auto px-5 sm:px-6 lg:px-20">

        <div className="text-center">

          <h2 className={`text-4xl sm:text-5xl font-extrabold transition-colors duration-500 ${darkMode ? "text-white" : "text-slate-800"
            }`}>
            MY PROJECTS
          </h2>

          <div className="w-44 h-1 bg-blue-500 rounded-full mx-auto mt-4"></div>

        </div>

        <p className={`text-center mt-4 max-w-2xl mx-auto text-sm sm:text-base transition-colors duration-500 ${darkMode ? "text-gray-400" : "text-gray-600"
          }`}>
          Some of my projects showcasing my Full Stack Development
          and Machine Learning skills.
        </p>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 mt-10 lg:mt-16">

          {projects.map((project, index) => (

            <div
              key={index}
              className={`rounded-3xl h-full overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 ${darkMode
                ? "bg-[#10233B] border border-blue-800"
                : "bg-white border border-gray-200"
                }`}
            >

              {/* Project Image */}

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-44 sm:h-48 object-cover transition-all duration-500 hover:scale-105 ${darkMode ? "brightness-90" : ""
                    }`}
                />

              </div>

              {/* Content */}

              <div className="p-5 sm:p-6">

                {/* Title + Icons */}

                <div className="flex justify-between items-start gap-3">

                  <h3 className={`text-xl sm:text-2xl font-bold transition-colors duration-500 ${darkMode ? "text-white" : "text-black"
                    }`}>
                    {project.title}
                  </h3>

                  <div className="flex gap-3">

                    {/* GitHub Button */}

                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex justify-center items-center transition-all duration-500 ${darkMode
                            ? "bg-[#1B365D] text-white hover:bg-gray-700"
                            : "bg-gray-100 text-black hover:bg-black hover:text-white"
                          }`}
                      >
                        <FaGithub className="text-lg" />
                      </a>
                    )}

                    {/* Live / Demo / Figma Button */}

                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex justify-center items-center transition-all duration-500 ${darkMode
                            ? "bg-blue-900 text-blue-300 hover:bg-blue-500 hover:text-white"
                            : "bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white"
                          }`}
                      >
                        <FiExternalLink className="text-xl" />
                      </a>
                    )}

                  </div>

                </div>

                {/* Description */}

                <p className={`mt-3
text-sm sm:text-base
leading-6 sm:leading-7 transition-colors duration-500 ${darkMode ? "text-gray-300" : "text-gray-500"
                  }`}>
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-2 mt-5">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className={`px-2.5 sm:px-3
py-1 rounded-full text-xs sm:text-sm font-medium transition-all duration-500 ${darkMode
                          ? "bg-blue-900 text-blue-200 hover:bg-blue-500 hover:text-white"
                          : "bg-blue-100 text-blue-700 hover:bg-blue-600 hover:text-white"
                        }`}
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;