
import './App.css'

function App() {
  return (
    <div className="app">

      <nav className="navbar">
        <h2>SKD</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-text">
          <p>HELLO, I'M</p>

          <h1>
            Subham Kumar Dey
          </h1>

          <h2>B.Tech CSE Student</h2>

          <p>
            I am a Computer Science Engineering student at
            K L Deemed to be University. I am interested in
            programming, web development and Artificial Intelligence.
          </p>

          <div className="buttons">
            <a href="#projects" className="btn primary">
              View Projects
            </a>

            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="profile">
          <div className="profile-image">
            SKD
          </div>

          <h2>Subham Kumar Dey</h2>
          <p>B.Tech Computer Science and Engineering</p>
          <p>K L Deemed to be University</p>
        </div>
      </section>

      <section id="about" className="section">
        <p className="title">01 - ABOUT ME</p>

        <h2>About Me</h2>

        <p className="text">
          I am a Computer Science student who enjoys learning
          programming and building projects. I am currently
          improving my skills in Java, Python, React and AI.
        </p>

        <div className="cards">

          <div className="card">
            <h3>Education</h3>
            <p>B.Tech in Computer Science and Engineering</p>
          </div>

          <div className="card">
            <h3>University</h3>
            <p>K L Deemed to be University</p>
          </div>

          <div className="card">
            <h3>Interest</h3>
            <p>AI, Machine Learning and Software Development</p>
          </div>

        </div>
      </section>

      <section id="skills" className="section">
        <p className="title">02 - SKILLS</p>

        <h2>My Skills</h2>

        <div className="skills">

          <div className="skill">
            <h3>Java</h3>
            <p>Object Oriented Programming</p>
          </div>

          <div className="skill">
            <h3>Python</h3>
            <p>Programming and Data</p>
          </div>

          <div className="skill">
            <h3>React</h3>
            <p>Frontend Development</p>
          </div>

          <div className="skill">
            <h3>C</h3>
            <p>Programming Fundamentals</p>
          </div>

        </div>
      </section>

      <section id="projects" className="section">
        <p className="title">03 - PROJECTS</p>

        <h2>My Projects</h2>

        <div className="projects">

          <div className="project">
            <h3>Farm X</h3>

            <p>
              A digital platform designed to provide useful
              services and marketplace features for farmers.
            </p>

            <span>React</span>
            <span>AI</span>
            <span>Web</span>
          </div>

          <div className="project">
            <h3>AI and ML Projects</h3>

            <p>
              Projects based on machine learning, data analysis
              and prediction models.
            </p>

            <span>Python</span>
            <span>ML</span>
            <span>Data</span>
          </div>

          <div className="project">
            <h3>College Projects</h3>

            <p>
              Academic projects created while learning
              programming and Computer Science.
            </p>

            <span>Java</span>
            <span>C</span>
            <span>Python</span>
          </div>

        </div>
      </section>

      <section id="contact" className="contact">
        <p className="title">04 - CONTACT</p>

        <h2>Let's Connect</h2>

        <p>
          Feel free to contact me for projects and collaboration.
        </p>

        <a
          href="mailto:your-email@example.com"
          className="btn primary"
        >
          Contact Me
        </a>
      </section>

      <footer>
        <p> Subham Kumar Dey</p>
        <p>React and Vite</p>
      </footer>

    </div>
  )
}

export default App

