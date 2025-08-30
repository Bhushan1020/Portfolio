import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = ({ data }) => {
  return (
    <>
      {/* Internal CSS */}
      <style>{`
        .project-card {
          max-width: 420px;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          overflow: hidden;
          background-color: #fff;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 24px rgba(0,0,0,0.15);
        }

        .project-image {
          width: 100%;
          height: 240px;
          object-fit: cover;
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
          transition: transform 0.4s ease;
        }
        .project-card:hover .project-image {
          transform: scale(1.05);
        }

        .project-content {
          padding: 18px;
        }

        .project-category {
          font-size: 12px;
          color: #6b7280;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 6px;
        }

        .project-title {
          font-size: 20px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 10px;
        }

        .project-description {
          font-size: 14px;
          color: #374151;
          line-height: 1.6;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          margin-top: 18px;
          padding: 10px 22px;
          font-size: 14px;
          font-weight: 600;
          border: 2px solid transparent;
          border-radius: 6px;
          background-color: #fff;
          color: #111827;
          text-decoration: none;
          transition: all 0.3s ease-in-out;
        }

        .project-link:hover {
          border-color: #7c3aed;
          color: #7c3aed;
          gap: 12px;
        }

        .project-link span {
          margin-left: 8px;
          display: inline-flex;
          transition: transform 0.3s ease;
        }

        .project-link:hover span {
          transform: translateX(4px);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .project-card {
            max-width: 100%;
          }
          .project-title {
            font-size: 18px;
          }
          .project-description {
            font-size: 13px;
          }
        }
        @media (max-width: 500px) {
          .project-link {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      {/* Project Card */}
      <div className="project-card">
        <img
          src={data?.image}
          alt={data?.title} 
          className="project-image"
        />

        <div className="project-content">
          <p className="project-category">{data?.category}</p>
          <p className="project-title">{data?.title}</p>
          <p className="project-description">{data?.description}</p>

          <a
            href={data?.link}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
            <span>
              <FontAwesomeIcon icon={faArrowRight} size="l" />
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
