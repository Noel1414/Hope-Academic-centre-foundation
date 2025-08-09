// mobile.js - Global mobile enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Enhance all interactive elements
    const enhanceTouchElements = () => {
        // Buttons and links
        const touchElements = [
            ...document.querySelectorAll('a, button, .project-header'),
            ...document.querySelectorAll('input[type="submit"], input[type="button"]')
        ];
        
        touchElements.forEach(el => {
            // Ensure minimum touch target size
            if (el.offsetHeight < 44 || el.offsetWidth < 44) {
                el.style.minHeight = '44px';
                el.style.minWidth = '44px';
                el.style.padding = '12px';
            }
            
            // Add touch feedback
            el.addEventListener('touchstart', function() {
                this.style.opacity = '0.8';
                this.style.transform = 'scale(0.98)';
            });
            
            el.addEventListener('touchend', function() {
                this.style.opacity = '1';
                this.style.transform = 'scale(1)';
            });
        });
    };
    
    // Mobile menu toggle
    const setupMobileMenu = () => {
        const menuToggle = document.createElement('button');
        menuToggle.innerHTML = '☰ Menu';
        menuToggle.className = 'mobile-menu-toggle';
        menuToggle.style.display = 'none';
        
        const nav = document.querySelector('.navbar');
        if (nav) {
            nav.parentNode.insertBefore(menuToggle, nav);
            menuToggle.addEventListener('click', () => {
                nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
            });
            
            // Show/hide based on screen size
            const checkScreenSize = () => {
                if (window.innerWidth <= 768) {
                    menuToggle.style.display = 'block';
                    nav.style.display = 'none';
                } else {
                    menuToggle.style.display = 'none';
                    nav.style.display = 'flex';
                }
            };
            
            window.addEventListener('resize', checkScreenSize);
            checkScreenSize();
        }
    };
    
    // Initialize all mobile enhancements
    enhanceTouchElements();
    setupMobileMenu();
    
    // Prevent zooming on form inputs
    document.addEventListener('touchmove', function(e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
            e.preventDefault();
        }
    }, { passive: false });
});