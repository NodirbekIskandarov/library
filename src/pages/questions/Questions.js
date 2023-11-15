import React from 'react'
import Line from '../../components/line/Line'
import Savollar from '../../components/savollar/Savollar'
import { useLocation } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';

function Questions() {
  const { state } = useLocation();

  return (
    <div>
        <div className='container'>
        <div className="locationOfPage">
          <p>Interaktiv xizmatlar</p>
          <MdKeyboardArrowRight />
          <p>{state.name}</p>
        </div>
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