// Барлық "Ойнату" батырмаларын табамыз
const playButtons = document.querySelectorAll('.play-btn');

playButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Батырманың мәтінін өзгертеміз
        if (this.textContent === 'Ойнату ▶') {
            this.textContent = 'Тоқтату ⏸';
            this.style.background = '#4caf50'; // Жасыл түс
            
            // Басқа батырмаларды қайта қалпына келтіру (бір уақытта тек бір ән ойнауы үшін)
            playButtons.forEach(otherBtn => {
                if (otherBtn !== this) {
                    otherBtn.textContent = 'Ойнату ▶';
                    otherBtn.style.background = '#f5576c';
                }
            });
        } else {
            this.textContent = 'Ойнату ▶';
            this.style.background = '#f5576c';
        }
    });
});