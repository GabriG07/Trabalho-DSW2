const hqDivs = document.querySelectorAll(".hqs-bottom > div");

hqDivs.forEach(div => {
    const img = div.querySelector("img");
    let isHoverActive = false;

    const showHover = () => {
        if (img.src.includes("lifeIsStrangeCover.png")) {
            img.src = "img/lifeIsStrangeHover.png";
            isHoverActive = true;
        } 
        else if(img.src.includes("houseAmokCover.png")){
            img.src = "img/houseAmokHover.png";
            isHoverActive = true;
        }
        else if(img.src.includes("beastlandsCover.png")){
            img.src = "img/beastlandsHover.png";
            isHoverActive = true;
        }
    };

    // Função para esconder o hover
    const hideHover = () => {
        if (img.src.includes("lifeIsStrangeHover.png")) {
            img.src = "img/lifeIsStrangeCover.png";
            isHoverActive = false;
        } 
        else if(img.src.includes("houseAmokHover.png")){
            img.src = "img/houseAmokCover.png";
            isHoverActive = false;
        }
        else if(img.src.includes("beastlandsHover.png")){
            img.src = "img/beastlandsCover.png";
            isHoverActive = false;
        }
    };

    div.addEventListener("mouseenter", () => {
        showHover();
    });

    div.addEventListener("mouseleave", () => {
        hideHover();
    });

    div.addEventListener("click", (e) => {
        if (!isHoverActive) {
            e.preventDefault();
            showHover();
            return;
        }

        if (img.src.includes("lifeIsStrangeCover.png") || img.src.includes("lifeIsStrangeHover.png")) {
            window.location.href = "tela2.html";
        }
    });

    div.addEventListener("touchstart", (e) => {
        if (!isHoverActive) {
            e.preventDefault();
            showHover();
        }
    });

    document.addEventListener("touchstart", (e) => {
        if (!div.contains(e.target) && isHoverActive) {
            hideHover();
        }
    });
});
