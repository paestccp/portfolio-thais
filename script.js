/* ---------------- CURSOR ---------------- */

const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

document.addEventListener("mousemove", (event) => {

    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";

    follower.animate(
        {
            left: event.clientX + "px",
            top: event.clientY + "px"
        },
        {
            duration: 400,
            fill: "forwards"
        }
    );

});


/* ---------------- MAGNETIC LINKS ---------------- */

document.querySelectorAll("a, button").forEach(element => {

    element.addEventListener("mouseenter", () => {

        follower.style.width = "55px";
        follower.style.height = "55px";

    });

    element.addEventListener("mouseleave", () => {

        follower.style.width = "35px";
        follower.style.height = "35px";

    });

});


/* ---------------- MOBILE MENU ---------------- */

const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});


document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});


/* ---------------- SCROLL REVEAL ---------------- */

const revealElements = document.querySelectorAll(
    ".about-grid, .number-item, .service, .project, .timeline-item, .tool-grid"
);


const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(40px)";

    element.style.transition =
        "opacity .8s ease, transform .8s cubic-bezier(.2,.7,.2,1)";

    observer.observe(element);

});


/* ---------------- PARALLAX HERO ---------------- */

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    const circle = document.querySelector(".hero-circle");

    if (circle) {

        circle.style.transform =
            `translateY(${scroll * 0.15}px)`;

    }

});