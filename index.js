// ===================================
// SMOOTH SCROLL TO ELEMENT
// ===================================

// Handle data-scroll-to attribute on buttons
document.querySelectorAll('[data-scroll-to]').forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSelector = element.getAttribute('data-scroll-to');
        const targetElement = document.querySelector(targetSelector);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = entry.target.dataset.animation || 'fadeInUp 0.6s ease-out';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all course cards, feature cards, and testimonial cards
document.querySelectorAll('.course-card, .feature-card, .testimonial-card').forEach(element => {
    element.style.opacity = '0';
    element.dataset.animation = 'fadeInUp 0.6s ease-out';
    observer.observe(element);
});

// ===================================
// PARALLAX EFFECT FOR HERO SECTION
// ===================================

const heroSection = document.querySelector('.hero');
if (heroSection) {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const heroBackground = heroSection.querySelector('.hero__background');
        if (heroBackground && scrollY < window.innerHeight) {
            heroBackground.style.transform = `translateY(${scrollY * 0.5}px)`;
        }
    });
}

// ===================================
// BUTTON RIPPLE EFFECT
// ===================================

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background-color: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            animation: ripple-animation 0.6s ease-out;
        `;
        
        // Add animation if not already present
        if (!document.querySelector('style[data-ripple]')) {
            const style = document.createElement('style');
            style.setAttribute('data-ripple', 'true');
            style.textContent = `
                @keyframes ripple-animation {
                    from {
                        opacity: 1;
                        transform: scale(0);
                    }
                    to {
                        opacity: 0;
                        transform: scale(1);
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Make button position relative to contain the ripple
        const currentPosition = window.getComputedStyle(this).position;
        if (currentPosition === 'static') {
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
        }
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// ===================================
// ACCESSIBILITY - FOCUS VISIBLE
// ===================================

// Add visible focus indicator for keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// Add styles for keyboard navigation
if (!document.querySelector('style[data-a11y]')) {
    const style = document.createElement('style');
    style.setAttribute('data-a11y', 'true');
    style.textContent = `
        body.keyboard-nav *:focus {
            outline: 2px solid #1F6F5F;
            outline-offset: 2px;
        }
    `;
    document.head.appendChild(style);
}

// ===================================
// PAGE LOAD ANIMATION
// ===================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ===================================
// CONSOLE MESSAGES
// ===================================

console.log('%cSabal Academy Website', 'color: #1F6F5F; font-size: 20px; font-weight: bold;');
console.log('%cDesigned with ❤️ for educational excellence', 'color: #2FA084; font-size: 14px;');