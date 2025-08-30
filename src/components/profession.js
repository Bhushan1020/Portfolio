import Roles from "./roles";

const rolesData = [
  {
    id: 1,
    title: "Full-Stack Development",
    description:
      "I build scalable and responsive web applications using MERN stack, React.js, Express.js, and MongoDB — delivering robust and maintainable solutions.",
  },
  {
    id: 2,
    title: "Machine Learning & AI",
    description:
      "I design and implement ML/DL models such as GANs and ResNet to solve real-world problems like deepfake detection and recommendation systems.",
  },
  {
    id: 3,
    title: "Problem Solving",
    description:
      "I practice Data Structures and Algorithms regularly on platforms like LeetCode, achieving a 100-day streak and solving 200+ coding problems.",
  },
  {
    id: 4,
    title: "Data Visualization & BI",
    description:
      "I create insightful dashboards and analytics using Power BI, SQL, and Python to transform raw data into meaningful business insights.",
  },
];

const Profession = () => {
  return (
    <section className="services-container" id="services">
      <div className="services-wrapper">
        {/* Left Section */}
        <div className="services-text">
          <h2 className="services-title">What I do?</h2>
          <p className="services-desc">
            I specialize in building full-stack applications, developing AI
            models, solving complex coding challenges, and creating data-driven
            insights through BI tools.
          </p>
          <p className="services-desc">
            My approach blends technical expertise with creativity to deliver
            impactful solutions — from scalable web platforms to advanced AI and
            data analytics.
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=bhushannarawade2003@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="services-btn"
          >
            Say Hello 👋
          </a>
        </div>

        {/* Right Section (Cards) */}
        <div className="services-grid">
          {rolesData.map((role, index) => (
            <Roles role={role} key={index} index={index} />
          ))}
        </div>
      </div>

      {/* Internal CSS */}
      <style>{`
        .services-container {
          position: relative;
          padding: 80px 20px;
          background: linear-gradient(135deg, #6366f1, #a855f7, #ec4899);
          color: white;
          overflow: hidden;
        }

        .services-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          max-width: 1200px;
          margin: auto;
          align-items: center;
        }

        .services-title {
          font-size: clamp(26px, 4vw, 40px);
          font-weight: 800;
          margin-bottom: 20px;
          position: relative;
        }

        .services-title::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 100px;
          height: 4px;
          background: white;
          border-radius: 5px;
          animation: pulse 2s infinite;
        }

        .services-desc {
          font-size: 16px;
          line-height: 1.8;
          margin: 15px 0;
          color: #f1f1f1;
        }

        .services-btn {
          display: inline-block;
          margin-top: 25px;
          background: white;
          color: #4f46e5;
          padding: 12px 28px;
          font-weight: bold;
          font-size: 16px;
          border-radius: 8px;
          text-decoration: none;
          transition: 0.3s ease;
        }

        .services-btn:hover {
          background: #4f46e5;
          color: white;
          box-shadow: 0px 4px 20px rgba(0,0,0,0.3);
        }

        .services-grid {
          display: grid;
          gap: 20px;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }

        /* Animations */
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @media (max-width: 768px) {
          .services-wrapper {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .services-title::after {
            left: 50%;
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Profession;
