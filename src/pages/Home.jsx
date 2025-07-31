import React from 'react'
import { HeroSection } from '../components/sections/HeroSection'
import Header from '../components/common/Header'
import AboutSection from '../components/sections/AboutSection'
import SkillSection from '../components/sections/SkillSection'
import ProjectSection from '../components/sections/ProjectSection'
import ContactSection from '../components/sections/ContactSection'
import Footer from '../components/common/Footer'

const Home = () => {
  return (
    <div className='px-4 py-2'>
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <SkillSection/>
      <ProjectSection/>
      <ContactSection/>
      <Footer/>
      </div>
  )
}

export default Home