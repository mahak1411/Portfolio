import React from 'react'
import Hero from './Hero'
import About from '../About/About'
import Project from '../Project/Project'
import Resume from '../Resume/Resume'
import Skills from '../Skill/Skills'
import Contact from '../Contact/Contact'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Resume/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default Home
