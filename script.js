// FAQ Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const toggle = item.querySelector('.faq-toggle');
        
        question.addEventListener('click', function() {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('expanded')) {
                    otherItem.classList.remove('expanded');
                    const otherToggle = otherItem.querySelector('.faq-toggle svg path');
                    if (otherToggle) {
                        otherToggle.setAttribute('d', 'M5 7.5L10 12.5L15 7.5');
                    }
                }
            });
            
            // Toggle current item
            item.classList.toggle('expanded');
            
            // Update chevron direction
            const chevronPath = toggle.querySelector('svg path');
            if (item.classList.contains('expanded')) {
                chevronPath.setAttribute('d', 'M5 12.5L10 7.5L15 12.5');
            } else {
                chevronPath.setAttribute('d', 'M5 7.5L10 12.5L15 7.5');
            }
        });
    });
    
    // Category hover effect
    const categoryItems = document.querySelectorAll('.category-item');
    
    categoryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            categoryItems.forEach(otherItem => {
                otherItem.classList.remove('category-active');
            });
            item.classList.add('category-active');
        });
    });
    
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

