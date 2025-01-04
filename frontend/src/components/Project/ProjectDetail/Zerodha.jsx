import React from 'react';
import zerodhaVideo from '../../../Videos/zerodhaVideo.mp4';

const Zerodha = () => {
  return (
    <div
      className="zerodha container-fluid text-center py-5"
    >
      {/* Header Section */}
      <header className="mb-4">
        <h1
          className="mt-5"
          style={{ fontWeight: 'bold', fontSize: '2.5rem' }}
        >
          Zerodha UI Clone
        </h1>
        <p style={{ fontSize: '1.2rem' }}>
          A simple UI replication for learning purposes
        </p>
      </header>

      {/* Video Section */}
      <section className="video-section mt-4">
        <div className="d-flex justify-content-center">
          <video
            className="w-100 w-md-75 w-lg-50"
            controls
            style={{
              borderRadius: '8px',
              border: '3px solid rgb(248,139,238)',
              maxWidth: '600px',
            }}
          >
            <source src={zerodhaVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p
          className="mt-3"
          style={{ fontSize: '1rem', fontWeight: '500' }}
        >
          Watch this video to explore the Zerodha UI clone!
        </p>
      </section>

      {/* Features Section */}
      <section className="features mt-5">
        <h2 style={{fontWeight: 'bold' }}>Features of This UI Clone</h2>
        <ul
          className="list-unstyled mt-3"
          style={{
            textAlign: 'left',
            maxWidth: '600px',
            margin: '0 auto',
            fontSize: '1rem',
          }}
        >
          <li>✔ Replicates Zerodha's clean and intuitive interface.</li>
          <li>✔ Easy navigation through Navbar.</li>
          <li>✔ Placeholder for stock watchlists and portfolio.</li>
          <li>✔ Reuse of the same components.</li>
          <li>✔ Styled video integration as a feature highlight.</li>
        </ul>
      </section>

      {/* GitHub Link Section */}
      <section className="mt-5">
        <h3 style={{fontWeight: 'bold' }}>GitHub Repository</h3>
        <a
          href="https://github.com/mahak1411/ZerodhaClone"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#27AE60',
            fontWeight: 'bold',
            textDecoration: 'none',
            fontSize: '1.2rem',
          }}
        >
          GitHub Zerodha Clone
        </a>
      </section>

      {/* Footer Section */}
      <footer
        className="mt-5 pt-3"
        style={{
          borderTop: '1px solid #BDC3C7',
          color: '#7F8C8D',
          fontSize: '0.9rem',
        }}
      >
        <p>© 2025 Zerodha Clone | Designed for educational purposes</p>
      </footer>
    </div>
  );
};

export default Zerodha;
