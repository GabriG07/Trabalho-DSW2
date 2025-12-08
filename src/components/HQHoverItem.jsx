import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/hover.css";
import "../index.css";

export default function HQHoverItem({ normal, comicData, comicChapter, user, alt, ...rest }) {
    const desktopMinWidth = 600;
    const [isHover, setIsHover] = useState(false);
    const navigate = useNavigate();

    //Desktop
    function handleMouseEnter() {
        if (window.innerWidth >= desktopMinWidth) {
            setIsHover(true);
        }
    }
    function handleMouseLeave() {
        if (window.innerWidth >= desktopMinWidth) {
            setIsHover(false);
        }
    }


    const handleClick = () => {
        // 1º clique só ativa o hover
        if (!isHover) {
            setIsHover(true);
            return;
        }

        // 2º clique navega
        navigate("/tela2" , {
            state: {
                userData: user,
                comicChapter: comicChapter,
            }
        });
    };

    return (
        <div
            className="hq-item" {...rest}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <img src={normal} alt={alt} />
            {isHover && (
                 <div className="hover-image">
                    <img src = {"https://uploads.mangadex.org/data-saver/"+ comicChapter?.chapter?.hash + "/" + comicChapter?.chapter?.dataSaver[1] || normal}/>
                </div>
            )}
            {isHover && (
                 <div className="hoverComponent">
                    <text className="hoverComponent-text-title">{comicData?.data?.attributes?.title?.en || ''}</text>
                    <text className="hoverComponent-text-subtitle">{comicData?.data?.attributes?.description?.en || ''}</text>
                </div>
            )}
        </div>
    );
}
