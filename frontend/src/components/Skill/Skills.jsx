import React from 'react';
import '../../Styles/Skills.css';
import mern from '../../images/mern.png';

const skills = [
  { name: 'ReactJs', level: 90 },
  { name: 'Node.js', level: 80 },
  { name: 'HTML5', level: 95 },
  { name: 'CSS3', level: 80 },
  { name: 'Express.js', level: 75 },
  { name: 'MongoDb', level: 68 },
  { name: 'MySQL', level: 80 },
  { name: 'Github', level: 60 },
  { name: 'Bootstrap', level: 80 },
  { name: 'Tailwind CSS', level: 55 },
];

const Skills = () => {
  return (
    <div className="skills container-fluid d-flex justify-content-center mt-5">
        <div className="col-md-8">
          <h1 className="text-center text-white mb-4">My Skills</h1>
          <div className="row">
            {skills.map((skill, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div className="skill mb-3">
                  <div className="d-flex justify-content-between text-white">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="progress bg">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${skill.level}%` }}
                      aria-valuenow={skill.level}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Skills;
