document.addEventListener("DOMContentLoaded", () => {
    const myPhotoSection = document.querySelector(".my-photo-section");

    const bodyDiv = document.querySelector("body");

    const maxRotation = 15;
    let rafId = null;

    let currentRotateX = 0;
    let currentRotateY = 0;

    function updateTransform() {
        myPhotoSection.style.transform = `perspective(500px) rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg)`;
        rafId = null; // ID'yi sıfırla, bir sonraki frame için tekrar istenecek
    }

    myPhotoSection.addEventListener("mousemove", (e) => {

        const rect = myPhotoSection.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const normalizedX = x / (rect.width / 2);
        const normalizedY = y / (rect.height / 2);

        const targetRotateX = -normalizedY * maxRotation;
        const targetRotateY = normalizedX * maxRotation;

        currentRotateX = targetRotateX;
        currentRotateY = targetRotateY;

        if (rafId === null) {
            rafId = requestAnimationFrame(updateTransform);
        }

    })

    myPhotoSection.addEventListener("mouseleave", () => {
        // Mouse ayrıldığında rotasyonu sıfırla
        currentRotateX = 0;
        currentRotateY = 0;

        if (rafId === null) {
            rafId = requestAnimationFrame(updateTransform);
        }
    });

});