import React from 'react'
import './aloqa.css'
import Line from '../line/Line'
import location from '../../assets/images/Ellipse 16.png'
import { useTranslation } from 'react-i18next'
function Aloqa() {
    const { t } = useTranslation()
  return (
    <div className='aloqa'>
        <div className='container'>
        <div className="locationOfPage">
          <p>{t("aloqa")}</p>
        </div>
            <div className='title'>
                <Line/>
                <div className='titlePart'>
                    <h3>{t("biz_bilan_boglanish")}</h3>
                    <p>{t("biz_bilan_boglanish")}</p>
                </div>
            </div>
            <div className='contacts'>
                <div className='xarita'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5991.092151644175!2d69.2913435!3d41.340483!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b534175ed31%3A0x52a8f9d9414a2ad8!2z0KLQsNGI0LrQtdC90YLRgdC60LjQuSDRg9C90LjQstC10YDRgdC40YLQtdGCINC40L3RhNC-0YDQvNCw0YbQuNC-0L3QvdGL0YUg0YLQtdGF0L3QvtC70L7Qs9C40Lkg0LjQvNC10L3QuCDQnNGD0YXQsNC80LzQsNC00LAg0LDQuy3QpdC-0YDQsNC30LzQuNC5!5e0!3m2!1sru!2s!4v1699706931402!5m2!1sru!2s" width="100%" height="500px"></iframe>
                </div>
                <div className='nomerlar'>
                    <p><img src={location} alt='map'/>Toshkent sh. Bodomzor ko’chasi, 45-uy.</p>
                    <p><img src={location} alt='map'/>Toshkent sh. Bodomzor ko’chasi, 45-uy.</p>
                    <p><img src={location} alt='map'/>Toshkent sh. Bodomzor ko’chasi, 45-uy.</p>
                    <p><img src={location} alt='map'/>Toshkent sh. Bodomzor ko’chasi, 45-uy.</p>
                    <p><img src={location} alt='map'/>Toshkent sh. Bodomzor ko’chasi, 45-uy.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aloqa