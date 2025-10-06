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
        threshold: 0.1 // A animação começa quando 10% do elemento está visível
    });

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });


    // ===============================================
    // LÓGICA DO FORMULÁRIO ATUALIZADA PARA O WHATSAPP
    // ===============================================
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        //
        // IMPORTANTE: Insira seu número de WhatsApp aqui!
        // Formato: código do país (55) + DDD + número (tudo junto).
        //
        const phoneNumber = '5581 983641431';

        // Pega os dados dos campos
        const name = contactForm.querySelector('input[name="name"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;

        // Formata a mensagem
        const formattedMessage = `Olá! Meu nome é ${name}. Gostaria de falar sobre: ${message}`;
        
        // Cria o link e abre o WhatsApp em uma nova aba
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(formattedMessage)}`;
        
        window.open(whatsappURL, '_blank');

        // Limpa o formulário
        contactForm.reset();
    });

});