import person from "../assets/person.png"; // transparent PNG recommended
import "./introduction.css";

const informationSummaryData = [
  { id: 1, title: "Achievements", description: "Tata Challenge Semi-Finalist" },
  { id: 2, title: "Projects Completed", description: "5+" },
  { id: 3, title: "Coding Problems Solved", description: "200+" },
  { id: 4, title: "Internships", description: "3" },
];

const Introduction = () => {
  return (
    <>
      {/* Internal CSS */}
      <style>{`
        /* Safety reset to prevent width overflow */
        *, *::before, *::after { box-sizing: border-box; }
        html, body { width: 100%; }
        
        #introduction { overflow-x: hidden; } /* clamp any accidental overflow */

        .intro-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto 40px auto;
          padding: 20px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          flex-wrap: wrap;
        }

        .intro-left {
          flex: 1 1 320px;
          min-width: 260px;
        }

        .intro-title {
          font-size: clamp(26px, 5vw, 40px);
          font-weight: 600;
          margin: 0;
          line-height: 1.2;
          word-break: break-word;
        }

        /* Name on its own line. Allow wrapping on small screens. */
        .intro-title span {
          display: block;
          white-space: nowrap;
        }
        @media (max-width: 480px) {
          .intro-title span { white-space: normal; }
        }

        .intro-desc {
          font-size: clamp(16px, 2.4vw, 18px);
          margin: 16px 0 0 0;
          line-height: 1.6;
          overflow-wrap: anywhere;
        }

        .intro-highlight {
          background-color: #EDE9FE;
          padding: 2px 6px;
          border-radius: 4px;
        }

        .intro-btn {
          display: inline-block;
          margin-top: 18px;
          padding: 12px 20px;
          background-color: #4F46E5;
          color: #fff;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          text-decoration: none;
          transition: transform .2s ease, background .3s ease;
          will-change: transform;
        }
        .intro-btn:hover { background-color: #3730a3; transform: translateY(-2px); }

        .intro-right {
          flex: 1 1 320px;
          min-width: 260px;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 280px;
        }

        /* Responsive circular image with no overflow */
        .intro-right img {
          display: block;
          width: clamp(180px, 45vw, 280px);
          aspect-ratio: 1 / 1;
          height: auto;           /* follows width + aspect-ratio */
          object-fit: cover;
          border-radius: 50%;
          background: transparent;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          margin: 0;              /* no side push on small screens */
        }
        /* Add a little nudge on very large screens only */
        @media (min-width: 1200px) {
          .intro-right img { margin-left: 40px; }
        }

        /* Summary grid that never overflows */
        .info-summary {
          width: 100%;
          margin-top: 28px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 12px;
          text-align: center;
        }

        .info-card {
          background-color: #F6EBFE;
          padding: 14px;
          border-radius: 8px;
        }

        .info-card p:first-child {
          font-size: clamp(18px, 2.4vw, 20px);
          font-weight: 600;
          color: #374151;
          margin: 4px 0 6px;
        }
        .info-card p:last-child {
          font-size: clamp(12px, 2vw, 13px);
          font-weight: 500;
          color: #6B7280;
          margin: 0;
        }

        /* Stack + center on tablets & phones */
        @media (max-width: 1024px) {
          .intro-container { flex-direction: column; text-align: center; }
          .intro-left, .intro-right { min-width: 0; }
          .intro-desc { margin-left: auto; margin-right: auto; }
        }
      `}</style>

      {/* Introduction Section */}
      <div id="introduction" className="intro-container">
        {/* Left */}
        <div className="intro-left">
          <p className="intro-title">
            Hello, I’m
            <span>Bhushan Narawade</span>
          </p>
          <p className="intro-desc">
            I'm a{" "}
            <span className="intro-highlight">
              Web / Software developer / Data Analyst
            </span>{" "}
            based in Sangamner, Ahmednagar. I strive to build immersive and beautiful
            web applications through carefully crafted code and user-centric design.
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=bhushannarawade2003@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="intro-btn"
          >
            Say Hello!
          </a>
        </div>

        {/* Right */}
        <div className="intro-right">
          <img src={person} alt="person" />
        </div>

        {/* Info Summary */}
        <div className="info-summary">
          {informationSummaryData.map((item) => (
            <div key={item.id} className="info-card">
              <p>{item.description}</p>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Introduction;
