import React, { useEffect, useState } from 'react'
import './contact.css'
import books from '../../assets/images/casual-life-3d-stack-of-books-mockup 1.png'
import Line from '../line/Line'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import { BASE_URL, LANDING } from '../../tools/urls'
function Contact() {
    const { t } = useTranslation()
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [degree, setDegree] = useState("")

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/${LANDING}`);
          setData(response.data.education);
          console.log(response.data.education)
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const postData = {
        "full_name": name,
        "phone": phone,
        "academic_degree": degree
    }
    function sendFunc() {
        axios.post(`${BASE_URL}/main/user/contact/`, postData)
        .then(response => {
            console.log("response", response.data)
            alert("muvaffaqiyatli yuborildi")
        })
        .catch(error => {
            console.error("error", error)
            alert("kiritishda xatolik bor")
        })
    }
  return (
    <div className='contact'>
        <div className='container'>
            <div className='title'>
                <Line/>
                <div className='titlePart'>
                    <h3>{t("boglanish")}</h3>
                    <p>{t("oz_malumotlaringizni_qoldiring_va_biz_siz_bilan_boglanamiz")}</p>
                </div>
            </div>
            <div className='inputPart'>
                <div className='inputs'>
                    <div className='singleInput'>
                        <p>{t("f_i_o")}</p>
                        <input onInput={(e) => setName(e.target.value)} type='text' placeholder={t("ism_sharif")}/>
                    </div>
                    <div className='singleInput'>
                        <p>{t("telefon_raqam")}</p>
                        <input onInput={(e) => setPhone(e.target.value)} type='text' placeholder='+998'/>
                    </div>
                    <div className='singleInput'>
                        <p>{t("malumotlaringiz")}</p>
                        <select onChange={(e) => setDegree(e.target.value)}>
                            {
                                data && data.map((item, index) => {
                                    return (
                                        <option key={index} value={item.id}>{item.translations.uz.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <button onClick={sendFunc}>{t("jonatish")}</button>
                </div>
                <div className='image'>
                    <img src={books} alt='books'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact