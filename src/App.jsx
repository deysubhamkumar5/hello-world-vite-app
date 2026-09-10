
import './App.css'

function App() {
  return (
    <div className="app">

      {/* Animated Background */}
      <div className="background">
        <div className="orb orb-one"></div>
        <div className="orb orb-two"></div>
        <div className="orb orb-three"></div>
      </div>

      {/* Navigation */}
      <nav className="navbar">

        <div className="logo">
          <span>SKD</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>

        <a href="#contact" className="nav-button">
          Contact
        </a>

      </nav>

      {/* Hero Section */}
      <main id="home" className="hero">

        <div className="hero-content">

          <div className="welcome-badge">
            <span className="pulse"></span>
            Welcome to my digital space
          </div>

          <p className="small-title">
            HELLO, I'M
          </p>

          <h1>
            SUBHAM
            <span>KUMAR DEY</span>
          </h1>

          <div className="typing-box">
            <span className="typing">
              B.Tech CSE Student
            </span>
          </div>

          <p className="description">
            I'm a Computer Science Engineering student at
            <strong> KL University</strong>, exploring AI, Machine
            Learning, programming and modern technology.
          </p>

          <div className="hero-buttons">

            <a href="#about" className="primary-button">
              Explore My Journey →
            </a>

            <a href="#projects" className="secondary-button">
              View Projects
            </a>

          </div>

        </div>

        {/* Student Profile Card */}
        <div className="student-card">

          <div className="card-glow"></div>

          <div className="card-top">
            <span>STUDENT PROFILE</span>
            <span className="live">● LIVE</span>
          </div>

          <div className="avatar">
            <span>SKD</span>
          </div>

          <h2>
            Subham Kumar Dey
          </h2>

          <p className="role">
            B.Tech • Computer Science & Engineering
          </p>

          <div className="university">

            <div className="university-icon">
              🎓
            </div>

            <div>
              <small>
                UNIVERSITY
              </small>

              <strong>
                K L Deemed to be University
              </strong>
            </div>

          </div>

          <div className="card-stats">

            <div>
              <strong>AI</strong>
              <span>Learning</span>
            </div>

            <div>
              <strong>CSE</strong>
              <span>Student</span>
            </div>

            <div>
              <strong>🚀</strong>
              <span>Building</span>
            </div>

          </div>

        </div>

      </main>

      {/* About Section */}
      <section id="about" className="section">

        <div className="section-label">
          01 — ABOUT ME
        </div>

        <h2>
          Learning today.
          <span>Building tomorrow.</span>
        </h2>

        <p className="section-text">
          My journey in Computer Science is about learning technologies,
          creating projects and continuously improving my skills.
          I'm especially interested in Artificial Intelligence and
          Machine Learning.
        </p>

        <div className="info-grid">

          <div className="info-card">
            <span>🎓</span>

            <h3>
              Education
            </h3>

            <p>
              B.Tech in Computer Science & Engineering
            </p>
          </div>

          <div className="info-card">
            <span>🏫</span>

            <h3>
              University
            </h3>

            <p>
              K L Deemed to be University
            </p>
          </div>

          <div className="info-card">
            <span>🤖</span>

            <h3>
              Interest
            </h3>

            <p>
              AI • ML • Software Development
            </p>
          </div>

        </div>

      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">

        <div className="section-label">
          02 — SKILLS
        </div>

        <h2>
          Technologies I'm
          <span>exploring.</span>
        </h2>

        <div className="skills-grid">

          <div className="skill-card">

            <div className="skill-icon">
              ☕
            </div>

            <h3>
              Java
            </h3>

            <p>
              Programming & OOP
            </p>

            <div className="progress">
              <div className="progress-bar bar-80"></div>
            </div>

          </div>

          <div className="skill-card">

            <div className="skill-icon">
              🐍
            </div>

            <h3>
              Python
            </h3>

            <p>
              Programming & Data
            </p>

            <div className="progress">
              <div className="progress-bar bar-75"></div>
            </div>

          </div>

          <div className="skill-card">

            <div className="skill-icon">
              ⚛
            </div>

            <h3>
              React
            </h3>

            <p>
              Frontend Development
            </p>

            <div className="progress">
              <div className="progress-bar bar-70"></div>
            </div>

          </div>

          <div className="skill-card">

            <div className="skill-icon">
              🧠
            </div>

            <h3>
              AI / ML
            </h3>

            <p>
              Currently Learning
            </p>

            <div className="progress">
              <div className="progress-bar bar-60"></div>
            </div>

          </div>

        </div>

      </section>

      {/* Projects Section */}
      <section id="projects" className="section">

        <div className="section-label">
          03 — PROJECTS
        </div>

        <h2>
          Things I'm
          <span>building.</span>
        </h2>

        <div className="projects-grid">

          <div className="project-card">

            <div className="project-number">
              01
            </div>

            <div className="project-icon">
              🌾
            </div>

            <h3>
              Farm X
            </h3>

            <p>
              A farmer-focused digital platform designed to connect
              farmers with useful services and marketplace features.
            </p>

            <div className="tags">
              <span>React</span>
              <span>Web</span>
              <span>AI</span>
            </div>

          </div>

          <div className="project-card">

            <div className="project-number">
              02
            </div>

            <div className="project-icon">
              🤖
            </div>

            <h3>
              AI Projects
            </h3>

            <p>
              Exploring machine learning concepts, prediction models
              and intelligent applications.
            </p>

            <div className="tags">
              <span>Python</span>
              <span>ML</span>
              <span>Data</span>
            </div>

          </div>

          <div className="project-card">

            <div className="project-number">
              03
            </div>

            <div className="project-icon">
              💻
            </div>

            <h3>
              College Projects
            </h3>

            <p>
              Academic and personal projects created while developing
              my Computer Science skills.
            </p>

            <div className="tags">
              <span>Java</span>
              <span>C</span>
              <span>Python</span>
            </div>

          </div>

        </div>

      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">

        <div className="contact-glow"></div>

        <div className="section-label">
          04 — CONTACT
        </div>

        <h2>
          Let's build something
          <span>interesting.</span>
        </h2>

        <p>
          Thanks for visiting my digital space.
        </p>

        <a
          href="mailto:your-email@example.com"
          className="contact-button"
        >
          Say Hello 👋
        </a>

      </section>

      {/* Footer */}
      <footer>

        <div>
          © 2026 Subham Kumar Dey
        </div>

        <div>
          Built with React + Vite ⚡
        </div>

      </footer>

    </div>
  )
}

export default App

