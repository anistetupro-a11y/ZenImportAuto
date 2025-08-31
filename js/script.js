// Menu mobile
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Animations au scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Smooth scroll pour les liens d'ancrage
function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // 80px pour le header fixe
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Fermer le menu mobile si ouvert
                const navLinks = document.getElementById('navLinks');
                navLinks.classList.remove('active');
            }
        });
    });
}

// Gestion du formulaire de contact
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Récupération des données
    const formData = new FormData(event.target);
    const data = {
        nom: formData.get('nom'),
        email: formData.get('email'),
        telephone: formData.get('telephone'),
        service: formData.get('service'),
        message: formData.get('message')
    };
    
    // Simulation d'envoi (à remplacer par votre vraie logique d'envoi)
    alert('Merci pour votre demande ! Nous vous contacterons rapidement.\n\nDonnées reçues :\n' + 
          'Nom: ' + data.nom + '\n' + 
          'Email: ' + data.email + '\n' + 
          'Service: ' + data.service);
    
    // Réinitialiser le formulaire
    event.target.reset();
}

// Header avec effet de scroll
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Animations au scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Smooth scroll
    smoothScroll();
    
    // Header scroll effect
    window.addEventListener('scroll', handleHeaderScroll);
    
    // Animation d'entrée pour les éléments
    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }
    }, 100);
});

// Fermer le menu mobile en cliquant ailleurs
document.addEventListener('click', function(event) {
    const navLinks = document.getElementById('navLinks');
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    
    if (!navLinks.contains(event.target) && !mobileBtn.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});