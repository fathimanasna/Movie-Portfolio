import './App.css'

function App() {

  return (
    <>

      {/* Navbar */}

      <nav className="navbar">
        <h2>INCEPTION</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#cast">Cast</a>
        </div>

        <a
          href="https://youtu.be/8hP9D6kZseM?si=xTj8Ie4ieszNQFAf"
          className="trailer-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch Trailer
        </a>
      </nav>


      {/* Hero */}

      <section className="hero" id="home">

        <div className="hero-content">

          <p>A CHRISTOPHER NOLAN FILM</p>

          <h1>INCEPTION</h1>

          <h2>The mind is the scene of the crime.</h2>

          <p>
            A thief who steals secrets through shared dreams
            is given the task of planting an idea into someone's mind.
          </p>

          <a
            href="https://youtu.be/8hP9D6kZseM?si=xTj8Ie4ieszNQFAf"
            className="trailer-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            ▶ Watch Trailer
          </a>

        </div>

      </section>

      {/* About */}

      <section className="about" id="about">

        <img
          src="/m1.webp"
          alt="Inception"
          className="about-bg"
        />

        <div className="about-content">
          <h2>THE MOVIE</h2>

          <div className="movie-rating">

            <div className="rating-main">
              <span className="star">★</span>

              <div>
                <strong>8.8</strong>
                <small>/ 10</small>
              </div>

              <span className="rating-source">IMDb</span>
            </div>

            <div className="rating-divider"></div>

            <div className="rating-item">
              <strong>86%</strong>
              <span>Tomatometer</span>
            </div>

            <div className="rating-item">
              <strong>91%</strong>
              <span>Audience</span>
            </div>

          </div>

          <p>
            Inception is a 2010 science-fiction thriller directed by
            Christopher Nolan. The movie follows Dom Cobb, a skilled
            thief who enters people's dreams and steals valuable
            information from their subconscious minds.
          </p>

          <p>
            Cobb is offered a chance to erase his criminal past by
            completing one final mission: planting an idea in a
            person's mind instead of stealing one.
          </p>

          <p>
            As the team travels deeper into multiple layers of dreams,
            reality becomes increasingly difficult to distinguish from
            imagination.
          </p>

        </div>

      </section>

      {/* Cast */}

      <section className="cast" id="cast">

        <div className="cast-header">
          <h2>THE TOP CAST</h2>

        </div>

        <div className="cast-container">

          <div className="cast-card">
            <img src="/1.jpg" alt="Dom Cobb" />

            <div className="cast-overlay">
              <div>
                <span className="character">EXTRACTOR</span>
                <h3>DOM COBB</h3>
                <p>Leonardo DiCaprio</p>
              </div>
            </div>
          </div>


          <div className="cast-card">
            <img src="/2.jpg" alt="Robert Fischer" />

            <div className="cast-overlay">
              <div>
                <span className="character">HEIR</span>
                <h3>ROBERT FISCHER</h3>
                <p>Cillian Murphy</p>
              </div>
            </div>
          </div>


          <div className="cast-card">
            <img src="/3.jpg" alt="Arthur" />

            <div className="cast-overlay">
              <div>
                <span className="character">POINT MAN</span>
                <h3>ARTHUR</h3>
                <p>Joseph Gordon-Levitt</p>
              </div>
            </div>
          </div>


          <div className="cast-card">
            <img src="/4.jpg" alt="Eames" />

            <div className="cast-overlay">
              <div>
                <span className="character">FORGER</span>
                <h3>EAMES</h3>
                <p>Tom Hardy</p>
              </div>
            </div>
          </div>


          <div className="cast-card">
            <img src="/5.jpg" alt="Ariadne" />

            <div className="cast-overlay">
              <div>
                <span className="character">ARCHITECT</span>
                <h3>ARIADNE</h3>
                <p>Elliot Page</p>
              </div>
            </div>
          </div>


          <div className="cast-card">
            <img src="/6.jpg" alt="Mal Cobb" />

            <div className="cast-overlay">
              <div>
                <span className="character">COBB'S WIFE</span>
                <h3>MAL COBB</h3>
                <p>Marion Cotillard</p>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* Gallery */}

      <section className="gallery" id="gallery">

        <div className="gallery-header">

          <h2>THE GALLERY</h2>

          <p>
            Step inside the world of dreams, illusions and impossible realities.
          </p>

        </div>


        <div className="gallery-container">

          <div className="gallery-item gallery-large">
            <img src="/im1.jpg" alt="Inception scene" />

            <div className="gallery-caption">
              <span>DREAM</span>
              <h3>THE KICK</h3>
            </div>
          </div>


          <div className="gallery-item">
            <img src="/im2.jpg" alt="Inception scene" />

            <div className="gallery-caption">
              <span>THE TEAM</span>
              <h3>THE DREAMERS</h3>
            </div>
          </div>


          <div className="gallery-item">
            <img src="/im3.jpg" alt="Inception scene" />

            <div className="gallery-caption">
              <span>THE DREAM</span>
              <h3>ZERO GRAVITY</h3>
            </div>
          </div>


          <div className="gallery-item gallery-wide">
            <img src="/im4.jpg" alt="Inception scene" />

            <div className="gallery-caption">
              <span>PARIS</span>
              <h3>THE IMPOSSIBLE CITY</h3>
            </div>
          </div>

        </div>

      </section>

    </>
  )
}

export default App