import logo from "../assets/logo.jpg";
import { Link } from "react-scroll";
import { useState } from "react";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Process", url: "work-process" },
  { id: 4, name: "Portfolio", url: "portfolio" },
  { id: 5, name: "Services", url: "services" },
  { id: 6, name: "Contact", url: "contact", isButton: true },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Internal CSS */}
      <style>{`
  * {
    box-sizing: border-box;
  }

  .navbar {
    width: 100%;
    background: white;
    border: 2px solid black;
    border-radius: 15px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 1000;
    overflow: visible; /* allow dropdown visibility */
  }
  .logo-container {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
  .logo-container img {
    height: 40px;
    width: 40px;
    border-radius: 10px;
  }
  .logo-container p {
    font-size: 20px;
    font-weight: 600;
    margin-left: 8px;
    white-space: nowrap;
  }
  .nav-links {
    list-style: none;
    display: flex;
    gap: 40px;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
  }
  .nav-links li {
    cursor: pointer;
  }
  .nav-links a {
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    color: #374151;
    transition: color 0.3s ease;
  }
  .nav-links a:hover {
    color: #9929fb;
  }

  /* Contact Button */
  .contact-btn {
    padding: 8px 14px;
    background: #9929fb;
    color: white !important;
    border-radius: 15px;
    font-weight: 600;
    transition: background 0.3s ease;
  }
  .contact-btn:hover {
    background: #7a20c2;
  }

  /* Hamburger Button */
  .hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 5px;
    margin-left: auto;
    z-index: 1100; /* above menu */
  }
  .hamburger span {
    width: 24px;
    height: 3px;
    background: #333;
    border-radius: 3px;
  }

  /* Mobile Menu */
  .mobile-menu {
    display: none;
    flex-direction: column;
    gap: 16px;
    background: white;
    padding: 20px;
    position: fixed;      /* fixed overlay */
    top: 65px;            /* just below navbar */
    right: 15px;
    left: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0px 4px 15px rgba(0,0,0,0.15);
    z-index: 1050;        /* higher than navbar */
  }
  .mobile-menu a {
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    color: #374151;
  }
  .mobile-menu.open {
    display: flex;
  }

  /* Responsive Rules */
  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
    .hamburger {
      display: flex;
    }
  }

  @media (max-width: 480px) {
    .logo-container p {
      font-size: 16px;
    }
    .logo-container img {
      height: 35px;
      width: 35px;
    }
    .contact-btn {
      padding: 7px 12px;
      font-size: 14px;
    }
  }
`}</style>


      {/* Navbar */}
      <div className="navbar">
        {/* Logo */}
        <div className="logo-container">
          <img src={logo} alt="logo" />
          <p>Bhushan</p>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.url}
                smooth={true}
                duration={800}
                className={item.isButton ? "contact-btn" : ""}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Button (Mobile) */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.url}
              smooth={true}
              duration={800}
              className={item.isButton ? "contact-btn" : ""}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;
