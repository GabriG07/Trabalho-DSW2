import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HQHoverItem({ normal, hover, link, alt, ...rest }) {
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
        if (link) navigate(link);
        else if (window.innerWidth <= desktopMinWidth) setIsHover(false);
    };

    return (
        <div
            className="hq-item" {...rest}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <img src={isHover ? hover : normal} alt={alt} />
        </div>
    );
}
