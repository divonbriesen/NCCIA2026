// Professor Kekeli Nuviadenu Academic Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Add JS enabled class for CSS animations
    document.body.classList.add('js-enabled');
    
    // Smooth scrolling for navigation links
    initSmoothScrolling();
    
    // Navigation highlighting
    initActiveNavigation();
    
    // Intersection observer for animations
    initScrollAnimations();
    
    // Contact section enhancements
    initContactFeatures();
});

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Check if it's an internal anchor link
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Add temporary focus to target for accessibility
                    targetElement.setAttribute('tabindex', '-1');
                    targetElement.focus();
                    
                    // Remove tabindex after focusing
                    setTimeout(() => {
                        targetElement.removeAttribute('tabindex');
                    }, 1000);
                }
            }
        });
    });
}

// Active navigation highlighting
function initActiveNavigation() {
    const sections = document.querySelectorAll('.content-section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Intersection Observer for active navigation
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
    };
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                
                // Remove active class from all nav links
                navLinks.forEach(link => {
                    link.classList.remove('active-nav');
                });
                
                // Add active class to corresponding nav link
                const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active-nav');
                }
            }
        });
    }, observerOptions);
    
    // Observe all sections
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

// Scroll animations for content sections
function initScrollAnimations() {
    const animateElements = document.querySelectorAll('.content-section, .hero-section');
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animateElements.forEach(element => {
        animationObserver.observe(element);
    });
}

// Contact section enhancements
function initContactFeatures() {
    // Add click-to-copy functionality for contact information
    const contactInfo = document.querySelector('.contact-info');
    
    if (contactInfo) {
        const emailPattern = /[\w\.-]+@[\w\.-]+\.\w+/;
        const phonePattern = /(\+?\d{1,4}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/;
        
        // Find and enhance email addresses and phone numbers
        const textNodes = getTextNodes(contactInfo);
        
        textNodes.forEach(node => {
            let content = node.textContent;
            
            // Replace email addresses with clickable links
            content = content.replace(emailPattern, (match) => {
                return `<a href="mailto:${match}" class="contact-link">${match}</a>`;
            });
            
            // Replace phone numbers with clickable links
            content = content.replace(phonePattern, (match) => {
                const cleanPhone = match.replace(/\D/g, '');
                return `<a href="tel:+1${cleanPhone}" class="contact-link">${match}</a>`;
            });
            
            if (content !== node.textContent) {
                const wrapper = document.createElement('span');
                wrapper.innerHTML = content;
                node.parentNode.replaceChild(wrapper, node);
            }
        });
    }
}

// Helper function to get text nodes
function getTextNodes(element) {
    const textNodes = [];
    const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );
    
    let node;
    while (node = walker.nextNode()) {
        if (node.textContent.trim()) {
            textNodes.push(node);
        }
    }
    
    return textNodes;
}

// Add hover effects to statistics
function initStatisticsAnimation() {
    const statItems = document.querySelectorAll('.stat-item');
    
    statItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Initialize statistics animations when DOM is ready
document.addEventListener('DOMContentLoaded', initStatisticsAnimation);

// Accessibility enhancements
function initAccessibilityFeatures() {
    // Add skip link for keyboard navigation
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-blue);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 3px;
        z-index: 1000;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main landmark
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.id = 'main-content';
        mainContent.setAttribute('role', 'main');
    }
}

// Initialize accessibility features
document.addEventListener('DOMContentLoaded', initAccessibilityFeatures);

// Performance optimization: Lazy load images when we add them
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', initLazyLoading);

// Add dynamic year to footer
function updateFooterYear() {
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('.footer-info p');
    
    if (footerText && footerText.textContent.includes('2026')) {
        footerText.textContent = footerText.textContent.replace('2026', currentYear);
    }
}

// Update footer year when DOM is ready
document.addEventListener('DOMContentLoaded', updateFooterYear);

// Add print stylesheet functionality
function initPrintFeatures() {
    window.addEventListener('beforeprint', function() {
        // Expand any collapsed content for printing
        document.body.classList.add('printing');
    });
    
    window.addEventListener('afterprint', function() {
        document.body.classList.remove('printing');
    });
}

// Initialize print features
document.addEventListener('DOMContentLoaded', initPrintFeatures);