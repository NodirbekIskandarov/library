import React, { useState } from 'react'
import vector1 from '../../../assets/images/Vector (1).svg'
import vector from '../../../assets/images/Vector.svg'
import avatar from '../../../assets/images/eyeglasses_FILL0_wght400_GRAD0_opsz24 1.svg'
import './navbar.css'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
function Navbar() {
    // const [lang, setLang] = useState("uz")
    const {t, i18n} = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }
    
    const changedFunc = (props) => {
        i18n.changeLanguage(props)
        localStorage.setItem('lang', JSON.stringify(props));
      }
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
            <label className='search'>
            <svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
<path d="M16.9471 15.9698C16.6542 15.6769 16.1793 15.6769 15.8864 15.9698C15.5935 16.2627 15.5935 16.7375 15.8864 17.0304L16.9471 15.9698ZM19.553 20.6971C19.8459 20.9899 20.3208 20.99 20.6137 20.6971C20.9066 20.4042 20.9066 19.9293 20.6137 19.6364L19.553 20.6971ZM15.8864 17.0304L19.553 20.6971L20.6137 19.6364L16.9471 15.9698L15.8864 17.0304ZM9.08337 16.6667C4.94124 16.6667 1.58337 13.3088 1.58337 9.16669H0.083374C0.083374 14.1373 4.11281 18.1667 9.08337 18.1667V16.6667ZM16.5834 9.16669C16.5834 13.3088 13.2255 16.6667 9.08337 16.6667V18.1667C14.0539 18.1667 18.0834 14.1373 18.0834 9.16669H16.5834ZM9.08337 1.66669C13.2255 1.66669 16.5834 5.02455 16.5834 9.16669H18.0834C18.0834 4.19613 14.0539 0.166687 9.08337 0.166687V1.66669ZM9.08337 0.166687C4.11281 0.166687 0.083374 4.19613 0.083374 9.16669H1.58337C1.58337 5.02455 4.94124 1.66669 9.08337 1.66669V0.166687Z" fill="#454343"/>
</svg>
                <input type='search' placeholder={t("qidirish")}/>
            </label>
            <div className='locale'>
                <select onChange={(e) => changedFunc(e.target.value)}>
                    <option value="uz">UZ</option>
                    <option value="ru">RU</option>
                    <option value="en">EN</option>
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