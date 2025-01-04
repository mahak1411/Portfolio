import React from "react";
import devmapVideo from "../../../Videos/devmapVideo.mp4";

const DevMap = () => {
  return (
    <div className="devmap container-fluid text-center py-5">
      {/* Header Section */}
      <header className="mb-4">
        <h1 className="mt-5" style={{ fontWeight: "bold", fontSize: "2.5rem" , color:'rgb(248, 142, 239)'}}>
          DevMap Platform
        </h1>
        <p style={{ fontSize: "1.2rem" }}>
          A platform with roadmaps and descriptions of various technologies to guide your learning journey.
        </p>
      </header>

      {/* Video Section */}
      <section className="video-section mt-4">
        <div className="d-flex justify-content-center">
          <video
            className="w-100 w-md-75 w-lg-50"
            controls
            style={{
              borderRadius: "8px",
              border: "3px solid rgb(248,139,238)",
              maxWidth: "600px",
            }}
          >
            <source src={devmapVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="mt-3" style={{ fontSize: "1rem", fontWeight: "500" }}>
          Watch this video to explore the DevMap platform and its roadmap features!
        </p>
      </section>

      {/* Roadmap and Technology Descriptions */}
      <section className="roadmap mt-5">
        <h2 style={{ fontWeight: "bold", fontSize: "1.8rem" }}>Learning Roadmaps</h2>

        <div className="row">
          {/* Data Science Section */}
          <div className="col-md-4 mt-4">
            <h3>Data Science</h3>
            <p style={{ fontSize: "1rem", maxWidth: "400px", margin: "0 auto" }}>
              Learn the foundations of data analysis, machine learning, and deep learning. Our roadmap takes you from beginner to advanced levels.
            </p>
          </div>

          {/* DSA Section */}
          <div className="col-md-4 mt-4">
            <h3>Data Structures & Algorithms</h3>
            <p style={{ fontSize: "1rem", maxWidth: "400px", margin: "0 auto" }}>
              Master the key concepts of data structures and algorithms. Solve problems efficiently and ace your coding interviews with our roadmap.
            </p>
          </div>

          {/* Web Development Section */}
          <div className="col-md-4 mt-4">
            <h3>Web Development</h3>
            <p style={{ fontSize: "1rem", maxWidth: "400px", margin: "0 auto" }}>
              From front-end to back-end, our roadmap covers the technologies and skills needed to become a full-stack web developer.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Cyber Security Section */}
          <div className="col-md-4 mt-4">
            <h3>Cyber Security</h3>
            <p style={{ fontSize: "1rem", maxWidth: "400px", margin: "0 auto" }}>
              Understand the fundamentals of protecting networks, systems, and data from cyber threats. This roadmap covers ethical hacking, encryption, and more.
            </p>
          </div>

          {/* Cloud Computing Section */}
          <div className="col-md-4 mt-4">
            <h3>Cloud Computing</h3>
            <p style={{ fontSize: "1rem", maxWidth: "400px", margin: "0 auto" }}>
              Dive into the world of cloud services with a roadmap that covers AWS, Azure, and Google Cloud, preparing you for cloud architect roles.
            </p>
          </div>

          {/* AI Section */}
          <div className="col-md-4 mt-4">
            <h3>Artificial Intelligence</h3>
            <p style={{ fontSize: "1rem", maxWidth: "400px", margin: "0 auto" }}>
              Explore the fundamentals of AI, including natural language processing, computer vision, and reinforcement learning. Our roadmap will help you build intelligent systems.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="mt-5 pt-3" style={{ borderTop: "1px solid #BDC3C7", fontSize: "0.9rem" }}>
        <p>© 2025 DevMap Platform | Designed for educational purposes</p>
      </footer>
    </div>
  );
};

export default DevMap;
