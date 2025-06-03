// function showEmail() {
//     const emailContainer = document.getElementById('emailContainer');
//     emailContainer.style.display = emailContainer.style.display === 'none' ? 'block' : 'none';
// }

// function copyEmail() {
//     const emailText = document.getElementById('emailText').textContent;
//     navigator.clipboard.writeText(emailText).then(() => {
//         alert('¡Email copiado al portapapeles!');
//     }).catch(err => {
//         console.error('Error al copiar: ', err);
//     });
// }

const toggleButton = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})