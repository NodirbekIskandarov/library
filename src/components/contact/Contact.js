import React from 'react'
import './contact.css'
import books from '../../assets/images/casual-life-3d-stack-of-books-mockup 1.png'
import Line from '../line/Line'
import { useTranslation } from 'react-i18next'
function Contact() {
    const { t } = useTranslation()
  return (
    <div className='contact'>
        <div className='container'>
            <div className='title'>
                <Line/>
                <div className='titlePart'>
                    <h3>{t("boglanish")}</h3>
                    <p>{t("oz_malumotlaringizni_qoldiring_va_biz_siz_bilan_boglanamiz")}</p>
                </div>
            </div>
            <div className='inputPart'>
                <div className='inputs'>
                    <div className='singleInput'>
                        <p>F.I.SH</p>
                        <input type='text' placeholder='Ism Sharif'/>
                    </div>
                    <div className='singleInput'>
                        <p>Telefon raqam</p>
                        <input type='text' placeholder='+998'/>
                    </div>
                    <div className='singleInput'>
                        <p>Ma'lumotingiz</p>
                        <select>
                            <option disabled>Ma'lumot</option>
                            <option>Bakalavr</option>
                        </select>
                    </div>
                    <button>{t("jonatish")}</button>
                </div>
                <div className='image'>
                    <img src={books} alt='books'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact