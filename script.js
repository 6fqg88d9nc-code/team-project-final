// ============================================
//   Супергеройлар Галереясы — JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // ---------- Элементтер ----------
    const cards       = document.querySelectorAll('.hero-card');
    const filterBtns  = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('searchInput');
    const noResults   = document.getElementById('noResults');
    const overlay     = document.getElementById('modalOverlay');
    const modalTitle  = document.getElementById('modalTitle');
    const modalText   = document.getElementById('modalText');
    const modalClose  = document.getElementById('modalClose');
    const modalOk     = document.getElementById('modalOk');

    let currentFilter = 'all';
    let currentSearch = '';

    // ---------- Modal ашу ----------
    function openModal(heroName) {
        modalTitle.textContent = heroName;
        modalText.textContent  = `Сіз ${heroName} кейіпкерін таңдадыңыз! 🚀✨`;
        overlay.classList.add('show');
    }

    // ---------- Modal жабу ----------
    function closeModal() {
        overlay.classList.remove('show');
    }

    modalClose.addEventListener('click', closeModal);
    modalOk.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // ---------- Батырма басу ----------
    document.querySelectorAll('.hero-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            const heroName = this.getAttribute('data-hero');
            openModal(heroName);
        });
    });

    // ---------- Карточка басу ----------
    cards.forEach(card => {
        card.addEventListener('click', function (e) {
            if (e.target.classList.contains('hero-btn')) return;
            const heroName = this.querySelector('h2').textContent;
            openModal(heroName);
        });
    });

    // ---------- Фильтр ----------
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            applyFilters();
        });
    });

    // ---------- Іздеу ----------
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase().trim();
        applyFilters();
    });

    // ---------- Фильтр + іздеу логикасы ----------
    function applyFilters() {
        let visibleCount = 0;

        cards.forEach(card => {
            const universe = card.getAttribute('data-universe');
            const title    = card.querySelector('h2').textContent.toLowerCase();
            const subtitle = card.querySelector('.subtitle').textContent.toLowerCase();

            const matchesFilter = (currentFilter === 'all') || (universe === currentFilter);
            const matchesSearch = currentSearch === '' ||
                                  title.includes(currentSearch) ||
                                  subtitle.includes(currentSearch);

            if (matchesFilter && matchesSearch) {
                card.style.display = 'flex';
                card.style.animation = 'none';
                setTimeout(() => { card.style.animation = ''; }, 10);
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Ештеңе табылмаса — хабарлама
        if (visibleCount === 0) {
            noResults.classList.add('show');
        } else {
            noResults.classList.remove('show');
        }
    }
});