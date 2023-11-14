import React from 'react'
import './tuzilmalar.css'
import Line from '../line/Line'
function Tuzilmalar() {
  return (
    <div className='tuzilmalar'>
        <div className='container'>
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