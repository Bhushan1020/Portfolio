import React from "react";

const WorkSteps = ({ data, style }) => {
  return (
    <div className={style} style={{ background: data.color }}>
      {data.image && (
        <img
          src={data.image}
          alt={data.title}
          className="step-icon"
          loading="lazy"
        />
      )}
      <h3 className="step-title">{data.title}</h3>
      <p className="step-desc">{data.description}</p>

      {/* CSS inside component */}
      <style>{`
        .step-box {
          padding: 2rem;
          border-radius: 16px;
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
          transform: translateY(0);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          cursor: pointer;
        }

        .step-box:hover {
          transform: translateY(-8px);
          box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.25);
        }

        .step-box-alt {
          margin-top: 1rem;
        }

        .step-icon {
          width: 70px;
          height: 70px;
          object-fit: contain;
          margin-bottom: 1.2rem;
          animation: bounce 2s infinite;
        }

        .step-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.8rem;
          letter-spacing: 0.5px;
        }

        .step-desc {
          font-size: 1rem;
          line-height: 1.6;
          opacity: 0.95;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </div>
  );
};

export default WorkSteps;
