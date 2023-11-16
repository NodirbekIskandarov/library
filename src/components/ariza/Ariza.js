import React from 'react'
import './ariza.css'
import Line from '../line/Line'
import img from '../../assets/images/casual-life-3d-cat-lying-on-books 1.png'
import { useTranslation } from 'react-i18next'
import profile from '../../assets/images/Profile 1.png'
import call from '../../assets/images/Call.png'
import region from '../../assets/images/Website 2.png'
import work from '../../assets/images/Work.png'
function Ariza() {
    const { t } = useTranslation()
  return (
    <div className='ariza'>
        <div className='container'>
            <div className='title'>
                <Line/>
                <div className='titlePart'>
                    <h3>{t("ariza_qoldirish")}</h3>
                    <p>{t("ananaviy_talimda_oqish_uchun_ariza_qoldiring_va_biz_siz_bilan_boglanamiz")}</p>
                </div>
            </div>
            <div className='forms'>
                <div className='image'>
                    <img src={img} alt="cat"/>
                </div>
                <div className='formPart'>
                    <div className='cart'>
                        <p>{t("f_i_o")}*</p>
                        <label className='cart2'>
                            <img src={profile} alt="profile"/>
                            <input type='text' placeholder={t("ism_sharif")}></input>
                        </label>
                    </div>
                    <div className='cart'>
                        <p>{t("telefon_raqam")}*</p>
                        <label className='cart2'>
                            <img src={call} alt="call"/>
                            <input type='text' placeholder="+998** *** ** **"></input>
                        </label>
                    </div>
                    <div className='cart'>
                        <p>{t("viloyat")}*</p>
                        <label className='cart2'>
                            <img src={region} alt="region"/>
                            <input type='text' placeholder={t("viloyat")}></input>
                        </label>
                    </div>
                    <div className='cart'>
                        <p>{t("ish_joyingiz")}*</p>
                        <label className='cart2'>
                            <img src={work} alt="work"/>
                            <input type='text' placeholder={t("ish_joyingiz")}></input>
                        </label>
                    </div>
                    <button>{t("jonatish")}</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ariza