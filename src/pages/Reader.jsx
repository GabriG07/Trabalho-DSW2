import { useState, useEffect } from "react";
import "../assets/reader.css";

// Desktop
import d1 from "../assets/img/lis-tela2-1-2.jpg";
import d2 from "../assets/img/lis-tela2-3-4.jpg";

// Mobile
import m1 from "../assets/img/lis-tela2-1.jpg";
import m2 from "../assets/img/lis-tela2-2.jpg";
import m3 from "../assets/img/lis-tela2-3.jpg";
import m4 from "../assets/img/lis-tela2-4.jpg";
import m5 from "../assets/img/lis-tela2-5.jpg";
import m6 from "../assets/img/lis-tela2-6.jpg";
import Sidebar from "../components/Sidebar";

const desktopImages = [d1, d2];

const mobileImages = [m1, m2, m3, m4, m5, m6];

export default function Reader() {
    const [closed, setClosed] = useState(false);
    const [index, setIndex] = useState(0);
    const [images, setImages] = useState(desktopImages);

    useEffect(() => {
        const updateImages = () => {
            if (window.innerWidth <= 768) {
                setImages(mobileImages);
            } else {
                setImages(desktopImages);
            }
        };

        updateImages(); // inicial
        window.addEventListener("resize", updateImages);

        return () => window.removeEventListener("resize", updateImages);
    }, []);

    const next = () => setIndex(i => Math.min(i + 1, images.length - 1));
    const prev = () => setIndex(i => Math.max(i - 1, 0));

    return (
        <>
            <Sidebar closed={closed} setClosed={setClosed} />
            <main className={`reader-page main-content ${closed ? "expanded" : ""}`}>
                <div className="pages">
                    <img src={images[index]} alt="Página da HQ" className="hq-page" />
                </div>

                <button id="prev-button" onClick={prev} className="nav-button">◀</button>
                <button id="next-button" onClick={next} className="nav-button">▶</button>
            </main>
        </>
    );
}
