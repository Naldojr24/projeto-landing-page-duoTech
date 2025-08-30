/* ==================== MENU HAMBÚRGUER (MOBILE) ==================== */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => { navMenu.classList.add('show-menu'); });
}
if (navClose) {
    navClose.addEventListener('click', () => { navMenu.classList.remove('show-menu'); });
}

const navLinksMobile = document.querySelectorAll('.nav__link');
function linkAction() {
    navMenu.classList.remove('show-menu');
}
navLinksMobile.forEach(n => n.addEventListener('click', linkAction));

/* ==================== VALIDAÇÃO DO FORMULÁRIO DE CONTATO ==================== */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // ... (Toda a lógica de validação que já tínhamos)
        let isValid = true;
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        function showError(input, message) { const fg = input.parentElement; const em = fg.querySelector('.error-message'); em.innerText = message; em.style.display = 'block'; isValid = false; }
        function clearError(input) { const fg = input.parentElement; const em = fg.querySelector('.error-message'); em.style.display = 'none'; }
        clearError(name); clearError(email); clearError(message);
        if (name.value.trim() === '') showError(name, 'Por favor, preencha seu nome.');
        if (email.value.trim() === '') { showError(email, 'O campo de e-mail é obrigatório.'); } else if (!/^\S+@\S+\.\S+$/.test(email.value)) { showError(email, 'Por favor, insira um e-mail válido.'); }
        if (message.value.trim() === '') showError(message, 'Não se esqueça de deixar sua mensagem!');
        if (isValid) { alert('Formulário enviado com sucesso! (Isso é uma simulação)'); contactForm.reset(); }
    });
}

/* ==================== BOTÃO "VOLTAR AO TOPO" ==================== */
const backToTopButton = document.getElementById('back-to-top');
if (backToTopButton) {
    function scrollUp() {
        if (this.scrollY >= 560) { backToTopButton.classList.add('show-scroll'); } else { backToTopButton.classList.remove('show-scroll'); }
    }
    window.addEventListener('scroll', scrollUp);
}

/* ==================== DESTAQUE DA SEÇÃO ATIVA NO MENU ==================== */
const header = document.getElementById('header');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__menu a');

if (sections.length > 0 && navLinks.length > 0) {
    function handleActiveLinkOnScroll() {
        const scrollY = window.pageYOffset;
        let currentSectionId = '';

        sections.forEach(section => {
            // O 70 é um valor de offset para o header, ajuste se necessário
            const sectionTop = section.offsetTop - 70; 
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active-link');
            if (link.getAttribute('href').substring(1) === currentSectionId) {
                link.classList.add('active-link');
            }
        });
    }
    window.addEventListener('scroll', handleActiveLinkOnScroll);
}