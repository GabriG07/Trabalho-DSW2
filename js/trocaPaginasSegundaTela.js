const imagesDesktop = [
    "img/primeiraESegundaPaginas-tela2.png",
    "img/terceiraEQuartaPaginas-tela2.png"
];

const imagesMobile = [
    "img/primeiraPagina-tela2.png",
    "img/segundaPagina-tela2.png",
    "img/terceiraPagina-tela2.png",
    "img/quartaPagina-tela2.png"
];

let currentIndex = 0;
const imgElement = document.getElementById("hq-page");
const prevBtn = document.getElementById("prev-button");
const nextBtn = document.getElementById("next-button");

showImage(currentIndex);


function showImage(index) {
    const screenWidth = window.innerWidth;
    const screenImages = screenWidth <= 768 ? imagesMobile : imagesDesktop;
    if (index < 0) index = 0;
    if (index >= screenImages.length){
        index = screenImages.length - 1;
    } 
    currentIndex = index;
    imgElement.src = screenImages[currentIndex];
}

prevBtn.addEventListener("click", () => showImage(currentIndex - 1));
nextBtn.addEventListener("click", () => showImage(currentIndex + 1));

// Atualiza imagem se o usuário redimensionar a tela
window.addEventListener("resize", () => showImage(currentIndex));
