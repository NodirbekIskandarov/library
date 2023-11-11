import React from 'react'
import vector1 from '../../../assets/images/Vector (1).svg'
import vector from '../../../assets/images/Vector.svg'
import avatar from '../../../assets/images/eyeglasses_FILL0_wght400_GRAD0_opsz24 1.svg'
import { CiSearch } from 'react-icons/ci'
import './navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
        <div className='container'>
            <div className='logo'>
                <div className='images'>
                    <img src={vector} alt='logo'/>
                    <img src={vector1} alt='logo'/>
                </div>
                <p>RESPUBLIKA AXBOROT-KUTUBXONA MARKAZI</p>
            </div>
            <div className='search'>
                <input type='search' placeholder='qidirish'/>
            </div>
            <div className='locale'>
                <select>
                    <option>UZ</option>
                    <option>RU</option>
                </select>
            </div>
            <div className='avatar'>
                <img src={avatar} alt='avatar'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar