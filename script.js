// Аудио плеерді және батырмаларды табамыз
const audioPlayer = document.getElementById('audio-player');
const playButtons = document.querySelectorAll('.play-btn');

playButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Әннің сілтемесін батырманың ішінен аламыз
        const songSrc = this.getAttribute('data-src');
        
        // Егер басқа ән қосылып тұрса, оны тоқтатамыз
        if (audioPlayer.src !== songSrc && audioPlayer.src !== "") {
            audioPlayer.pause();
        }

        // Егер ән тоқтап тұрса немесе басқа ән таңдалса
        if (audioPlayer.paused || audioPlayer.src !== songSrc) {
            audioPlayer.src = songSrc;
            audioPlayer.play();
            
            // Барлық батырманы "▶" қалпына келтіреміз
            playButtons.forEach(btn => {
                btn.textContent = '▶';
                btn.classList.remove('playing');
            });

            // Басылған батырманы "⏸" (пауза) қыламыз
            this.textContent = '⏸';
            this.classList.add('playing');
        } else {
            // Егер ән ойнап тұрса, тоқтатамыз (Pause)
            audioPlayer.pause();
            this.textContent = '▶';
            this.classList.remove('playing');
        }
    });
});

// Ән аяқталғанда батырманы қайта "▶" қылу
audioPlayer.addEventListener('ended', () => {
    playButtons.forEach(btn => {
        btn.textContent = '▶';
        btn.classList.remove('playing');
    });
});