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

// //cambiar color icono
// // LinkedIn
const linkedinIcon = document.getElementById("linkedin-icon");
linkedinIcon.addEventListener("mouseover", () => {
  linkedinIcon.src = "./icons/linkedin_cy2.png";
});
linkedinIcon.addEventListener("mouseout", () => {
  linkedinIcon.src = "./icons/linkedin_w.png";
});

// // GitHub
const githubIcon = document.getElementById("github-icon");
githubIcon.addEventListener("mouseover", () => {
  githubIcon.src = "./icons/github_cy2.png";
});
githubIcon.addEventListener("mouseout", () => {
  githubIcon.src = "./icons/github_w.png";
});

// // copy Email
const emailIcon = document.getElementById("copy-email");
emailIcon.addEventListener("mouseover", () => {
  emailIcon.src = "./icons/copy_cy2.png";  
});
emailIcon.addEventListener("mouseout", () => {
  emailIcon.src = "./icons/copy_w.png";  
});


//about me, cambiar seccion 
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.target).classList.add("active");
  });
});

//copy email to clipb
function copyEmail() {
  const emailText = document.getElementById("mailto").innerText;
  const notification = document.getElementById("copy-notification");

  navigator.clipboard.writeText(emailText).then(() => {
    notification.classList.add("show");

    // Ocultarla después de 3 segundos (3000ms)
    setTimeout(() => {
      notification.classList.remove("show");
    }, 3000);
  }).catch(err => {
    console.error('Error al copiar: ', err);
  });
}