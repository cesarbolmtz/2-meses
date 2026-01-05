document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const heart = document.querySelector('.heart');
    const cardText = document.querySelector('.card-text');

    card.addEventListener('click', () => {
        // Romper corazón
        heart.classList.add('broken');

        // Mostrar texto
        cardText.style.display = 'block';

        // Mostrar botón continuar
        document.querySelector('.continue-container').style.display = 'block';

        // Deshabilitar clics adicionales
        card.style.cursor = 'default';
        card.onclick = null;
    });
});
