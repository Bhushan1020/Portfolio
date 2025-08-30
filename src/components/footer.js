import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Internal CSS */}
      <style>{`
        .footer {
          background: linear-gradient(135deg, #4F46E5, #9333EA);
          color: white;
          padding: 50px 20px 20px;
          margin-top: 60px;
        }
        .footer-container {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }
        .footer h3 {
          font-size: 20px;
          margin-bottom: 15px;
          font-weight: 600;
        }
        .footer p {
          font-size: 14px;
          line-height: 1.6;
          color: #e5e7eb;
        }
        .footer a {
          display: block;
          color: #e5e7eb;
          font-size: 14px;
          margin-bottom: 8px;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer a:hover {
          color: #ffffff;
        }
        .social-icons {
          display: flex;
          gap: 12px;
          margin-top: 10px;
        }
        .social-icons a {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 16px;
          transition: background 0.3s ease, transform 0.2s ease;
        }
        .social-icons a:hover {
          background: white;
          color: #4F46E5;
          transform: translateY(-3px);
        }
        .footer-bottom {
          text-align: center;
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.2);
          font-size: 14px;
          color: #d1d5db;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .footer-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .footer-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .social-icons {
            justify-content: center;
          }
        }
      `}</style>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          {/* Logo + Tagline */}
          <div>
            <h3>Bhushan</h3>
            <p>
              Building immersive and beautiful web applications through carefully crafted code and user-centric design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3>Quick Links</h3>
            <a href="#introduction">Home</a>
            <a href="#profile">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#services">Services</a>
          </div>

          {/* Services */}
          <div>
            <h3>Services</h3>
            <a href="#">Web Development</a>
            <a href="#">Software Development</a>
            <a href="#">UI/UX Design</a>
            <a href="#">Problem Solving</a>
          </div>

          {/* Contact */}
          <div>
            <h3>Contact</h3>
            <p>Email: bhushannarawade2003@gmail.com</p>
            <p>Location: Sangamner, Ahmednagar</p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://linkedin.com/in/bnrwde" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href="https://instagram.com/bhushan_narawade_03?igsh=ZHRzOWVteWdjMDFy" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          © {new Date().getFullYear()} Bhushan Narawade. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
