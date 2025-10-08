// Enhanced Responsive Portfolio Website JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // Mobile Navigation Toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Add body scroll lock when menu is open on mobile
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }));

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Image Error Handling and Responsive Image Loading
    const profileImage = document.querySelector('.floating-image');
    if (profileImage) {
        // Professional fallback placeholder
        const professionalPlaceholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMWUzYzcyIDAlLCAjMmE1Mjk4IDEwMCUpIi8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjE0MCIgcj0iNzAiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuOSIvPgo8cGF0aCBkPSJNODAgMzIwYzAtODAgNTQtMTIwIDEyMC0xMjBzMTIwIDQwIDEyMCAxMjB2ODBIODB2LTgweiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC45Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMzgwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlNpa2FuZGVyIFNvb21ybzwvdGV4dD4KPC9zdmc+';
        
        // Handle image load success
        profileImage.addEventListener('load', function() {
            console.log('Profile image loaded successfully: New Profile Pic.jpg');
            this.style.opacity = '1';
        });
        
        // Handle image load error
        profileImage.addEventListener('error', function() {
            console.log('Failed to load New Profile Pic.jpg, using fallback');
            this.src = professionalPlaceholder;
            this.alt = 'Sikander Soomro - Professional Profile';
        });
        
        // Set initial loading state
        profileImage.style.transition = 'opacity 0.3s ease';
        
        // Handle responsive image sizing
        function adjustImageSize() {
            const imageContainer = document.querySelector('.profile-image');
            if (imageContainer) {
                if (window.innerWidth <= 360) {
                    imageContainer.style.width = '180px';
                    imageContainer.style.height = '180px';
                } else if (window.innerWidth <= 480) {
                    imageContainer.style.width = '220px';
                    imageContainer.style.height = '220px';
                } else if (window.innerWidth <= 768) {
                    imageContainer.style.width = '280px';
                    imageContainer.style.height = '280px';
                } else if (window.innerWidth <= 992) {
                    imageContainer.style.width = '350px';
                    imageContainer.style.height = '350px';
                } else {
                    imageContainer.style.width = '400px';
                    imageContainer.style.height = '400px';
                }
            }
        }
        
        // Adjust on load and resize
        adjustImageSize();
        window.addEventListener('resize', adjustImageSize);
    }
    
    // Start typing animation
    setTimeout(typeRole, 1000);
    
    // Download Resume Button Functionality
    const downloadResumeBtn = document.getElementById('downloadResumeBtn');
    if (downloadResumeBtn) {
        downloadResumeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Show download message
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparing Download...';
            this.style.pointerEvents = 'none';
            
            // Simulate download preparation
            setTimeout(() => {
                // Use your Resume.docx file in documents folder
                const resumeUrl = 'documents/Resume.docx'; // Your actual resume file
                
                // Create download link
                const link = document.createElement('a');
                link.href = resumeUrl;
                link.download = 'Sikander_Soomro_Resume.docx';
                document.body.appendChild(link);
                
                // Trigger download
                try {
                    link.click();
                    // Show success message
                    this.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
                    setTimeout(() => {
                        this.innerHTML = originalText;
                        this.style.pointerEvents = 'auto';
                    }, 2000);
                } catch (error) {
                    // Show error message if file not found
                    this.innerHTML = '<i class="fas fa-exclamation"></i> Resume not found';
                    setTimeout(() => {
                        this.innerHTML = originalText;
                        this.style.pointerEvents = 'auto';
                    }, 2000);
                }
                
                document.body.removeChild(link);
            }, 1500);
        });
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(52, 58, 64, 0.95)';
        } else {
            navbar.style.background = 'rgba(52, 58, 64, 0.9)';
        }
    }
});

// Typing Animation for Role Text
const roles = [
    'Sr. QA Lead/Manager',
    'Test Automation Expert',
    'Quality Assurance Professional',
    'Team Leader'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 2000;

function typeRole() {
    const typedTextElement = document.querySelector('.typed-text');
    if (!typedTextElement) return;
    
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typedTextElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeRole, 500);
            return;
        }
        setTimeout(typeRole, deletingSpeed);
    } else {
        typedTextElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeRole, pauseTime);
            return;
        }
        setTimeout(typeRole, typingSpeed);
    }
}

// Animated Skill Bars
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach((bar, index) => {
                setTimeout(() => {
                    const width = bar.style.width || '0%';
                    bar.style.width = '0%';
                    // Trigger reflow
                    bar.offsetHeight;
                    bar.style.transition = 'width 2s ease';
                    bar.style.width = width;
                }, index * 200);
            });
        }
    });
}, observerOptions);

// Observe skills section
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// Scroll Animation for Elements
const animateOnScrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Add scroll animation to service cards and portfolio items
window.addEventListener('load', () => {
    const animateElements = document.querySelectorAll('.service-card, .portfolio-item, .contact-item, .certification-card');
    
    animateElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        animateOnScrollObserver.observe(element);
    });
});

// Contact Form Handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Simple form validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Simulate form submission
        const submitButton = this.querySelector('button');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! I\'ll get back to you soon.');
            this.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
}

// Parallax Effect for Home Section (disabled on mobile for performance)
if (window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const homeSection = document.querySelector('.home');
        const parallaxSpeed = 0.1; // Reduced for better performance
        
        if (homeSection) {
            homeSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    });
}

// Social Media Icons Hover Effects
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.1)';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Active Navigation Link Highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
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

// Touch gestures for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleGesture();
});

function handleGesture() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - could trigger some action
        } else {
            // Swipe down - could trigger some action
        }
    }
}

// Orientation change handling
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        // Recalculate dimensions after orientation change
        const profileImage = document.querySelector('.floating-image');
        if (profileImage) {
            const imageContainer = document.querySelector('.profile-image');
            if (imageContainer) {
                // Reset to auto sizing
                imageContainer.style.width = 'auto';
                imageContainer.style.height = 'auto';
                
                // Reapply responsive sizing
                setTimeout(() => {
                    if (window.innerWidth <= 360) {
                        imageContainer.style.width = '180px';
                        imageContainer.style.height = '180px';
                    } else if (window.innerWidth <= 480) {
                        imageContainer.style.width = '220px';
                        imageContainer.style.height = '220px';
                    } else if (window.innerWidth <= 768) {
                        imageContainer.style.width = '280px';
                        imageContainer.style.height = '280px';
                    } else if (window.innerWidth <= 992) {
                        imageContainer.style.width = '350px';
                        imageContainer.style.height = '350px';
                    } else {
                        imageContainer.style.width = '400px';
                        imageContainer.style.height = '400px';
                    }
                }, 100);
            }
        }
    }, 500);
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(() => {
    // Navbar background change
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(52, 58, 64, 0.95)';
        } else {
            navbar.style.background = 'rgba(52, 58, 64, 0.9)';
        }
    }
    
    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}, 16); // ~60fps

// Replace the scroll event listeners with throttled version
window.addEventListener('scroll', throttledScrollHandler);