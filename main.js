document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });
    
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Cerrar el menú móvil si está abierto
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });

    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate__animated');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                const animation = element.classList.contains('animate__fadeInUp') ? 'fadeInUp' :
                                 element.classList.contains('animate__fadeInLeft') ? 'fadeInLeft' :
                                 element.classList.contains('animate__fadeInRight') ? 'fadeInRight' :
                                 'fadeIn';
                element.classList.add('animate__' + animation);
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initialize

    // Typewriter effect for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
                document.querySelector('.typewriter').style.borderRight = 'none';
            }
        }, 100);
    }

    // Code tabs functionality
    const codeTabs = document.querySelectorAll('.code-tab');
    const codeContents = document.querySelectorAll('.code-content');
    
    codeTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            codeTabs.forEach(t => t.classList.remove('active'));
            codeContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(tabName + '-code').classList.add('active');
        });
    });

    // Tech icons animation
    const techIcons = document.querySelectorAll('.tech-icon');
    techIcons.forEach(icon => {
        // Set random initial delay for animation
        icon.style.animationDelay = `${Math.random() * 0.5}s`;
        
        icon.addEventListener('mouseenter', function() {
            // Add pulse animation
            this.style.animation = 'icon-float 2s infinite ease-in-out';
            
            // Show tooltip
            const tooltip = this.querySelector('.tech-tooltip');
            if (tooltip) {
                tooltip.style.opacity = '1';
                tooltip.style.visibility = 'visible';
                tooltip.style.transform = 'translate(-50%, 0)';
            }
        });
        
        icon.addEventListener('mouseleave', function() {
            // Remove pulse animation
            this.style.animation = '';
            
            // Hide tooltip
            const tooltip = this.querySelector('.tech-tooltip');
            if (tooltip) {
                tooltip.style.opacity = '0';
                tooltip.style.visibility = 'hidden';
                tooltip.style.transform = 'translate(-50%, 10px)';
            }
        });
    });

    // Initialize skill bars animation
    const skillBars = document.querySelectorAll('.progress-bar');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.width = width;
            bar.style.transition = 'width 1.5s cubic-bezier(0.65, 0, 0.35, 1)';
        }, 100);
    });

    // Bubble animation
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach((bubble, index) => {
        // Random animation parameters
        const duration = 6 + Math.random() * 4;
        const delay = Math.random() * 2;
        const sizeVariation = 0.8 + Math.random() * 0.4;
        
        bubble.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        bubble.style.transform = `scale(${sizeVariation})`;
        
        bubble.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
            this.style.transform = 'scale(1.2)';
        });
        
        bubble.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
            this.style.transform = `scale(${sizeVariation})`;
        });
    });
});