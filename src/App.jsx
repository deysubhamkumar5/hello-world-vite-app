function App() {
  return (
    <div className="app">
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      <nav className="navbar">
        <div className="logo">HV</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main className="hero" id="home">
        <div className="badge">⚡ Powered by Vite + React</div>

        <h1>
          Hello World,
          <span> Vite App.</span>
        </h1>

        <p>
          A modern React experience built with Vite,
          designed with simplicity, speed and style.
        </p>

        <div className="buttons">
          <button className="primary-btn">
            Explore App →
          </button>

          <button className="secondary-btn">
            Learn More
          </button>
        </div>

        <div className="stats">
          <div>
            <strong>⚡</strong>
            <p>Fast</p>
          </div>

          <div>
            <strong>⚛</strong>
            <p>React</p>
          </div>

          <div>
            <strong>🚀</strong>
            <p>Vite</p>
          </div>
        </div>
      </main>

      <footer>
        <p>Built with ❤️ using React + Vite</p>
      </footer>
    </div>
  )
}

export default App