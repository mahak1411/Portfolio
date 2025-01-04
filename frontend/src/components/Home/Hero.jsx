import React from "react";
import "../../Styles/Home.css";
import profile from '../../images/profile2.png';

const Hero = () => {
  return (
    <div className="hero container-fluid d-flex flex-column flex-md-row justify-content-evenly align-items-center">
      <div className="left w-100 w-md-50 p-4">
        <h1 className="h1-heading">Hi, I'm Mahak Mehta</h1>
        <h4 className="h4-heading">Full-stack Web Developer</h4>
        <p className="para">"I am a B.Tech CSE student skilled in the MERN stack and data analysis. Passionate about open-source contributions, I enjoy building innovative projects and eagerly seek new opportunities to grow and contribute."
        </p>
      </div>
      <div className="right w-100 w-md-50 p-4">
        <img src={profile} alt="Mahak Mehta" className="img-fluid" />
      </div>
      <div className="icons m-3 home-icon">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mahak-mehta-0528b32a3/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin-in mx-3"></i>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/mahak1411"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github mx-3"></i>
              </a>

            </div>
    </div>
  );
};

export default Hero;
