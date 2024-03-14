import React from 'react'
import './onlinecourse.css'
import books from '../../assets/images/tall stack of books.png'
import { useTranslation } from 'react-i18next'
function Onlinecourse() {
    const { t } = useTranslation()
  const font = localStorage.getItem('font')

  return (
    <div className='onlineCourse'>
        <div className='container'>
            <div className='box'>
                <div className='image'>
                    <img src={books} alt="books"/>
                </div>
                <div className='textPart'>
                    <h2 className={`${font}h2`}>{t("markazimiz_yangiliklaridan_doimo_bohabar_boling")}</h2>
                    <p className={`${font}p`}>Lorem ipsum dolor sit amet consectetur. Urna nibh adipiscing eu feugiat nulla. Tortor tempor a diam molestie fermentum placerat fermentum elit. Sagittis mi risus quis at sagittis arcu lacus. Volutpat feugiat in sagittis etiam congue a tellus amet tincidunt. Sodales leo id volutpat nulla mattis aliquam ut. Tellus a ultrices libero etiam massa tortor sit aenean phasellus. </p>
                    <button>{t("royhatdan_otish")}</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Onlinecourse