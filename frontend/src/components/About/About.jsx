import React from 'react';
import profile from '../../images/profile2.png';
import '../../Styles/Home.css';

const About = () => {
  return (
    <div className="hero container-fluid d-flex flex-column flex-md-row justify-content-evenly align-items-center">
      <div className="right w-100 w-md-50 p-4">
        <img src={profile} alt="Profile of Mahak Mehta" className="img-fluid" />
      </div>
      <div className="left w-100 w-md-50 p-4">
        <h1 className="about-heading">About Me</h1>
        <p className='para'>
        "I am a 2nd-year B.Tech CSE student with a strong foundation in the MERN stack, data analysis, and software development. Passionate about open-source contributions, I thrive on building innovative projects that solve real-world problems and push the boundaries of technology. With a keen interest in web development, database management, and user-centric design, I am committed to continuous learning and leveraging my technical skills to create impactful solutions. I actively seek opportunities to collaborate on challenging projects, contribute to community-driven initiatives, and grow as a versatile software engineer."
        </p>
        <div className="content">
          <p>
            <b>Name: </b><span>Mahak Mehta</span>
          </p>
          <p>
            <b>Date Of Birth: </b><span>14/11/2006</span>
          </p>
          <p>
            <b>Country: </b><span>India</span>
          </p>
          <p>
            <b>Email: </b>
            <span><a href="mailto:mahakmehta141106@gmail.com">
              mahakmehta141106@gmail.com
            </a></span>
          </p>
          </div>
      </div>
    </div>
  );
};

export default About;
