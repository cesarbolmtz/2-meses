document.addEventListener('DOMContentLoaded', () => {
    const heart = document.querySelector('.heart');
    const cardText = document.querySelector('.card-text');
    const openBtn = document.querySelector('.open-btn');
    const cardTitle = document.querySelector('.card-title');

    openBtn.addEventListener('click', () => {
        heart.classList.add('broken');

        cardTitle.style.display = 'none'; // 👈 OCULTA “2 Meses C & S”
        cardText.style.display = 'block';
        openBtn.style.display = 'none';

        cardText.scrollIntoView({ behavior: 'smooth' });
    });
});
