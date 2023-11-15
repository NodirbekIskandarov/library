import React from 'react'
import  Navbar  from './Navbar/Navbar'
import Menu from './Menu/Menu'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'

function Index() {
  return (
    <div>
        <Navbar/>
        <Menu/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Index