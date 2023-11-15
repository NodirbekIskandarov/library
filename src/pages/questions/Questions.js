import React from 'react'
import Line from '../../components/line/Line'
import Savollar from '../../components/savollar/Savollar'
import { useLocation } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

function Questions() {
  const { state } = useLocation();
  const { t } = useTranslation()
  return (
    <div>
        <div className='container'>
        <div className="locationOfPage">
          <p>{t("interaktiv_xizmatlar")}</p>
          <MdKeyboardArrowRight />
          <p>{state.name}</p>
        </div>
            <div className='title'>
                <Line/>
                <div className='titlePart'>
                    <h3>{t("online_savol_javob")}</h3>
                    <p>{t("ozingizni_qiziqtirgan_savollaringizni_bizdan_sorang")}</p>
                </div>
            </div>
            <Savollar/>
        </div>
    </div>
  )
}

export default Questions