import {initTheme} from './theme.js';
import {initNav} from './nav.js';
import {initReveal} from './scroll-reveal.js';
import {renderHighlights,renderProjects}from './projects-render.js';
import {initFilters}from './filter.js';
import {initContactForm}from './contact-validate.js';

document.addEventListener('DOMContentLoaded', () => {
    // --- NOVO CÓDIGO COMEÇA AQUI ---
    const avatarImage = document.querySelector('.about-avatar');
    if (avatarImage) {
        avatarImage.addEventListener('contextmenu', function(e) {
            e.preventDefault(); // Impede o menu de contexto (botão direito)
        });
        avatarImage.setAttribute('draggable', false); // Impede que a imagem seja arrastada
    }
    // --- NOVO CÓDIGO TERMINA AQUI ---

    initTheme();
    initNav();
    initReveal();

    const yearEl = document.getElementById('year');
    if(yearEl) yearEl.textContent = new Date().getFullYear();

    if(document.getElementById('home-highlights-grid')) renderHighlights('home-highlights-grid');
    if(document.getElementById('projects-grid')) renderProjects('projects-grid');
    if(document.getElementById('project-filters')) initFilters();

    initContactForm();

    const bars = [...document.querySelectorAll('.skill-bar')];
    bars.forEach(b => {
        const v = b.dataset.skill || 0;
        setTimeout(() => {
            b.innerHTML = `<span style="display:block;height:100%;width:${v}%;background:var(--color-brand);"></span>`
        }, 100);
    });
});