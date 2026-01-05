document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const heart = document.querySelector('.heart');
    const cardText = document.querySelector('.card-text');
    const openBtn = document.querySelector('.open-btn');

    openBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // evita clicks accidentales

        // Romper corazón
        heart.classList.add('broken');

        // Mostrar texto
        cardText.style.display = 'block';

        // Ocultar botón
        openBtn.style.display = 'none';

        // Evitar más acciones
        card.style.cursor = 'default';

        // Scroll suave al texto
        cardText.scrollIntoView({ behavior: 'smooth' });
    });
});
