import React from 'react'
import './selection.css'
import girl from '../../assets/images/Pexels Photo by Antoni Shkraba.png'
import Line from '../line/Line'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
function Selection() {
  const { t } = useTranslation();
  return (
    <div className='selection'>
        <div className='container'>
            <div className='titlePart'>
                <Line/>
                <div>
                    <h3>Eng yaxshi kutubxonachi ko'rik tanlovi</h3>
                    <p>{t("tanlov_shartlari_quyidagilardan_iborat")}</p>
                </div>
            </div>
            <div className='conditions'>
                <div className='conditionsPart'>
                    <div className='textPart'>
                        <div className='singleText'>
                            <div className='countPart'>
                                <span>1</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur. Enim risus aliquam elit risus amet.</p>
                        </div>
                        <div className='singleText'>
                            <div className='countPart'>
                                <span>2</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur. Enim risus aliquam elit risus amet.</p>
                        </div>
                        <div className='singleText'>
                            <div className='countPart'>
                                <span>3</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur. Enim risus aliquam elit risus amet.</p>
                        </div>
                    </div>
                    <Link className='link' to="/registration"><button>{t("royhatdan_otish")}</button></Link>
                </div>
                <div className='imagePart'>
                    <img src={girl} alt='girl'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Selection