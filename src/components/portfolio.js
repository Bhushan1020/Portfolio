import Projects from "./projects";
import card1 from "../assets/portfolio-images/card-1.png";
import card2 from "../assets/portfolio-images/card-2.png";
import card3 from "../assets/portfolio-images/card-3.png";
import card4 from "../assets/portfolio-images/card-4.jpeg";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "Full-Stack (MERN)",
    title: "Scorecrafters | Academic Performance",
    description:
      "Engineered a MERN stack project with backend Express.js + MongoDB and frontend React for academic data visualization and reporting.",
    link: "https://rms-t48e.vercel.app/",
  },
  {
    id: 2,
    image: card2,
    category: "Web Development",
    title: "Excalibur Event Management",
    description:
      "Built an event management website for AR department using React.js, Bootstrap, and JavaScript to streamline coordination and promotion.",
    link: "https://excalibur-2k24.netlify.app/",
  },
  {
    id: 3,
    image: card3,
    category: "Web Development",
    title: "UBF NGO Website",
    description:
      "Designed and developed a WordPress site with HTML, CSS, and JS to enhance online presence and usability for United Beings Foundation.",
    link: "https://ubfngo.org/",
  },
  {
    id: 4,
    image: card4,
    category: "Deep Learning",
    title: "Deepfake Detection (GAN + ResNet)",
    description:
      "Developed a hybrid deep learning model integrating GAN and ResNet for detecting fake faces, enhancing reliability and accuracy.",
    link: "https://drive.google.com/file/d/1QxCWilEc4b1QRKXm9PpAFfC5HRvOj6P8/view?usp=sharing",
  },
];

const Portfolio = () => {
  return (
    <>
      {/* Internal CSS */}
      <style>{`
        .portfolio-container {
          padding: 20px;
          margin-top: 40px;
          margin-bottom: 40px;
        }

        .portfolio-header {
          margin-bottom: 40px;
          text-align: center;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .portfolio-title {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .portfolio-description {
          font-size: 18px;
          color: #6b7280;
          line-height: 1.5;
        }

        /* Grid layout (centered cards) */
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 380px));
          gap: 24px;
          justify-content: center;   /* ✅ keeps cards centered */
          margin: 0 auto;
          max-width: 900px;
        }

        /* Card animation */
        .portfolio-grid > div {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s forwards;
        }
        .portfolio-grid > div:nth-child(1) { animation-delay: 0.1s; }
        .portfolio-grid > div:nth-child(2) { animation-delay: 0.3s; }
        .portfolio-grid > div:nth-child(3) { animation-delay: 0.5s; }
        .portfolio-grid > div:nth-child(4) { animation-delay: 0.7s; }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Hover animation */
        .portfolio-grid > div:hover {
          transform: scale(1.03);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0px 8px 20px rgba(0,0,0,0.15);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .portfolio-grid {
            grid-template-columns: 1fr; /* single column on mobile */
            max-width: 400px;           /* ✅ keep card centered */
          }
          .portfolio-title {
            font-size: 22px;
          }
          .portfolio-description {
            font-size: 14px;
          }
        }
      `}</style>

      {/* Portfolio Section */}
      <div className="portfolio-container" id="portfolio">
        <div className="portfolio-header">
          <p className="portfolio-title">Portfolio</p>
          <p className="portfolio-description">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>

        <div className="portfolio-grid">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
