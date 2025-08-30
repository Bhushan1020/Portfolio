import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  return (
    <>
      <div className="profile-container" id="profile">
        <div className="profile-wrapper">
          {/* Avatar Section */}
          <div className="profile-avatar">BN</div>

          {/* Text Content */}
          <div className="profile-text-section">
            <h2 className="profile-title">
              Software Developer | Data Analyst |{" "}
              <span className="gradient-highlight">Web & AI Solutions</span>
            </h2>
            <div className="profile-description">
              <p>
                I specialize in <strong>MERN stack</strong> development and
                <strong> AI-driven solutions</strong>, with experience building{" "}
                <em>event management platforms</em>,{" "}
                <em>result management systems</em>, and a{" "}
                <em>deepfake detection model</em> using GAN + ResNet.
              </p>
              <p>
                Recognized as a{" "}
                <span className="gradient-highlight">
                  Tata Imagination Challenge Semi-Finalist
                </span>{" "}
                and a <strong>consistent LeetCode problem solver</strong>, I
                bring creativity, technical expertise, and problem-solving
                skills to every project.
              </p>
            </div>
            <div className="profile-buttons">
              <a className="btn btn-primary" href="#portfolio">
                My Projects
              </a>
              <a className="btn btn-secondary" href="#!">
                <FontAwesomeIcon icon={faDownload} /> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Internal CSS */}
      <style>{`
        /* Container */
        .profile-container {
          margin-top: 100px;
          position: relative;
          z-index: 10;
          border-radius: 1.5rem;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 2rem;
          box-shadow: 0 8px 32px rgba(0,0,0,0.2);
          background-image: linear-gradient(135deg, #6064FC);
          color: #fff;
        }

        .profile-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        /* Avatar Circle - Responsive */
        .profile-avatar {
          width: clamp(8rem, 20vw, 12rem);   /* scales between 8rem - 12rem */
          height: clamp(8rem, 20vw, 12rem);
          border-radius: 50%;
          background: linear-gradient(135deg, #473D34, #1e293b);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(2rem, 6vw, 3rem); /* text inside scales too */
          font-weight: bold;
          flex-shrink: 0;
          box-shadow: 0 0 25px rgba(99,102,241,0.7);
          animation: floatAvatar 3s ease-in-out infinite;
          max-width: 100%;
        }

        @keyframes floatAvatar {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* Text section */
        .profile-text-section {
          max-width: 40rem;
          width: 100%;
        }

        .profile-title {
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 700;
          margin-bottom: 1.5rem;
          text-align: left;
          line-height: 1.3;
        }

        .gradient-highlight {
          background: linear-gradient(135deg, #22d3ee, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
        }

        .profile-description p {
          font-size: clamp(14px, 2vw, 18px);
          font-weight: 400;
          color: rgba(255,255,255,0.9);
          margin-bottom: 1rem;
          text-align: left;
        }

        /* Buttons */
        .profile-buttons {
          margin-top: 2rem;
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn {
          padding: 0.8rem 1.8rem;
          font-size: clamp(14px, 2vw, 16px);
          border-radius: 8px;
          border: none;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
        }

        .btn-primary {
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          color: white;
          box-shadow: 0 5px 20px rgba(59,130,246,0.5);
        }

        .btn-primary:hover {
          transform: scale(1.05);
          background: linear-gradient(135deg, #2563eb, #4f46e5);
        }

        .btn-secondary {
          background-color: transparent;
          border: 2px solid #fff;
          color: #fff;
        }

        .btn-secondary:hover {
          background: #fff;
          color: #2563eb;
          transform: scale(1.05);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .profile-wrapper {
            flex-direction: column;
            text-align: center;
          }
          .profile-title,
          .profile-description p {
            text-align: center;
          }
          .profile-buttons {
            justify-content: center;
          }
        }

        /* Smooth scroll */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
};

export default Profile;
