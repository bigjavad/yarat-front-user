'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const MenusItem = [
    { menu: 'یارات موتور', link: '/' },
    {
        menu: 'محصولات',
        link: '/products',
        subMenu: [
            { childe: 'لیست ماشین‌ها', link: '/car-listing' },
            { childe: 'خرید و فروش دست دوم', link: '/used-cars' },
        ]
    },
    { menu: 'گالری', link: '/gallery' },
    {
        menu: 'خدمات',
        subMenu: [
            { childe: 'تعمیرات', link: '/services/waranty' },
            { childe: 'تجربه مشتری‌ها', link: '/services/customer-experience' },
        ]
    },
    {
        menu: 'راهنما',
        subMenu: [
            { childe: 'قوانین خرید', link: '/help/purchase-rules' },
            { childe: 'سوالات متداول', link: '/help/faq' },
        ]
    },
    { menu: 'درباره ما', link: '/about-us' },
    { menu: 'تماس با ما', link: '/contact-us' },
]

interface MenusProps {
    setOpen?: (open: boolean) => void
}

const Menus: React.FC<MenusProps> = ({ setOpen }) => {
    const pathname = usePathname()
    const [activeLink, setActiveLink] = useState('')
    const [activeSubmenu, setActiveSubmenu] = useState('')
    const [activeChildMenu, setActiveChildMenu] = useState<number | null>(null)

    useEffect(() => {
        MenusItem.forEach((data) => {
            if (data.link === pathname) {
                setActiveLink(data.menu)
                setActiveSubmenu('')
                setActiveChildMenu(null)
            }
            if (data.subMenu) {
                data.subMenu.forEach((item, idx) => {
                    if (item.link === pathname) {
                        setActiveLink(data.menu)
                        setActiveSubmenu(data.menu)
                        setActiveChildMenu(idx)
                    }
                })
            }
        })
    }, [pathname])

    const toggleSubmenu = (menu: string) => {
        setActiveSubmenu(activeSubmenu === menu ? '' : menu)
        setActiveChildMenu(null)
    }

    const toggleChildMenu = (index: number) => {
        setActiveChildMenu(activeChildMenu === index ? null : index)
    }

    return (
        <>
            <ul className="nav navbar-nav p-t50">
                {MenusItem.map((menu, index) => {
                    const hasSubMenu = !!menu.subMenu?.length
                    const isActive = menu.menu === activeLink
                    const isOpen = menu.menu === activeSubmenu

                    return (
                        <li key={index} className={`sub-menu-down ${isOpen ? 'open' : ''} ${isActive ? 'active' : ''}`}>
                            {hasSubMenu ? (
                                <button
                                    onClick={() => toggleSubmenu(menu.menu)}
                                    className="flex items-center gap-1"
                                >
                                    {menu.menu} <i className="fa fa-angle-down"></i>
                                </button>
                            ) : (
                                <Link href={menu.link!} onClick={() => setOpen?.(false)}>
                                    {menu.menu}
                                </Link>
                            )}

                            {hasSubMenu && (
                                <ul className={`sub-menu ${isOpen ? 'show' : ''}`}>
                                    {menu.subMenu!.map((item, ind) => {
                                        const childIsOpen = activeChildMenu === ind
                                        return (
                                            <li key={ind} className={`sub-menu-down ${childIsOpen ? 'open' : ''}`}>
                                                <Link href={item.link} onClick={() => setOpen?.(false)}>
                                                    {item.childe}
                                                </Link>
                                            </li>
                                        )
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
