document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('.article__body');
    const target = document.querySelector('[data-reading-time]');
    if (!body || !target) return;
    const words = (body.textContent.trim().match(/\S+/g) || []).length;
    const minutes = Math.max(1, Math.round(words / 200));
    const label = document.documentElement.lang === 'en' ? 'min read' : 'min de lectura';
    target.textContent = `${minutes} ${label}`;

    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});
