/* MENU HAMBÚRGUER (MOBILE) */
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navLink = document.querySelectorAll(".nav__link");

// Função para abrir/fechar o menu
const toggleMenu = () => {
    // Adiciona ou remove a classe .show-menu do elemento do menu
    navMenu.classList.toggle("show-menu");
    
    // Trava ou destrava o scroll da página
    document.body.classList.toggle("body-no-scroll");
};

// Abre/fecha o menu ao clicar no ícone
if (navToggle) {
    navToggle.addEventListener("click", toggleMenu);
}

// Fecha o menu ao clicar em um dos links
navLink.forEach(link => {
    link.addEventListener("click", () => {
        if (navMenu.classList.contains("show-menu")) {
            toggleMenu();
        }
    });
});

// Fecha o menu ao clicar fora dele
document.addEventListener("click", (e) => {
    if (navMenu.classList.contains("show-menu") && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        toggleMenu();
    }
});

/* VALIDAÇÃO DO FORMULÁRIO DE CONTATO */
var contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        var isValid = true;

        var name = document.getElementById("name");
        var email = document.getElementById("email");
        var message = document.getElementById("message");

        // limpa mensagens anteriores
        var nameError = name.parentElement.querySelector(".error-message");
        var emailError = email.parentElement.querySelector(".error-message");
        var messageError = message.parentElement.querySelector(".error-message");

        nameError.style.display = "none";
        emailError.style.display = "none";
        messageError.style.display = "none";

        // valida o nome
        if (name.value.trim() === "") {
            nameError.innerText = "Por favor, preencha seu nome.";
            nameError.style.display = "block";
            isValid = false;
        }

        // valida o email
        if (email.value.trim() === "") {
            emailError.innerText = "O campo de e-mail é obrigatório.";
            emailError.style.display = "block";
            isValid = false;
        } else {
            var regex = /^\S+@\S+\.\S+$/;
            if (!regex.test(email.value)) {
                emailError.innerText = "Por favor, insira um e-mail válido.";
                emailError.style.display = "block";
                isValid = false;
            }
        }

        // valida a mensagem
        if (message.value.trim() === "") {
            messageError.innerText = "Não se esqueça de deixar sua mensagem!";
            messageError.style.display = "block";
            isValid = false;
        }

        // se tudo estiver ok
        if (isValid) {
            alert("Formulário enviado com sucesso! (Apenas simulação)");
            contactForm.reset();
        }
    });
}

/* BOTÃO "VOLTAR AO TOPO" */
var backToTopButton = document.getElementById("back-to-top");

if (backToTopButton) {
    window.addEventListener("scroll", function () {
        if (window.scrollY >= 560) {
            backToTopButton.classList.add("show-scroll");
        } else {
            backToTopButton.classList.remove("show-scroll");
        }
    });
}

/* DESTAQUE DA SEÇÃO ATIVA NO MENU */
var sections = document.querySelectorAll("section[id]");
var navLinks = document.querySelectorAll(".nav__menu a");

if (sections.length > 0 && navLinks.length > 0) {
    window.addEventListener("scroll", function () {
        var scrollY = window.pageYOffset;
        var currentSectionId = "";

        for (var i = 0; i < sections.length; i++) {
            var section = sections[i];
            var sectionTop = section.offsetTop - 70;
            var sectionBottom = sectionTop + section.offsetHeight;

            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                currentSectionId = section.getAttribute("id");
            }
        }

        for (var j = 0; j < navLinks.length; j++) {
            var link = navLinks[j];
            link.classList.remove("active-link");

            var href = link.getAttribute("href").substring(1);
            if (href === currentSectionId) {
                link.classList.add("active-link");
            }
        }
    });
}