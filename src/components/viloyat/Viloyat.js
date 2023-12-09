import React, { useEffect, useState } from 'react'
import './viloyat.css'
import Line from '../line/Line'
import logo from '../../assets/images/logo1 1.png'
import website from '../../assets/images/Website.png'
import { useLocation, useParams } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'
import axios from 'axios'
import { BASE_URL, REGION_ID } from '../../tools/urls'
function Viloyat() {
  const { state } = useLocation();

  const pk = useParams()

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let lang = JSON.parse(localStorage.getItem("lang"))
    const [content, setContent] = useState("")
    // console.log(lang)
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/${REGION_ID}/${pk.id}`);
          setData(response.data);
          console.log(response.data)
          const firstItem = response.data.translations.uz
          setContent(firstItem.description)
          // console.log(response.data)
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
    if (loading) return <p className="loading"><img src="https://miro.medium.com/v2/resize:fit:882/format:webp/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" alt="loader"/></p>;
    if (error) return <p>Error: {error.message}</p>;
  return (
    <div className='viloyat'>
        <div className='container'>
        <div className="locationOfPage">
          <p>Monitoring</p>
          <MdKeyboardArrowRight />
          <p>{state.name}</p>
        </div>
            <div className='title'>
                <Line/>
                <div className='titlePart'>
                    <h3>{data.translations.uz.name}</h3>
                    <p>{data.translations.uz.name} ma'lumotlari</p>
                </div>
            </div>
            <div className='image'>
                <div className='imagePart'>
                    <img src={data.image} alt="logo"/>
                </div>
                <div className='textPart'>
                    <p>{data.translations.uz.about}</p>
                    <a href={data.site}><button><img src={website} alt='website'/>Web saytiga o'tish</button></a>
                </div>
            </div>
            <div className='maqsadPart'>
                <p dangerouslySetInnerHTML={{ __html: content }}/>
            </div>
        </div>
    </div>
  )
}

export default Viloyat