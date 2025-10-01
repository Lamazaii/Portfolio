// Menu burger fonctionnalités
document.addEventListener('DOMContentLoaded', function() {
    // === RESET COMPLET AU CHARGEMENT ===
    // Fonction pour reset tous les éléments problématiques
    function resetAllElements() {
        // Reset du logo principal
        const homeImg = document.querySelector('#Accueil .topBody img');
        if (homeImg) {
            homeImg.style.display = 'block';
            homeImg.style.visibility = 'visible';
            homeImg.style.opacity = '1';
            homeImg.classList.remove('visible', 'animate-left');
        }

        // Reset de la section compétences
        const skillsSection = document.querySelector('.skills');
        if (skillsSection) {
            skillsSection.style.display = 'block';
            skillsSection.style.visibility = 'visible';
            skillsSection.style.opacity = '1';
            skillsSection.classList.remove('visible', 'animate-left');
        }

        // Reset des logos de compétences
        const skillLogos = document.querySelectorAll('.logoSkills');
        skillLogos.forEach(logo => {
            logo.style.display = 'block';
            logo.style.visibility = 'visible';
            logo.style.opacity = '1';
            logo.classList.remove('visible', 'animate-scale');
        });

        // Reset de la section contact
        const contactSection = document.querySelector('.contact');
        if (contactSection) {
            contactSection.style.display = 'block';
            contactSection.style.visibility = 'visible';
            contactSection.style.opacity = '1';
            contactSection.classList.remove('visible', 'animate-right');
        }
    }

    // Appeler le reset au début
    resetAllElements();

    const burgerMenu = document.querySelector('.burger-menu');
    const links = document.querySelector('.links');
    const navLinks = document.querySelectorAll('.links ul li a');

    burgerMenu.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
        links.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
            links.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    document.addEventListener('click', function(event) {
        if (!burgerMenu.contains(event.target) && !links.contains(event.target)) {
            burgerMenu.classList.remove('active');
            links.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });

    // Card flip functionality - Solution universelle
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Solution simple : ajout du click pour tous les appareils
        // Fonctionne sur mobile ET desktop
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });

    // === ANIMATIONS DE SCROLL ===
    // Observer pour détecter quand les éléments entrent dans la vue
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Section Accueil - Animation logo et texte (avec délai pour éviter les conflits)
    setTimeout(() => {
        const homeImg = document.querySelector('#Accueil .topBody img');
        const homeText = document.querySelector('#Accueil .textTopBody');
        
        if (homeImg && homeText) {
            homeImg.classList.add('animate-left');
            homeText.classList.add('animate-right');
            scrollObserver.observe(homeImg);
            scrollObserver.observe(homeText);
        }
    }, 100);

    // Section Projets - Animation des cartes
    const projectSection = document.querySelector('#Projets');
    const allProjectCards = document.querySelectorAll('.project-card');
    
    if (projectSection) {
        scrollObserver.observe(projectSection);
        allProjectCards.forEach((card, index) => {
            card.classList.add('animate-up');
            card.style.setProperty('--delay', `${index * 0.2}s`);
            scrollObserver.observe(card);
        });
    }

    // Section Compétences et Contact (avec délai pour éviter les conflits)
    setTimeout(() => {
        const skillsSection = document.querySelector('#BottomBody .skills');
        const contactSection = document.querySelector('#BottomBody .contact');
        
        if (skillsSection) {
            skillsSection.classList.add('animate-left');
            scrollObserver.observe(skillsSection);
            
            const skillLogos = skillsSection.querySelectorAll('.logoSkills');
            skillLogos.forEach((logo, index) => {
                logo.classList.add('animate-scale');
                logo.style.setProperty('--delay', `${index * 0.1}s`);
                scrollObserver.observe(logo);
            });
        }
        
        if (contactSection) {
            contactSection.classList.add('animate-right');
            scrollObserver.observe(contactSection);
            
            const contactLogos = contactSection.querySelectorAll('img');
            contactLogos.forEach((logo, index) => {
                logo.classList.add('animate-bounce');
                logo.style.setProperty('--delay', `${index * 0.15}s`);
                scrollObserver.observe(logo);
            });
        }
    }, 150);
});
