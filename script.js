// script.js - Shared JavaScript

// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeBtn = document.getElementById('themeBtn');
    const body = document.body;

    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'light') {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeBtn.textContent = '☀️';
    }

    themeBtn.addEventListener('click', function() {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            themeBtn.textContent = '☀️';
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            themeBtn.textContent = '🌙';
            localStorage.setItem('theme', 'dark');
        }
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! It has been sent. (This is a demo - integrate with backend for real submissions.)');
            contactForm.reset();
        });
    }

    // Active Nav Link Highlighting
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});