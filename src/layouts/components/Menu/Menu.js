import React from 'react'
import './menu.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
function Menu() {
    const { t } = useTranslation();
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
            hoverMenu: [
                {
                    menu: "Qoraqolpog'iston Respublikasi",
                    link: "/"
                },
                {
                    menu: "Andijon viloyati",
                    link: "/"
                },
                {
                    menu: "Buxoro viloyati",
                    link: "/"
                },
                {
                    menu: "Jizzax viloyati",
                    link: "/"
                },
                {
                    menu: "Qashqadaryo viloyati",
                    link: "/"
                },
                {
                    menu: "Jizzax viloyati",
                    link: "/"
                },
                {
                    menu: "Navoi viloyati",
                    link: "/"
                },
                {
                    menu: "Namangan viloyati",
                    link: "/"
                },
                {
                    menu: "Samarqand viloyati",
                    link: "/"
                },
                {
                    menu: "Surxondaryo viloyati",
                    link: "/"
                },
                {
                    menu: "Sirdaryo viloyati",
                    link: "/"
                },
                {
                    menu: "Farg'ona viloyati",
                    link: "/"
                },
                {
                    menu: "Xorazm viloyati",
                    link: "/xorazm"
                },
                {
                    menu: "Toshkent viloyati",
                    link: "/"
                }
            ]
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
                                <Link to={item.link} className='link'>
                                    {item.menu}
                                    <div className='hoverMenu'>
                                        {
                                            item.hoverMenu && item.hoverMenu.map((item, index) => {
                                                return (
                                                    <div className='singleHoverMenu'>
                                                        <Link className='link' key={index} state={{name: item.menu}} to={item.link}>{item.menu}</Link>
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