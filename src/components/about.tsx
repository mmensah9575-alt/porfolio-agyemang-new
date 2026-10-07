import { useState } from "react";

type Tab = "skills" | "experience" | "education";

function About() {
  const [activeTab, setActiveTab] = useState<Tab>("skills");

  return (
    <section className="about-container" id="about">
      {/* Image */}
      <div>
        <div className="mypic">
          <img src="/images/image-2.png" alt="About Me" />
        </div>
      </div>

      {/* Everything below must be inside about-section */}
      <div className="about-section">
        <h2 className="text-1">
          About <span>Me</span>
        </h2>

        <p className="text-2">
          I provide independent recruitment support to businesses in Ghana that
          need professional assistance with candidate sourcing, screening,
          shortlisting and recruitment coordination. My experience is built on
          hands-on recruitment across high-volume environments, inhouse
          recruitment and HR outsourcing. Most recently, I supported recruitment
          for KFC outlets across Ghana through Masco Foods Limited, managing
          recruitment activities across multiple locations and operational
          teams. I also gained recruitment and HR outsourcing experience at The
          Capital Group Ghana Limited, supporting recruitment for client
          organisations and assisting with wider HR processes.
        </p>

        {/* TAB BUTTONS */}
        <div className="tabs">
          <button
            className={`tab-btn ${activeTab === "skills" ? "active" : ""}`}
            onClick={() => setActiveTab("skills")}
          >
            My Focus
          </button>

          <button
            className={`tab-btn ${activeTab === "experience" ? "active" : ""}`}
            onClick={() => setActiveTab("experience")}
          >
            Core Sectors
          </button>
        </div>

        {/* SKILLS */}
        {activeTab === "skills" && (
          <div className="tab-content active">
            <ul className="list-disc">
              <h2 className="text-gray-700 font-bold ">
                I support businesses with:
              </h2>

              <li className="text-[#979797] text-lg ">Individual vacancies</li>
              <li className="text-[#979797] text-lg">Multiple positions</li>
              <li className="text-[#979797] text-lg">
                High-volume recruitment requirements
              </li>
              <li className="text-[#979797] text-lg">
                Senior and specialist recruitment
              </li>
            </ul>
          </div>
        )}

        {/* EXPERIENCE */}
        {activeTab === "experience" && (
          <div className="tab-content active">
            <div className="experience-item">
              <h3>Hospitality</h3>

              <p className="date"></p>

              <p>Hotals, resturants, catering & hospitality</p>
            </div>
            <div className="experience-item">
              <h3>Retail & FMCG</h3>

              <p className="date"></p>

              <p>Retail, supermarkets & distributors</p>
            </div>

            <div className="experience-item">
              <h3>Manufactturing</h3>


              <p>production, Manufactturing & industrial operations</p>
            </div>
            <div className="experience-item">
              <h3>Security & Facilities</h3>


              <p>
                Security services, facilities management & support operations
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default About;