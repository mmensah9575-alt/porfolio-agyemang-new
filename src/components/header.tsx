import { useEffect, useState } from "react";
import Button from "./buttons";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Detect active section
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id") || "";
        }
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu when a navigation link is clicked
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  // Get quote button
  const handleQuoteClick = () => {
    setMenuOpen(false);

    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div className="container">

        {/* Navigation */}
        <nav>
          <ul className={`header-list ${menuOpen ? "open" : ""}`}>

            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
              onClick={handleNavClick}
            >
              <li className="list">Home</li>
            </a>

            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
              onClick={handleNavClick}
            >
              <li className="list">About</li>
            </a>

            <a
              href="#achievements"
              className={activeSection === "achievements" ? "active" : ""}
              onClick={handleNavClick}
            >
              <li className="list">Experience</li>
            </a>

            <a
              href="#portfolio"
              className={activeSection === "portfolio" ? "active" : ""}
              onClick={handleNavClick}
            >
              <li className="list">Pricing</li>
            </a>

            <a
              href="#news"
              className={activeSection === "news" ? "active" : ""}
              onClick={handleNavClick}
            >
              <li className="list">Testimonials</li>
            </a>

            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
              onClick={handleNavClick}
            >
              <li className="list">Contact Us</li>
            </a>

            {/* Quote button inside mobile menu */}
            <li className="mobile-quote">
              <Button
                label="Get a quote"
                onClick={handleQuoteClick}
                variant="primary"
              />
            </li>

          </ul>
        </nav>

        {/* Desktop quote button */}
        <div className="desktop-quote">
          <Button
            label="Get a quote"
            onClick={handleQuoteClick}
            variant="primary"
          />
        </div>

        {/* Hamburger button */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
};
export default Header;