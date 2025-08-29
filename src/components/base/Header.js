'use client'
import React, { useState, useEffect } from 'react'
import Menus from './Menus'
import Link from "next/link";
import Image from 'next/image';
import {IMAGE} from "@/constent/theme";

const Header = () => {
    const [header, setHeader] = useState(null);
    const [addOpen, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            let scroll = window.scrollY;
            scroll > 80 ? setHeader('is-fixed') : setHeader(null);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`site-header mo-left header style-1 ${header}`} style={{ zIndex: 10 }}>
                <div className="sticky-header main-bar-wraper navbar-expand-lg">
                    <div className="main-bar clearfix" style={{ transition: 'all .5s' }}>
                        <div className="container clearfix">
                            {/* <!-- Website Logo --> */}
                            <div className="logo-header mostion logo-dark">
                                <Link href={'/'}>
                                    <Image
                                        src={IMAGE.logo1}
                                        alt="Logo"
                                        width={150}
                                        height={50}
                                    />
                                </Link>
                            </div>
                            {/* <!-- Nav Toggle Button --> */}
                            <button
                                onClick={() => { setOpen(!addOpen) }}
                                className={`navbar-toggler collapsed navicon justify-content-end ${addOpen ? 'open' : ''}`}
                                type="button"
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            {/* <!-- Extra Nav --> */}
                            <div className="extra-nav">
                                <div className="extra-cell">
                                    <Link
                                        href="tel:224000221133"
                                        className="btn btn-primary light phone-no shadow-none effect-1 focusBtn"
                                    >
                                        <span>
                                            <i className="fas fa-phone-volume shake"></i>
                                            224 000 22 11 33
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
