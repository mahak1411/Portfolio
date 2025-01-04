import React from 'react'
import iNotebookVideo from '../../../Videos/iNotebookVideo.mp4'
const Inotebook = () => {
  return (
    <div className="weather container-fluid text-center py-5">
          {/* Header Section */}
          <header className="mb-4">
            <h1
              className="mt-5"
              style={{ fontWeight: 'bold', fontSize: '2.5rem' , color :'rgb(248,139,238)' }}
            >
              iNotebook
            </h1>
            <p style={{ fontSize: '1.2rem' }}>
              A website that is used to store your notes
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
                <source src={iNotebookVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p
              className="mt-3"
              style={{ fontSize: '1rem', fontWeight: '500' }}
            >
              Watch this video to learn more about the Weather App!
            </p>
          </section>
    
          {/* Features Section */}
          <section className="features mt-5">
            <h2 style={{ fontWeight: 'bold' }}>Features of This App</h2>
            <ul
              className="list-unstyled mt-3"
              style={{
                textAlign: 'left',
                maxWidth: '600px',
                margin: '0 auto',
                fontSize: '1rem',
              }}
            >
              <li>✔ User Authentication.</li>
              <li>✔ Simple and user-friendly interface.</li>
              <li>✔ Create,edit,update and delete Note</li>
              <li>✔ Easy and simple ui</li>
              <li>✔ Responsive design for all devices.</li>
            </ul>
          </section>
    
          {/* GitHub Link Section */}
          <section className="mt-5">
            <h3 style={{ fontWeight: 'bold' }}>GitHub Repository</h3>
            <a
              href="https://github.com/mahak1411/iNotebook"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'rgb(248,139,238)',
                fontWeight: 'bold',
                textDecoration: 'none',
                fontSize: '1.2rem',
              }}
            >
              Click here For GitHub
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
            <p>© 2025 Weather App | Designed for educational purposes</p>
          </footer>
        </div>
  )
}

export default Inotebook
