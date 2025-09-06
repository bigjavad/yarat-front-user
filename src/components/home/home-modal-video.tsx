"use client"
import React, {useState} from 'react';
import ModalVideo from "react-modal-video";

function HomeModalVideo() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <ModalVideo channel="youtube" autoplay
                        isOpen={open} videoId="PkkV1vLHUvQ" onClose={() => setOpen(false)}/>
        </div>
    );
}

export default HomeModalVideo;
