import React from 'react'
import Line from '../line/Line'
import './batafsil.css'
import img from '../../assets/images/undraw_data_points_re_vkpq.png'
import group from '../../assets/images/Group 2.png'
import clock from '../../assets/images/Time Circle 6.png'
import { Link } from 'react-router-dom'
function Batafsil() {
  return (
    <div className='batafsil'>
        <div className='container'>
            <div className='title'>
                <Line/>
                <div className='titlePart'>
                    <h3>Kurs xaqida</h3>
                    <p>Kurs xaqida batafsil ma’lumot</p>
                </div>
            </div>
            <div className='box'>
                <div className='imagePart'>
                    <img src={img} alt='image'/>
                </div>
                <div className='cart'>
                    <h2>Elektron kutubxona maʼlumotlar bazasini shakllantirish va foydalanish asoslari bo’yicha malaka oshirish</h2>
                    <div className='group'>
                        <p className='first'><img src={group} alt='group'/>Tinglovchilar kontingenti:</p>
                        <p className='second'>Аxborot-kutubxona muassasalari rahbar hamda xodimlari </p>
                    </div>
                    <div className='time'>
                        <p className='first'><img src={clock} alt="clock"/>Kurs davomiyligi:</p>
                        <p className='second'> 5 kun (40 soat)</p>
                    </div>
                    <div className='buttonPart'>
                        <Link className='link' to="/application"><button>Ariza berish</button></Link>
                        <p><span>Narx: </span> 300 000 UZS</p>
                    </div>
                </div>
            </div>
            <div className='plan'>
                <h2>Kurs rejasi</h2>
                <h4>1. UMUMIY TAYYORGARLIK</h4>
                <p>- Аxborot-kutubxona faoliyatiga oid Oʼzbekiston Respublika qonunlari, Prizident farmonlari, qarorlari va farmoyishlari, Vazirlar Mahkamasining qarorlari farmoyishlari, boshqa vakolatli orgalarning normativ-huquqiy xujjatlari.  </p>
                <h4>2. UMUMMUTAXASISLIK BO'YICHA TAYYORGARLIK</h4>
                <p>- Elektron kutubxona: asosiy tushunchalar, taʼriflar, funksiyalar, vazifalar</p>
                <p>- Elektron kutubxonaning elektron katalogi</p>
                <p>- Elektron katalog yaratish tamoyillari</p>
                <p>- Elektron katalog maʼlumotlar bazasini yaratish texnologiyasi</p>
                <p>- Elektron kutubxonani shakllantishda xalqaro MARC formatlarining oʼrni</p>
                <p>- Kadata, ARMAT, IRBIS avtomatlashtirilgan axborot kutubxona tizimining avtomatlashtirilgan ish oʼrinlari</p>
                <h4>3. MUTAXASISLIK BO'YICHA TAYYORGARLIK</h4>
                <p>- Аvtomatlashtirilgan axborot-kutubxona tizimlari turlari va tahlili</p>
                <p>- Kadata, ARMAT, IRBIS da elektron katalog ma’lumotlar bazasini shakllantirish:</p>
                <p>- 1 tomlik nashrlarni shakllantirish;</p>
                <p>- Ko‘p tomlik nashrlarni shakllantirish;</p>
                <p>- Davriy nashrlarni shakllantirish;</p>
                <p>- Elektron resurslarni shakllantirish;</p>
                <p>- Kartografik ma’lumotlarni shakllantirish;</p>
                <p>- Nota nashrlarini shakllantirish;</p>
                <p>- Ovozli ma’lumotlarni shakllantirish;</p>
                <p>- Video yozuvlarni shakllantirish;</p>
                <p>- Qo‘lyozma va arxiv hujjatlarni shakllantirish.</p>
                <p>- To‘la matnli ma’lumotlarni shaklantirish:</p>
                <p>- Texnik va dasturiy vositalar;</p>
                <p>- Scan tailor dasturida ma’lumotlarni qayta ishlash;</p>
                <p>- ABBY FineReader dasturida ishlash</p>
                <p>Jaxon axborot resurslaridan foydalanish:</p>
                <p>- EBSCO ma’lumotlar bazasidan foydalanish</p>
            </div>
        </div>
    </div>
  )
}

export default Batafsil