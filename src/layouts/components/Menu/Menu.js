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
                    link: "/galery"
                },
                {
                    menu: "Tashkiliy tuzulmalar",
                    link: "/structures"
                },
                {
                    menu: "Tasdiqnoma",
                    link: "/confirmation"
                }
            ]
        },
        {
            menu: "O'quv kurslari",
            link: "/",
            hoverMenu: [
                {
                    menu: "Onlayn darslar",
                    link: "/online"
                },
                {
                    menu: "Offlayn darslar",
                    link: "/courses"
                }
            ]
        },
        {
            menu: "Interaktiv xizmatlar",
            link: "/",
            hoverMenu: [
                {
                    menu: "Savol-javoblar",
                    link: "/questions"
                },
                {
                    menu: "Online shartnoma berish",
                    link: "/contract"
                },
                {
                    menu: "Online sertifikat olish",
                    link: "/certificate"
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
                    link: "/xorazm"
                },
                {
                    menu: "Toshkent viloyati",
                    link: "/"
                }
            ]
        },
        {
            menu: "Aloqa",
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