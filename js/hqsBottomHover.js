const hqDivs = document.querySelectorAll(".hqs-bottom > div");

hqDivs.forEach(div => {
    const img = div.querySelector("img");

    div.addEventListener("mouseenter", () => {
        if (img.src.includes("lifeIsStrangeCover.png")) {
            img.src = "img/lifeIsStrangeHover.png";
        } 
    });

    div.addEventListener("mouseleave", () => {
        if (img.src.includes("lifeIsStrangeHover.png")) {
            img.src = "img/lifeIsStrangeCover.png";
        } 
    });

    div.addEventListener("click", () => {
        if (img.src.includes("lifeIsStrangeCover.png") || img.src.includes("lifeIsStrangeHover.png")) {
            window.location.href = "tela2.html";
        }
    });
});
