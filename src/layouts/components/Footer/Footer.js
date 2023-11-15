import React from 'react'
import './footer.css'
import vector from '../../../assets/images/Vector.svg'
import vector1 from '../../../assets/images/Vector (1).svg'
import phone from '../../../assets/images/Calling 1.png'
import location from '../../../assets/images/Location.png'
import telegram from '../../../assets/images/telegram-fill.png'
import instagram from '../../../assets/images/instagram-fill.png'
import facebook from '../../../assets/images/facebook-circle-fill.png'
import youtube from '../../../assets/images/youtube-fill 1.png'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footerIn'>
          <div className='logo'>
            <div className='images'>
              <img src={vector} alt='logo'/>
              <img src={vector1} alt='logo'/>
            </div>
            <p>RESPUBLIKA AXBOROT-KUTUBXONA MARKAZI</p>
          </div>
          <ul className='footerMenuPart1'>
            <li><Link className='link' to='/'>Asosiy menyu</Link></li>
            <li><Link className='link' to='/'>Markaz haqida</Link></li>
            <li><Link className='link' to='/'>O'quv kurslari</Link></li>
          </ul>
          <ul className='footerMenuPart1'>
            <li><Link className='link' to='/'>Interaktiv xizmatlar</Link></li>
            <li><Link className='link' to='/'>Monitoring</Link></li>
            <li><Link className='link' to='/'>Aloqa</Link></li>
          </ul>
          <div className='addressPart'>
            <div className='phoneNumber'>
              <img src={phone} alt='phoneLogo'/>
              <p>+998 99 963 7730</p>
            </div>
            <div className='location'>
              <img src={location} alt="locationLogo"/>
              <p>Toshkent sh. Bodomzor ko'chasi, 45-uy.</p>
            </div>
            <div className='socialMedia'>
              <a href='/'><img src={youtube} alt="youtube logo"/></a>
              <a href='/'><img src={telegram} alt="telegram logo"/></a>
              <a href='/'><img src={instagram} alt="instagram logo"/></a>
              <a href='/'><img src={facebook} alt="facebook logo"/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer