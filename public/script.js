document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const currentYearEl = document.getElementById('current-year');

    // Mobilní menu
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Aktuální rok v patičce
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // Zpracování odeslání kontaktního formuláře (pouze na stránce kontakt.html)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); 

            const feedbackDiv = document.getElementById('form-feedback');
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const formData = new FormData(contactForm);

            feedbackDiv.textContent = 'Odesílám...';
            feedbackDiv.style.color = 'gray';
            submitButton.disabled = true;

            fetch('odeslat_formular.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                feedbackDiv.textContent = data.message;
                if (data.success) {
                    feedbackDiv.style.color = 'green';
                    contactForm.reset(); 
                } else {
                    feedbackDiv.style.color = 'red';
                }
            })
            .catch(error => {
                console.error('Chyba při odesílání formuláře:', error);
                feedbackDiv.textContent = 'Došlo k chybě. Zkuste to prosím později.';
                feedbackDiv.style.color = 'red';
            })
            .finally(() => {
                submitButton.disabled = false;
            });
        });
    }
});
// --- Kód pro dynamické stylování posuvníků ---

// Tato funkce najde všechny posuvníky na stránce a nastaví jim správnou barvu pozadí
function updateRangeInputStyles() {
  const allRanges = document.querySelectorAll('input[type="range"]');
  allRanges.forEach(range => {
    // Vypočítáme procentuální hodnotu posuvníku
    const percentage = (range.value - range.min) / (range.max - range.min) * 100;
    // Nastavíme CSS proměnnou '--value', kterou používají naše styly
    range.style.setProperty('--value', percentage + '%');
  });
}

// Funkci spustíme hned po načtení stránky, aby se posuvníky správně zobrazily
document.addEventListener('DOMContentLoaded', () => {
    updateRangeInputStyles();

    // Také ji spustíme pokaždé, když se změní hodnota jakéhokoliv posuvníku
    document.body.addEventListener('input', (event) => {
        if (event.target.type === 'range') {
            updateRangeInputStyles();
        }
    });
});