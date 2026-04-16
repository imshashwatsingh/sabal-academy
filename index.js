// ===================================
// DYNAMIC YEAR IN FOOTER
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// ===================================
// DOM ELEMENTS
// ===================================

const navbar = document.getElementById('navbar');
const navbarToggle = document.getElementById('navbarToggle');
const navbarMenu = document.getElementById('navbarMenu');
const navbarLinks = document.querySelectorAll('.navbar__link');
const enquiryForm = document.getElementById('enquiryForm');

// ===================================
// NAVBAR FUNCTIONALITY
// ===================================

// Mobile menu toggle
navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarToggle.classList.remove('active');
        navbarMenu.classList.remove('active');
    });
});

// Add shadow to navbar on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar--scrolled');
    } else {
        navbar.classList.remove('navbar--scrolled');
    }
});

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
// FORM HANDLING
// ===================================

enquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(enquiryForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const course = formData.get('course');
    const message = formData.get('message');
    
    // Validate form
    if (!name || !email || !phone || !course) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Validate phone
    const phoneRegex = /^[0-9\-\+\(\)\s]+$/;
    if (!phoneRegex.test(phone) || phone.replace(/\D/g, '').length < 10) {
        showNotification('Please enter a valid phone number', 'error');
        return;
    }
    
    // In a real application, you would send this data to a server
    console.log('Form Data:', {
        name,
        email,
        phone,
        course,
        message
    });
    
    // Show success message
    showNotification('Thank you for your enquiry! We will contact you soon.', 'success');
    
    // Reset form
    enquiryForm.reset();
});

// ===================================
// NOTIFICATION SYSTEM
// ===================================

function showNotification(text, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = text;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: ${type === 'success' ? '#2FA084' : type === 'error' ? '#d32f2f' : '#1F6F5F'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 9999;
        animation: slideInRight 0.3s ease-out;
        font-weight: 500;
        max-width: 400px;
    `;
    
    // Add animation styles if not already present
    if (!document.querySelector('style[data-notification]')) {
        const style = document.createElement('style');
        style.setAttribute('data-notification', 'true');
        style.textContent = `
            @keyframes slideInRight {
                from {
                    opacity: 0;
                    transform: translateX(100px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            @keyframes slideOutRight {
                from {
                    opacity: 1;
                    transform: translateX(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(100px);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

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
// KEYBOARD NAVIGATION
// ===================================

// Close mobile menu on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navbarToggle.classList.remove('active');
        navbarMenu.classList.remove('active');
    }
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
// PERFORMANCE OPTIMIZATION
// ===================================

// Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize navbar shadow update
const updateNavbarShadow = debounce(() => {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar--scrolled');
    } else {
        navbar.classList.remove('navbar--scrolled');
    }
}, 10);

window.removeEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar--scrolled');
    } else {
        navbar.classList.remove('navbar--scrolled');
    }
});

window.addEventListener('scroll', updateNavbarShadow, { passive: true });

// ===================================
// INIT MESSAGE
// ===================================

// ===================================
// DYNAMIC YEAR IN FOOTER
// ===================================

const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// ===================================
// CONSOLE MESSAGES
// ===================================

console.log('%cSabal Academy Website', 'color: #1F6F5F; font-size: 20px; font-weight: bold;');
console.log('%cDesigned with ❤️ for educational excellence', 'color: #2FA084; font-size: 14px;');