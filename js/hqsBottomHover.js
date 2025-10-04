const hqDivs = document.querySelectorAll(".hqs-bottom > div");

hqDivs.forEach(div => {
    const img = div.querySelector("img");

    div.addEventListener("mouseenter", () => {
        if (img.src.includes("lifeIsStrangeCover.png")) {
            img.src = "img/lifeIsStrangeHover.png";
        } 
        else if(img.src.includes("houseAmokCover.png")){
            img.src = "img/houseAmokHover.png";
        }
        else if(img.src.includes("beastlandsCover.png")){
            img.src = "img/beastlandsHover.png";
        }
    });

    div.addEventListener("mouseleave", () => {
        if (img.src.includes("lifeIsStrangeHover.png")) {
            img.src = "img/lifeIsStrangeCover.png";
        } 
        else if(img.src.includes("houseAmokHover.png")){
            img.src = "img/houseAmokCover.png";
        }
        else if(img.src.includes("beastlandsHover.png")){
            img.src = "img/beastlandsCover.png";
        }
    });

    div.addEventListener("click", () => {
        if (img.src.includes("lifeIsStrangeCover.png") || img.src.includes("lifeIsStrangeHover.png")) {
            window.location.href = "tela2.html";
        }
    });
});
