'use client'
import React, { useEffect, useReducer, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const MenusItem = [
    {
        menu: 'یارات موتورز',
        link: '/',
    },
    {
        menu: 'محصولات',
        link: '/car-listing',
    },
    // {
    //     menu: 'گالری',
    //     link: '/gallery',
    // },
    // {
    //     menu: 'خدمات',
    //     subMenu: [
    //         { childe: 'تعمیرات', link: '/services/repairs' },
    //         { childe: 'تجربه مشتری‌ها', link: '/services/customer-experience' },
    //     ]
    // },
    // {
    //     menu: 'راهنما',
    //     subMenu: [
    //         { childe: 'قوانین خرید', link: '/help/purchase-rules' },
    //         { childe: 'سوالات متداول', link: '/help/faq' },
    //     ]
    // },
    {
        menu: 'درباره',
        link: '/about-us',
    },
    {
        menu: 'تماس',
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

    const menuHandler = (status, hasSubmenu, e) => {
        if (hasSubmenu) {
            e.preventDefault();
            setState({ activeSubmenu: state.activeSubmenu === status ? "" : status })
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
    const submenuHandler = (menuStatus, e) => {
        e.preventDefault();
        setMenuState({ activemenu: menuState.activemenu === menuStatus ? "" : menuStatus })
    }

    useEffect(() => {
        MenusItem.forEach((data) => {
            if (data?.subMenu?.length > 0) {
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
            } else {
                if (data.link === pathname) {
                    setActiveLink(data.menu);
                }
            }
        })
    }, [pathname])


    return (
        <>
            <ul className="nav navbar-nav navbar navbar-left p-t50">
                {MenusItem.map((menu, index) => {
                    const hasSubMenu = menu.subMenu && menu.subMenu.length > 0;

                    return (
                        <li key={index}
                            className={
                                `sub-menu-down ${state.activeSubmenu === menu.menu ? 'open' : ''} 
                                ${menu.menu === activeLink ? "active" : ""}
                                `}>
                            {hasSubMenu ? (
                                <Link href={menu.link || '#'}
                                      onClick={(e) => menuHandler(menu.menu, true, e)}>
                                    {menu.menu}
                                    <i className="fa fa-angle-down"></i>
                                </Link>
                            ) : (
                                <Link href={menu.link} onClick={() => setOpen && setOpen(false)}>
                                    {menu.menu}
                                </Link>
                            )}
                            {hasSubMenu && (
                                <ul className={`sub-menu ${state.activeSubmenu === menu.menu ? 'show' : ''}`}>
                                    {menu.subMenu.map((item, ind) => {
                                        const hasChildSubMenu = item.submenus && item.submenus.length > 0;

                                        if (hasChildSubMenu) {
                                            return (
                                                <li key={ind} className={`sub-menu-down ${menuState.activemenu === ind ? 'open' : ''}`}>
                                                    <Link href={item.link || '#'}
                                                          onClick={(e) => submenuHandler(ind, e)}>
                                                        {item.childe}
                                                        <i className={`fa fa-angle-${menuState.activemenu === ind ? 'down' : 'right'}`}></i>
                                                    </Link>
                                                    <ul className={`sub-menu ${menuState.activemenu === ind ? 'show' : ''}`}>
                                                        {item.submenus.map((childe, mapKey) => {
                                                            return (
                                                                <li key={mapKey} className='sub-menu-down'>
                                                                    <Link href={childe.link} onClick={() => setOpen && setOpen(false)}>
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
                                                    <Link href={item.link} onClick={() => setOpen && setOpen(false)}>
                                                        {item.childe}
                                                    </Link>
                                                </li>
                                            )
                                        }
                                    })}
                                </ul>
                            )}
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
