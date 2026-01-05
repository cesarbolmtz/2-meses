document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const heart = document.querySelector('.heart');
    const cardText = document.querySelector('.card-text');

    card.addEventListener('click', () => {
        // Romper corazón
        heart.classList.add('broken');

        // Mostrar texto
        cardText.style.display = 'block';

        // Deshabilitar clics adicionales
        card.style.cursor = 'default';
        card.onclick = null;

        // Opcional: scroll al inicio del texto
        cardText.scrollIntoView({behavior: 'smooth'});
    });
});
