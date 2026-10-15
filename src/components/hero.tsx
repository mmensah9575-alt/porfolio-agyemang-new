function Hero() {
  return (
    <section id="home">
      <div className="hero-section">
        <div className="about">
          <p>Hello, My name is</p>
          <h2>Ephraim Agyemang</h2>
          <h4>
            I'm An Executive Recruiter, Talent acquistion Specialist and Career
            Coach{" "}
          </h4>
          <h5>
            <span className="ghana">Ghana</span>
            <span className="africa">Africa</span>
            <span>International Recruitment</span>
          </h5>

          <a
            href="/Ephraim Agyemang CV (1).pdf"
            download="Ephraim Agyemang CV (1).pdf"
            className="download-cv-btn"
          >
            Download my CV
          </a>
        </div>
        <div className="profile-pic">
          <img src="images/wdkds.png" />
        </div>
      </div>
    </section>
  );

  
}
  export default Hero;
