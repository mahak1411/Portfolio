import React from 'react'
import expenseTrackerVideo from '../../../Videos/expenseTrackerVideo.mp4'
const ExpenseTracker = () => {
  return (
    <div className="expense-tracker container-fluid text-center py-5">
          {/* Header Section */}
          <header className="mb-4">
            <h1
              className="mt-5"
              style={{ fontWeight: 'bold', fontSize: '2.5rem' , color :'rgb(248,139,238)' }}
            >
              Expense Tracker
            </h1>
            <p style={{ fontSize: '1.2rem' }}>
              A website to manage your finances.
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
                <source src={expenseTrackerVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p
              className="mt-3"
              style={{ fontSize: '1rem', fontWeight: '500' }}
            >
              Watch this video to learn more about the Expense Tracker App!
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
              <li>✔ Displays income and expense in form of charts.</li>
              <li>✔ Simple and user-friendly interface.</li>
              <li>✔ Uses an interactive video demonstration.</li>
              <li>✔ Easy to add and remove income and expense</li>
              <li>✔ Responsive design for all devices.</li>
            </ul>
          </section>
    
          {/* GitHub Link Section */}
          <section className="mt-5">
            <h3 style={{ fontWeight: 'bold' }}>GitHub Repository</h3>
            <a
              href="https://github.com/mahak1411/ExpenseTrackerApp"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'rgb(248,139,238)',
                fontWeight: 'bold',
                textDecoration: 'none',
                fontSize: '1.2rem',
              }}
            >
              GitHub ExpenseTracker App
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

export default ExpenseTracker
