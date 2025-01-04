import React from "react";
import "../../Styles/Resume.css";
import profile from "../../images/profile2.png";
const Resume = () => {
  return (
    <div className="container-fluid mt-5">
      <div className=" d-flex align-items-center justify-content-center">
        <div className="resume col-4 text-center">
          <div className="img text-center">
            <img src={profile} alt="loading" />
          </div>
          <div className="content">
            <h4 className="text-center">About me!</h4>
            <p>
              I am a passionate web developer skilled in creating dynamic and
              responsive user interfaces. With a strong foundation in the MERN
              stack, I bring ideas to life through clean, functional designs. My
              expertise includes building user-friendly applications and solving
              complex problems with innovative solutions to ensure seamless user
              experiences.
            </p>
            <div className="icons m-3">
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
            <a href="https://drive.google.com/file/d/1_ZoOPsuuzDwF9LEwz6Nbo5wtF_-YScOv/view?usp=drive_link">
              <button className="button">
                Download CV
                <div class="hoverEffect">
                  <div></div>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
