document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".header-nav");
    const hoverBg = document.querySelector(".header-nav-hover");
    const items = document.querySelectorAll(".header-nav li");
    console.log(menu, hoverBg, items);

    if (!menu || !hoverBg || items.length === 0) return;

    var state = 0;

    items.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            const itemRect = item.getBoundingClientRect();

            const menuRect = menu.getBoundingClientRect();

            console.log(itemRect.left, menuRect.left);

            const itemWidthAbs = itemRect.left - menuRect.left;

            hoverBg.style.width = `${itemRect.width}px`;
            hoverBg.style.left = `${itemWidthAbs}px`;
            hoverBg.style.zIndex = -1;
        });
    });

    menu.addEventListener("mouseleave", () => {
        hoverBg.style.width = `0`;
    });

});

document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.querySelector(".hamburger-btn");
    const headerNav = document.querySelector(".header-nav");

    hamburgerBtn.addEventListener("click", () => {
        headerNav.classList.toggle("active");
        hamburgerBtn.classList.toggle("active");
    });

    // Close menu when clicking on a link (mobile)
    const navLinks = document.querySelectorAll(".nav-links li");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 1120) {
                headerNav.classList.remove("active");
                hamburgerBtn.classList.remove("active");
            }
        });
    });
});