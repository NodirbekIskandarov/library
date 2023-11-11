import React from 'react'
import './hujjatlar.css'
import Line from '../line/Line'
function Hujjatlar() {
    const data = [
        {
            text: "O‘zbekiston Respublikasi qonunlari",
            link: "/"
        },
        
    ]
  return (
    <div className='hujjatlar'>
        <div className='container'>
            <div className='title'>
                <Line/>
                <div className='titlePart'>
                    <h3>Axborot-kutubxona faoliyatiga oid me'yoriy-huquqiy hujjatlar</h3>
                    <p>Huquqiy me’yoriy xujjatlar</p>
                </div>
            </div>
            <div className='row'>

            </div>
        </div>
    </div>
  )
}

export default Hujjatlar