// Плавное появление элементов при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const sections = document.querySelectorAll('.section');
    const footer = document.querySelector('.footer');

    header.style.opacity = '0';
    header.style.transform = 'translateY(-30px)';
    header.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

    setTimeout(() => {
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
    }, 100);

    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(40px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 400 + (index * 200));
    });

    footer.style.opacity = '0';
    footer.style.transform = 'translateY(30px)';
    footer.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

    setTimeout(() => {
        footer.style.opacity = '1';
        footer.style.transform = 'translateY(0)';
    }, 1200);
});
