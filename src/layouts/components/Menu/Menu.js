import React from 'react'
import './menu.css'
import { Link } from 'react-router-dom'
function Menu() {
    const data = [
        {
            menu: "Asosiy menyu",
            link: "/",
            hoverMenu: []
        },
        {
            menu: "Markaz haqida",
            link: "/",
            hoverMenu: [
                {
                    menu: "Tarix",
                    link: "/history"
                },
                {
                    menu: "Raxbariyat",
                    link: "/managment"
                },
                {
                    menu: "Me'yoriy hujjatlar",
                    link: "/regulatory"
                },
                {
                    menu: "Fotogalereya",
                    link: "/"
                },
                {
                    menu: "Tashkiliy tuzulmalar",
                    link: "/"
                },
                {
                    menu: "Tasdiqnoma",
                    link: "/"
                }
            ]
        },
        {
            menu: "O'quv kurslari",
            link: "/",
            hoverMenu: [
                {
                    menu: "Onlayn darslar",
                    link: "/"
                },
                {
                    menu: "Offlayn darslar",
                    link: "/"
                }
            ]
        },
        {
            menu: "Interaktiv xizmatlar",
            link: "/",
            hoverMenu: [
                {
                    menu: "Savol-javoblar",
                    link: "/"
                },
                {
                    menu: "Online shartnoma berish",
                    link: "/"
                },
                {
                    menu: "Online sertifikat olish",
                    link: "/"
                }
            ]
        },
        {
            menu: "Monitoring",
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
                    link: "/"
                },
                {
                    menu: "Toshkent viloyati",
                    link: "/"
                }
            ]
        },
        {
            menu: "Aloqa",
            link: "/",
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
                                                        <Link className='link' key={index} to={item.link}>{item.menu}</Link>
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