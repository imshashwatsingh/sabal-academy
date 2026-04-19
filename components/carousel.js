class SabalCarousel extends HTMLElement {
  connectedCallback() {
    // Determine base path to assets based on document location if needed,
    // but this is mostly on index.html so 'assets/' is fine.
    this.innerHTML = `
        <style>
        .sabal-carousel {
            position: relative;
            width: 100%;
            height: 100vh;
            min-height: 600px;
            overflow: hidden;
            background-color: #111;
        }
        .carousel__slides {
            width: 100%;
            height: 100%;
            position: relative;
        }
        .carousel__slide {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            opacity: 0;
            transition: opacity 3.5s ease-in-out;
            z-index: 1;
        }
        .carousel__slide.active {
            opacity: 1;
            z-index: 2;
        }
        .carousel__slide img {
            width: 100%;
            height: 100%;
            object-fit: cover; /* this is the key to make it responsive */
            object-position: center;
        }
        .carousel__overlay {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 100%);
            z-index: 3;
            pointer-events: none;
        }
        .carousel__content {
            position: absolute;
            top: 50%; 
            left: 5%;
            transform: translateY(-50%);
            z-index: 4;
            color: white;
            max-width: 600px;
        }
        .carousel__title {
            font-size: 3rem;
            font-weight: 800;
            margin-bottom: 1rem;
            line-height: 1.2;
            text-shadow: 2px 2px 8px rgba(0,0,0,0.5);
            animation: slideUp 0.8s ease-out;
        }
        .carousel__subtitle {
            font-size: 1.25rem;
            margin-bottom: 2rem;
            opacity: 0.9;
            text-shadow: 1px 1px 4px rgba(0,0,0,0.5);
            animation: slideUp 1s ease-out;
        }
        .carousel__btn-container {
            animation: slideUp 1.2s ease-out;
        }
        @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .carousel__control {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(0,0,0,0.6);
            color: white;
            border: 2px solid rgba(255,255,255,0.8);
            font-size: 2rem;
            padding: 1rem;
            cursor: pointer;
            z-index: 5;
            transition: all 0.3s;
            border-radius: 50%;
            width: 70px;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            backdrop-filter: blur(5px);
            box-shadow: 0 4px 10px rgba(0,0,0,0.5);
        }
        .carousel__control:hover { 
            background: rgba(0,0,0,0.9); 
            transform: translateY(-50%) scale(1.1);
        }
        .carousel__control--prev { left: 20px; }
        .carousel__control--next { right: 20px; }
        .carousel__dots {
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 5;
            display: flex;
            gap: 12px;
        }
        .carousel__dot {
            width: 12px; height: 12px;
            border-radius: 50%;
            background: rgba(255,255,255,0.4);
            cursor: pointer;
            transition: all 0.3s;
        }
        .carousel__dot.active {
            background: white;
            box-shadow: 0 0 10px rgba(255,255,255,0.8);
            transform: scale(1.3);
        }
        /* Tablet */
        @media (max-width: 768px) {
            .sabal-carousel { height: 65vh; min-height: 380px; }
            .carousel__title { font-size: 2rem; }
            .carousel__subtitle { font-size: 1rem; }
            .carousel__control { width: 45px; height: 45px; font-size: 1.2rem; padding: 0.6rem; }
            .carousel__control--prev { left: 10px; }
            .carousel__control--next { right: 10px; }
            .carousel__content { left: 5%; max-width: 85%; }
            .carousel__dots { bottom: 18px; gap: 10px; }
        }
        /* Mobile phones */
        @media (max-width: 480px) {
            .sabal-carousel { height: auto; min-height: 56vw; }
            .carousel__slides { height: 100%; }
            .carousel__slide { position: absolute; top: 0; left: 0; right: 0; bottom: 0; }
            .carousel__slide img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center top;
            }
            .sabal-carousel { min-height: 260px; height: 56vw; max-height: 420px; }
            .carousel__title { font-size: 1.3rem; margin-bottom: 0.5rem; }
            .carousel__subtitle { font-size: 0.85rem; margin-bottom: 1rem; }
            .carousel__content { left: 4%; max-width: 92%; top: 50%; }
            .carousel__control {
                width: 34px; height: 34px;
                font-size: 0.9rem;
                padding: 0;
                border-width: 1.5px;
                backdrop-filter: blur(3px);
            }
            .carousel__control--prev { left: 6px; }
            .carousel__control--next { right: 6px; }
            .carousel__dots { bottom: 10px; gap: 8px; }
            .carousel__dot { width: 8px; height: 8px; }
        }
        </style>

        <div class="sabal-carousel" id="sabalCarousel">
           <div class="carousel__slides">
              <div class="carousel__slide active">
                  <img src="assets/images/carousel/carousel1.jpeg" alt="Sabal Academy Slide 1" />
              </div>
              <div class="carousel__slide">
                  <img src="assets/images/carousel/carousel2.jpeg" alt="Sabal Academy Slide 2" />
              </div>
              <div class="carousel__slide">
                  <img src="assets/images/carousel/carousel3.jpeg" alt="Sabal Academy Slide 3" />
              </div>
           </div>
           
           <!-- Content Removed as requested -->

           <!-- Navigation Elements -->
           <button class="carousel__control carousel__control--prev" aria-label="Previous slide">&#10094;</button>
           <button class="carousel__control carousel__control--next" aria-label="Next slide">&#10095;</button>
           
           <div class="carousel__dots">
              <div class="carousel__dot active" data-index="0"></div>
              <div class="carousel__dot" data-index="1"></div>
              <div class="carousel__dot" data-index="2"></div>
           </div>
        </div>
      `;

    this.initScripts();
  }

  initScripts() {
    const slides = this.querySelectorAll(".carousel__slide");
    const dots = this.querySelectorAll(".carousel__dot");
    const prevBtn = this.querySelector(".carousel__control--prev");
    const nextBtn = this.querySelector(".carousel__control--next");
    const scrollBtn = this.querySelector("[data-scroll-to]");

    let currentSlide = 0;
    let slideInterval;

    const goToSlide = (index) => {
      slides[currentSlide].classList.remove("active");
      dots[currentSlide].classList.remove("active");

      currentSlide = (index + slides.length) % slides.length;

      slides[currentSlide].classList.add("active");
      dots[currentSlide].classList.add("active");
    };

    const nextSlide = () => goToSlide(currentSlide + 1);
    const prevSlide = () => goToSlide(currentSlide - 1);

    const startAutoPlay = () => {
      slideInterval = setInterval(nextSlide, 10000);
    };

    const resetAutoPlay = () => {
      clearInterval(slideInterval);
      startAutoPlay();
    };

    // Event Listeners
    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetAutoPlay();
    });

    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetAutoPlay();
    });

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        goToSlide(index);
        resetAutoPlay();
      });
    });

    // Keyboard support
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
        resetAutoPlay();
      } else if (e.key === "ArrowRight") {
        nextSlide();
        resetAutoPlay();
      }
    });

    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    const carousel = this.querySelector(".sabal-carousel");
    carousel.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    carousel.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) { nextSlide(); } else { prevSlide(); }
        resetAutoPlay();
      }
    }, { passive: true });

    startAutoPlay();
  }
}

customElements.define("sabal-carousel", SabalCarousel);
