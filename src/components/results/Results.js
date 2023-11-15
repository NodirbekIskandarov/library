import React from 'react'
import './results.css'
import group from '../../assets/images/group-fill 1.png'
import macbook from '../../assets/images/macbook-fill.png'
import hat from '../../assets/images/graduation-cap-fill.png'
import { useTranslation } from 'react-i18next'
function Results() {
    const { t } =useTranslation()
  return (
    <div className='results'>
        <div className='container'>
            <h2>{t("talim_natijalarimiz_raqamlarda")}</h2>
            <div className='numbers'>
                <div className='box'>
                    <img src={group} alt='logo'/>
                    <p>{t("jami_oquvchilarimiz_soni")}</p>
                    <span>250</span>
                </div>
                <div className='box'>
                    <img src={macbook} alt='logo'/>
                    <p>{t("online_oqigan_oquvchilarimiz_soni")}</p>
                    <span>250</span>
                </div>
                <div className='box'>
                    <img src={hat} alt='logo'/>
                    <p>{t("offline_oqigan_oquvchilarimiz_soni")}</p>
                    <span>250</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Results