import { useState } from "react";

const Roles = ({ role, index }) => {
  const [mouseHover, setMouseHover] = useState(false);

  return (
    <div
      className={`role-card ${mouseHover ? "active" : ""}`}
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <h3 className="role-title">{role?.title}</h3>
      <p className="role-desc">{role?.description}</p>

      {/* Internal CSS */}
      <style>{`
        .role-card {
          background: white;
          color: #333;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.8s forwards;
        }

        .role-card.active {
          transform: scale(1.05);
          border: 2px solid #6366f1;
          box-shadow: 0px 8px 25px rgba(99,102,241,0.4);
        }

        .role-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .role-desc {
          font-size: 15px;
          line-height: 1.6;
          color: #555;
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Roles;
