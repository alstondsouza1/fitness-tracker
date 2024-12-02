document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.createElement('button');
    toggle.id = 'dark-mode-toggle';
    toggle.textContent = 'Toggle Dark Mode';
    document.body.prepend(toggle);

    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.querySelectorAll('header, main, footer').forEach(el => {
            el.classList.toggle('dark-mode');
        });
    });
});
