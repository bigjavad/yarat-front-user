import React from 'react';
import Link from "next/link";

function SocialMediaLinks() {
    return (
        <ul className="social-list style-1">
            <li><Link href="https://wa.me/09125475547"><i className="fab fa-whatsapp"></i></Link>
            </li>
            <li><Link href="https://www.instagram.com/yaratmotors?igsh=cGF3cWhrNjlqaG53"><i className="fab fa-instagram"></i></Link>
            </li>
        </ul>
    );
}

export default SocialMediaLinks;
