const imagesDesktop = [
    "img/lis-tela2-1-2.jpg",
    "img/lis-tela2-3-4.jpg",
    "img/lis-tela2-5-6.jpg"
];

const imagesMobile = [
    "img/lis-tela2-1.jpg",
    "img/lis-tela2-2.jpg",
    "img/lis-tela2-3.jpg",
    "img/lis-tela2-4.jpg",
    "img/lis-tela2-5.jpg",
    "img/lis-tela2-6.jpg"
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
