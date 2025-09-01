'use client'
import React, { useState, useEffect } from 'react'
import Menus from './menus'
import Link from "next/link";
import Image from 'next/image';
import {IMAGE} from "@/constent/theme";

const Header = () => {
    const [header, setHeader] = useState(null);
    const [addOpen, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            let scroll = document.scrollY;
            scroll > 80 ? setHeader('is-fixed') : setHeader(null);
        };
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`site-header mo-left header style-1 ${header}`} style={{ zIndex: 10 }}>
                <div className="sticky-header main-bar-wraper navbar-expand-lg">
                    <div className="main-bar clearfix" style={{ transition: 'all .5s' }}>
                        <div className="container clearfix">
                            <div className="logo-header mostion logo-dark">
                                <Link href={'/'}>
                                    <Image
                                        src='/assets/images/logo.png'
                                        alt="Logo"
                                        width={150}
                                        height={50}
                                    />
                                </Link>
                            </div>
                            <button
                                onClick={() => { setOpen(!addOpen) }}
                                className={`navbar-toggler collapsed navicon justify-content-end ${addOpen ? 'open' : ''}`}
                                type="button"
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <div className="extra-nav">
                                <div className="extra-cell">
                                    <Link
                                        href="tel:09125475547"
                                        className="btn btn-primary light phone-no shadow-none effect-1 focusBtn"
                                    >
                                        <span>
                                            <i className="fas fa-phone-volume shake"></i>
                                            09125475547
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className={`header-nav navbar-collapse collapse justify-content-center ${addOpen ? 'show' : ''}`} id="navbarNavDropdown">
                                <div className="logo-header">
                                    <Link href={'/'}>
                                        <Image
                                            src={IMAGE.logo2}
                                            alt="Logo"
                                            width={150}
                                            height={50}
                                        />
                                    </Link>
                                </div>
                                <Menus setOpen={setOpen} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
