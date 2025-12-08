import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../assets/reader.css";
import arrowLeft from "../assets/img/arrow_left.png";
import arrowRight from "../assets/img/arrow_right.png";

import Sidebar from "../components/Sidebar";

export default function Reader() {
    
    const location = useLocation();
    
    const { userData } = location.state || {};
    const { comicChapter } = location.state || {};
    const [closed, setClosed] = useState(false);
    const [index, setIndex] = useState(0);
    const [image, setImage] = useState("teste");

    useEffect(() => {
        const updateImages = () => {
            setImage("https://uploads.mangadex.org/data-saver/"+ comicChapter?.chapter?.hash + "/" + comicChapter?.chapter?.dataSaver[index]);
        };

        console.log(comicChapter);

        updateImages(); // inicial
        window.addEventListener("resize", updateImages);

        return () => window.removeEventListener("resize", updateImages);
    }, []);

    const next = () => {
        var indexAtual = index + 1;
        setIndex(indexAtual);
        setImage("https://uploads.mangadex.org/data-saver/"+ comicChapter?.chapter?.hash + "/" + comicChapter?.chapter?.dataSaver[indexAtual]);
    };
    const prev = () => {
        var indexAtual = index - 1;
        setIndex(indexAtual);
        setImage("https://uploads.mangadex.org/data-saver/"+ comicChapter?.chapter?.hash + "/" + comicChapter?.chapter?.dataSaver[indexAtual]);
    };

    return (
        <>
            <Sidebar user={userData} closed={closed} setClosed={setClosed} />
            <main className={`reader-page main-content ${closed ? "expanded" : ""}`}>
                <div className="pages">
                    <img src={image} alt="Página da HQ" className="hq-page" />
                </div>

                {(index != 0) && (<img src={arrowLeft} id="prev-button" onClick={prev} className="nav-button"></img>)}
                {(index != (comicChapter?.chapter?.dataSaver.length - 1)) && (<img src={arrowRight} id="next-button" onClick={next} className="nav-button"></img>)}
            </main>
        </>
    );
}
