//navbar desplegable
const toggleButton = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})

//oculta el navbar al hacer click en una seccion
const navItems = document.querySelectorAll('#nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

//cambiar color icono
// Email
const emailIcon = document.getElementById("email-icon");
emailIcon.addEventListener("mouseover", () => {
  emailIcon.src = "./icons/email_cy.png";  
});
emailIcon.addEventListener("mouseout", () => {
  emailIcon.src = "./icons/email_w.png";  
});

// LinkedIn
const linkedinIcon = document.getElementById("linkedin-icon");
linkedinIcon.addEventListener("mouseover", () => {
  linkedinIcon.src = "./icons/linkedin_cy.png";
});
linkedinIcon.addEventListener("mouseout", () => {
  linkedinIcon.src = "./icons/linkedin_w.png";
});

// GitHub
const githubIcon = document.getElementById("github-icon");
githubIcon.addEventListener("mouseover", () => {
  githubIcon.src = "./icons/github_cy.png";
});
githubIcon.addEventListener("mouseout", () => {
  githubIcon.src = "./icons/github_w.png";
});
