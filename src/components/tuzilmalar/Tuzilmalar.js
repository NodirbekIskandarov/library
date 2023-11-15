import React from 'react'
import './tuzilmalar.css'
import Line from '../line/Line'
import { useLocation } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
function Tuzilmalar() {
  const { state } = useLocation();

  return (
    <div className='tuzilmalar'>
        <div className='container'>
        <div className="locationOfPage">
          <p>Markaz haqida</p>
          <MdKeyboardArrowRight />
          <p>{state.name}</p>
        </div>
            <div className='title'>
                <Line/>
                <div className='titlePart'>
                    <h2>Tashkiliy tuzilmalar</h2>
                    <p>Kutubxonamiz tashkiliy tuzilmasi</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tuzilmalar