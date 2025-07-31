document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navbar.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navbar.classList.remove('active');
            
            // Set active link
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Sticky header on scroll
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        header.classList.toggle('scrolled', window.scrollY > 0);
    });
    
    // Set current year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Highlight active section in navigation
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Trigger animation when elements come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.hero-content, .hero-image, .about-image, .about-text, .project-card, .skills-category, .contact-info, .contact-form');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // animatsiya qismi
    window.addEventListener('load', function() {
        document.querySelector('.hero-content').style.opacity = '0';
        document.querySelector('.hero-content').style.transform = 'translateY(20px)';
        document.querySelector('.hero-image').style.opacity = '0';
        document.querySelector('.hero-image').style.transform = 'translateY(20px)';
        
        const animateElements = document.querySelectorAll('.about-image, .about-text, .project-card, .skills-category, .contact-info, .contact-form');
        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
        
        setTimeout(() => {
            document.querySelector('.hero-content').style.transition = 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s';
            document.querySelector('.hero-image').style.transition = 'opacity 0.5s ease 0.4s, transform 0.5s ease 0.4s';
            animateOnScroll();
        }, 100);
    });
    
    window.addEventListener('scroll', animateOnScroll);
});