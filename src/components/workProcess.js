import React from "react";
import WorkSteps from "./workSteps";
import img1 from "../assets/plan.png"
import img2 from "../assets/build.png"
import img3 from "../assets/test.png"
import img4 from "../assets/launch.png"

const workStepData = [
  {
    id: 1,
    title: "Plan & Research",
    description:
      "I dive into understanding project goals, analyze requirements, and explore the best tech stack to build a strong foundation.",
    image: img1,
    color: "linear-gradient(135deg, #6366f1, #a855f7)", // Indigo → Purple
  },
  {
    id: 2,
    title: "Build & Develop",
    description:
      "Using the MERN stack and AI tools, I write clean, scalable, and efficient code to turn ideas into reality.",
    image: img2,
    color: "linear-gradient(135deg, #06b6d4, #3b82f6)", // Cyan → Blue
  },
  {
    id: 3,
    title: "Test & Refine",
    description:
      "I rigorously test, debug, and optimize every feature — ensuring reliability, speed, and seamless performance.",
    image: img3,
    color: "linear-gradient(135deg, #f59e0b, #ef4444)", // Amber → Red
  },
  {
    id: 4,
    title: "Launch & Impact",
    description:
      "I deliver polished projects — from web apps to ML models — that create real-world impact and user satisfaction.",
    image: img4,
    color: "linear-gradient(135deg, #22c55e, #16a34a)", // Green shades
  },
];

const WorkProcess = () => {
  return (
    <section className="workprocess-container" id="work-process">
      {/* Top Heading */}
      <div className="workprocess-text">
        <h2 className="section-title"> My Work Process</h2>
        <p className="section-desc highlight">
          Turning <span className="gradient-text">ideas</span> into{" "}
          <span className="gradient-text">impactful solutions</span>.
        </p>
        <p className="section-desc">
          From brainstorming to launching, I blend creativity and technology
          to craft seamless digital experiences.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="workprocess-grid">
        {workStepData.map((step, index) => (
          <WorkSteps
            key={index}
            data={step}
            style={index % 2 === 1 ? "step-box step-box-alt" : "step-box"}
          />
        ))}
      </div>

      {/* Internal CSS */}
      <style>{`
        .workprocess-container {
          padding: 5rem 1rem;
          text-align: center;
        }

        .workprocess-text {
          max-width: 750px;
          margin: 0 auto 3rem auto;
        }

        .section-title {
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 800;
          margin-bottom: 1rem;
          color: #111;
        }

        .section-desc {
          margin-top: 1.2rem;
          font-size: clamp(16px, 2vw, 18px);
          color: #555;
          line-height: 1.8;
        }

        .highlight {
          font-size: 1.2rem;
          font-weight: 600;
        }

        .gradient-text {
          background: linear-gradient(135deg, #6366f1, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
        }

        .workprocess-grid {
          display: grid;
          grid-template-columns: 1fr; /* Mobile: 1 per row */
          gap: 2rem;
          max-width: 1000px;
          margin: auto;
        }

        @media (min-width: 768px) {
          .workprocess-grid {
            grid-template-columns: 1fr 1fr; /* Tablet/Desktop: 2 per row */
          }
        }
      `}</style>
    </section>
  );
};

export default WorkProcess;
