import React from 'react'
import './tuzilmalar.css'
import Line from '../line/Line'
import { useLocation } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

import { Form } from '../test/Form';
function Tuzilmalar() {
  const { state } = useLocation();
const { t } = useTranslation()
  return (
    <div className='tuzilmalar'>
        <div className='container'>
        <div className="locationOfPage">
          <p>{t("markaz_haqida")}</p>
          <MdKeyboardArrowRight />
          {/* <p>{state.name}</p> */}
        </div>
            <div className='title'>
                <Line/>
                <div className='titlePart'>
                    <h2>{t("tashkiliy_tuzilmalar")}</h2>
                    <p>{t("kutubxonamiz_tashkiliy_tuzilmasi")}</p>
                </div>
            </div>
            {/* <Form /> */}
        </div>
    </div>
  )
}

export default Tuzilmalar