function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="hero-label">WELCOME TO MERCY'S JOURNAL</p>

        <h1 id="hero-title">
          Exploring Technology,
          <span> One Story at a Time.</span>
        </h1>

        <p className="hero-description">
          A space for sharing ideas, learning about software engineering,
          exploring innovation, and documenting the journey through technology.
        </p>

        <a className="hero-button" href="#articles">
          Explore Articles <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="hero-decoration" aria-hidden="true">
        <span>INNOVATE.</span>
        <span>CREATE.</span>
        <span>LEARN.</span>
      </div>
    </section>
  );
}

export default Hero;
