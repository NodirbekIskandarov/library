import React from 'react'
import Slider from '../../components/Slider/Slider'
import './home.css'
import Selection from '../../components/selectionConditions/Selection'
import Announcements from '../../components/announcements/Announcements'
import Onlinecourse from '../../components/onlinecourse/Onlinecourse'
import Results from '../../components/results/Results'
import Contact from '../../components/contact/Contact'
import News from '../../components/centernews/News'
import Treyners from '../../components/treyners/Treyners'
import Partners from '../../components/partners/Partners'
function Home() {
  return (
    <div className='home'>
        <Slider/>
        <Selection/>
        <News/>
        <Announcements/>
        <Onlinecourse/>
        <Results/>
        <Treyners/>
        <Partners/>
        <Contact/>
    </div>
  )
}

export default Home