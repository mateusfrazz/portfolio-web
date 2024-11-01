const carousel = document.querySelector(".carousel");
const arrowIcons = document.querySelectorAll(".wrapper i");
const firstImg = carousel.querySelectorAll("img")[0];

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14;

// Estilo para rolagem suave
carousel.style.scrollBehavior = "smooth";

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // Define a rolagem para a esquerda ou direita com animação suave
        if (icon.id === "left") {
            carousel.scrollLeft -= firstImgWidth;
        } else {
            carousel.scrollLeft += firstImgWidth;
        }
    });
});

// Previne a seleção e clique nas imagens
carousel.querySelectorAll("img").forEach(img => {
    img.draggable = false; // Desabilita arrastar imagens
    img.style.pointerEvents = "none"; // Impede o clique nas imagens
});

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = () => {
    isDragStart = false;
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
