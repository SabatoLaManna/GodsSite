const images = document.querySelectorAll(".accordion img");
let current = 0;

function rotateAccordion() {
    images.forEach((img, index) => {
        img.style.width = index === current ? "60%" : "13%";
    });

    current++;
    if (current >= images.length) {
        current = 0;
    }
}

setInterval(rotateAccordion, 3000);
rotateAccordion();
