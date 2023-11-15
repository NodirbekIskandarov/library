import React from 'react'
import './news.css'
import Line from '../line/Line'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/images/Rectangle 9.png'
import img2 from '../../assets/images/Rectangle 10.png'
import img3 from '../../assets/images/Rectangle 11.png'
import { useTranslation } from 'react-i18next';
function News() {
    const {t} = useTranslation()
  return (
    <div className='news'>
        <div className='container'>
            <div className='title'>
                <Line/>
                <div className='titlePart'>
                    <h2>{t("markaz_yangiliklari")}</h2>
                    <p>{t("markazimiz_yangiliklaridan_doimo_bohabar_boling")}</p>
                </div>
            </div>
            <div className='carusel'>
                <Carousel> 
                    <Carousel.Item className="caruselItem">
                        <div className='singleCarusel'>
                            <div className='box'>
                                <img src={img1} alt="girl img" className='img'/>
                                <h3>Kutubxona yangilik1</h3>
                                <p>Lorem ipsum dolor sit amet consectetur. Amet risus egestas nibh sed rutrum mi. Nulla faucibus blandit pharetra nisl in. Turpis nibh ipsum nunc enim dictum sed viverra. Suspendisse augue volutpat lacinia lorem sed sem egestas. Amet.</p>
                            </div>
                            <button className='btn'>{t("batafsil")}</button>
                        </div>
                        <div className='singleCarusel'>
                            <div className='box'>
                                <img src={img2} alt="girl img" className='img'/>
                                <h3>Kutubxona yangilik1</h3>
                                <p>Lorem ipsum dolor sit amet consectetur. Amet risus egestas nibh sed rutrum mi. Nulla faucibus blandit pharetra nisl in. Turpis nibh ipsum nunc enim dictum sed viverra. Suspendisse augue volutpat lacinia lorem sed sem egestas. Amet.</p>
                            </div>
                            <button className="btn">{t("batafsil")}</button>
                        </div>
                        <div className='singleCarusel'>
                            <div className='box'>
                                <img src={img3} alt="girl img" className='img'/>
                                <h3>Kutubxona yangilik1</h3>
                                <p>Lorem ipsum dolor sit amet consectetur. Amet risus egestas nibh sed rutrum mi. Nulla faucibus blandit pharetra nisl in. Turpis nibh ipsum nunc enim dictum sed viverra. Suspendisse augue volutpat lacinia lorem sed sem egestas. Amet.</p>
                            </div>
                            <button className='btn'>{t("batafsil")}</button>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    </div>
  )
}

export default News