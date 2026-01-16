document.addEventListener("DOMContentLoaded", function () {

    /* ===== HERO IMAGE FADE ===== */
    const bg = document.querySelector(".hero-bg");

    if (bg) {
        const images = [
            "/static/images/sliderimg1.png",
            "/static/images/sliderimg2.png",
            "/static/images/sliderimg3.png",
            "/static/images/sliderimg4.png",
            "/static/images/sliderimg5.png",
            "/static/images/sliderimg6.png"
        ];

        let index = 0;

        setInterval(() => {
            bg.style.opacity = 0;

            setTimeout(() => {
                index = (index + 1) % images.length;
                bg.style.backgroundImage = `url('${images[index]}')`;
                bg.style.opacity = 1;
            }, 1000);
        }, 5000);
    }

    /* ===== STICKY NAVBAR ===== */
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 80) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

});

/* ===== LIGHTBOX ===== */
function openLightbox(src) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}






document.addEventListener("DOMContentLoaded", function () {

    const bg = document.querySelector(".hero-bg");
    const heroContent = document.querySelector(".hero-content");
    const heroText = document.getElementById("heroText");
    const heroSub = document.getElementById("heroSub");

    const slides = [
        {
            image: "/static/images/sliderimg1.png",
            title: "Breath-Taking Makeup",
            sub: "Bridal • Party • Engagement • Photoshoot"
        },
        {
            image: "/static/images/sliderimg2.png",
            title: "Stylish Makeup",
            sub: "Modern • Elegant • Timeless Looks"
        },
        {
            image: "/static/images/sliderimg3.png",
            title: "Best Makeup Experience",
            sub: "Premium Products • Flawless Finish"
        },
        {
            image: "/static/images/sliderimg4.png",
            title: "Glamorous Transformations",
            sub: "Unleash Your Inner Beauty"
        },
        {   
            image: "/static/images/sliderimg5.png",
            title: "Professional Makeup Artistry",
            sub: "Skilled Artists • Stunning Results"
        },
        {
            image: "/static/images/sliderimg6.png",
            title: "Elegant Beauty Solutions",
            sub: "Customized for Every Occasion"
        }
    ];

    let index = 0;

    function changeSlide() {
        // Hide text
        heroContent.classList.remove("show");

        // Fade background
        bg.style.opacity = 0;

        setTimeout(() => {
            index = (index + 1) % slides.length;

            // Change background
            bg.style.backgroundImage = `url('${slides[index].image}')`;

            // Change text
            heroText.textContent = slides[index].title;
            heroSub.textContent = slides[index].sub;

            // Show background
            bg.style.opacity = 1;

            // Show text
            heroContent.classList.add("show");

        }, 900);
    }

    // Initial show
    setTimeout(() => {
        heroContent.classList.add("show");
    }, 400);

    setInterval(changeSlide, 5000);
});


