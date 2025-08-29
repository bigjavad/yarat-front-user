'use client'
import React, { useEffect, useReducer, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const MenusItem = [
    {
        menu: 'یارات موتور',
        link: '/',
    },
    {
        menu: 'محصولات',
        link: '/products',
        subMenu: [
            { childe: 'لیست ماشین‌ها', link: '/car-listing' },
            { childe: 'خرید و فروش دست دوم', link: '/used-cars' },
        ]
    },
    {
        menu: 'گالری',
        link: '/gallery',
    },
    {
        menu: 'خدمات',
        link: '/services',
        subMenu: [
            { childe: 'تعمیرات', link: '/services/repairs' },
            { childe: 'تجربه مشتری‌ها', link: '/services/customer-experience' },
        ]
    },
    {
        menu: 'راهنما',
        link: '/help',
        subMenu: [
            { childe: 'قوانین خرید', link: '/help/purchase-rules' },
            { childe: 'راهنمای خرید', link: '/help/how-to-buy' },
            { childe: 'سوالات متداول', link: '/help/faq' },
        ]
    },
    {
        menu: 'درباره ما',
        link: '/about-us',
    },
    {
        menu: 'تماس با ما',
        link: '/contact-us',
    }
]


const Menus = ({ setOpen }) => {
    const pathname = usePathname();
    const [activeLink, setActiveLink] = useState('');

    const reducer = (previousState, updatedState) => ({
        ...previousState,
        ...updatedState,
    });
    const initialState = {
        activeSubmenu: "",
    }

    const [state, setState] = useReducer(reducer, initialState);
    const menuHandler = (status) => {
        setState({ activeSubmenu: status })
        if (state.activeSubmenu === status) {
            setState({ activeSubmenu: "" })
        }
    }

    //sub menu toggle
    const reducermenu = (menuPreviousState, menuUpdatedState) => ({
        ...menuPreviousState,
        ...menuUpdatedState,
    });
    const menuInitialState = {
        activemenu: "",
    }

    const [menuState, setMenuState] = useReducer(reducermenu, menuInitialState);
    const submenuHandler = (menuStatus) => {
        setMenuState({ activemenu: menuStatus })
        if (menuState.activemenu === menuStatus) {
            setMenuState({ activemenu: "" })
        }
    }

    useEffect(() => {
        MenusItem.forEach((data) => {
            if (data.subMenu?.length > 0){
                data.subMenu.forEach((item) => {
                    if (item.link === pathname) {
                        setActiveLink(data.menu);
                    }
                    item?.submenus?.forEach((el) => {
                        if (el.link === pathname) {
                            setActiveLink(data.menu);
                        }
                    })
                })
            }
        })
    }, [pathname])

    return (
        <>
            <ul className="nav navbar-nav navbar navbar-left p-t50">
                {MenusItem.map((menu, index) => {
                    return (
                        <li key={index}
                            className={
                                `sub-menu-down ${state.activeSubmenu === menu.menu ? 'open' : ''} 
                                ${menu.menu === activeLink ? "active" : ""}
                                `}>
                            <Link href="#" onClick={(e) => {
                                e.preventDefault();
                                menuHandler(menu.menu);
                            }}>
                                {menu.menu}
                                {
                                    menu.subMenu && <i className="fa fa-angle-down"></i>
                                }
                            </Link>
                            {
                                menu.subMenu && <ul className="sub-menu">
                                    { menu.subMenu.map((item, ind) => {
                                        let subMenuClass = item.dropdown;
                                        if (subMenuClass === "sub-menu-down") {
                                            return (
                                                <li key={ind} className={`sub-menu-down ${menuState.activemenu === ind ? 'open' : ''}`}>
                                                    <Link href="#" onClick={(e) => {
                                                        e.preventDefault();
                                                        submenuHandler(ind);
                                                    }}>
                                                        {item.childe}<i className={`fa fa-angle-${menuState.activemenu === ind ? 'down' : 'right'}`}></i>
                                                    </Link>
                                                    <ul className='sub-menu'>
                                                        {item.submenus.map((childe, mapKey) => {
                                                            return (
                                                                <li key={mapKey} className='sub-menu-down'>
                                                                    <Link href={childe.link}>
                                                                        {childe.shildes}
                                                                    </Link>
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                </li>
                                            )
                                        } else {
                                            return (
                                                <li key={ind} className='sub-menu-down'>
                                                    <Link href={item.link}>{item.childe}</Link>
                                                </li>
                                            )
                                        }
                                    })}
                                </ul>

                            }
                        </li>
                    )
                })}
            </ul>
            <div className="dlab-social-icon p-t50">
                <ul>
                    <li><Link href="#" className="fab fa-facebook-f"></Link></li>
                    <li><Link href="#" className="fab fa-twitter"></Link></li>
                    <li><Link href="#" className="fab fa-linkedin-in"></Link></li>
                    <li><Link href="#" className="fab fa-instagram"></Link></li>
                </ul>
            </div>
        </>
    )
}

export default Menus
