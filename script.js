document.addEventListener('DOMContentLoaded', () => {

    // Lógica para o menu hamburger (mobile)
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navbar.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navbar.classList.remove('active');
        });
    });

    // Lógica para animação ao rolar a página
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1
    });

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

    // Lógica do formulário de contato para WhatsApp
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const phoneNumber = '5511999998888'; // <-- SUBSTITUA PELO SEU NÚMERO
        const name = contactForm.querySelector('input[name="name"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;
        const formattedMessage = `Olá! Meu nome é ${name}. Gostaria de falar sobre: ${message}`;
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(formattedMessage)}`;
        window.open(whatsappURL, '_blank');
        contactForm.reset();
    });

    // LÓGICA PARA INICIAR O CARROSSEL DE PORTFÓLIO
    const swiper = new Swiper('.mySwiper', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // Navegação por setas foi removida
    });

    // LÓGICA PARA INICIAR O CARROSSEL DE SERVIÇOS
    const servicesSwiper = new Swiper('.servicesSwiper', {
        loop: true,
        spaceBetween: 30,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination-services',
            clickable: true,
        },
        // Navegação por setas foi removida
        breakpoints: {
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            }
        }
    });

    // INICIALIZAÇÃO DA BIBLIOTECA LIGHTBOX
    const lightbox = GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        loop: true,
    });

});