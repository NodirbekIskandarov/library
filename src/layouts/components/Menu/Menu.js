import React, { useEffect, useState } from 'react'
import './menu.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { BASE_URL, LANDING } from '../../../tools/urls';
function Menu({showMenu, children}) {

    const { t } = useTranslation();
    const [data2, setData2] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let lang = JSON.parse(localStorage.getItem("lang"))
    // console.log(lang)
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/${LANDING}`);
          setData2(response.data.regions);
        //   console.log(response.data.regions)
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error.message}</p>;
    
    const data = [
        {
            menu: t("asosiy_sahifa"),
            link: "/",
            hoverMenu: []
        },
        {
            menu: t("markaz_haqida"),
            link: "/",
            hoverMenu: [
                {
                    menu: t("tarix"),
                    link: "/history"
                },
                {
                    menu: t("raxbariyat"),
                    link: "/managment"
                },
                {
                    menu: t("meyoriy_hujjatlar"),
                    link: "/regulatory"
                },
                {
                    menu: t("fotogalereya"),
                    link: "/galery"
                },
                {
                    menu: t("tashkiliy_tuzilmalar"),
                    link: "/structures"
                },
                {
                    menu: t("tasdiqnoma"),
                    link: "/confirmation"
                }
            ]
        },
        {
            menu: t("oquv_kurslari"),
            link: "/",
            hoverMenu: [
                {
                    menu: t("onlayn_darslar"),
                    link: "/online"
                },
                {
                    menu: t("offlayn_darslar"),
                    link: "/courses"
                }
            ]
        },
        {
            menu: t("interaktiv_xizmatlar"),
            link: "/",
            hoverMenu: [
                {
                    menu: t("savol_javoblar"),
                    link: "/questions"
                },
                {
                    menu: t("online_shartnoma_berish"),
                    link: "/contract"
                },
                {
                    menu: t("online_sertifikat_berish"),
                    link: "/certificate"
                }
            ]
        },
        {
            menu: t("monitoring"),
            link: "/",
            hoverMenu: data2
        },
        {
            menu: t("aloqa"),
            link: "/contact",
            hoverMenu: []
        }
    ]

  return (
    <div className='menu'>
        <div className='container'>
            <div className='mainMenuList'>
                {
                    data && data.map((item, index) => {
                        return (
                            <div key={index} className='singleMenu'>
                                <Link onClick={() => {
                                    if(item.hoverMenu.length < 0) {
                                        return showMenu()
                                    }

                                }} to={item.link} className='link'>
                                    {item.menu}
                                    <div className='hoverMenu'>
                                        {
                                            item.hoverMenu && item.hoverMenu.map((item, index) => {
                                                return (
                                                    <div className='singleHoverMenu'>
                                                        <a link></a>
                                                        <Link onClick={showMenu} className='link' key={index} state={{name: item.menu}} to={item.link || `/region/${item.id}`}>{item.menu || item.translations.uz.name}</Link>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Menu