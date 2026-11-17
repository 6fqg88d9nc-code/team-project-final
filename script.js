const buttons = document.querySelectorAll('.hero-btn');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const heroName = this.getAttribute('data-hero');
        alert(`Сіз ${heroName} кейіпкерін сәтті таңдадыңыз! 🚀✨`);
    });
});