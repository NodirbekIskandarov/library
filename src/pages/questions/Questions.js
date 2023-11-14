import React from 'react'
import Line from '../../components/line/Line'
import Savollar from '../../components/savollar/Savollar'

function Questions() {
  return (
    <div>
        <div className='container'>
            <div className='title'>
                <Line/>
                <div className='titlePart'>
                    <h3>Online savol javob</h3>
                    <p>O’zingizni qiziqtirgan savollaringizni bizdan so’rang</p>
                </div>
            </div>
            <Savollar/>
        </div>
    </div>
  )
}

export default Questions