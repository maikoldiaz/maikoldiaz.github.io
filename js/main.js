const i18n = {
    es: {
        nav_about: "Sobre mí",
        nav_experience: "Experiencia",
        nav_projects: "Proyectos",
        nav_blog: "Blog",
        nav_contact: "Contacto",
        hero_tag: "Software Engineer · Technical Consultant · GenAI",
        hero_hi: "Hola, soy",
        hero_lead: "Tengo 8+ años diseñando y construyendo aplicaciones web, empresariales y cloud. Conecto producto, arquitectura y datos con .NET, React, AWS y Azure — ahora con foco en IA generativa aplicada a negocio.",
        hero_cta1: "Trabaja conmigo",
        hero_cta2: "Ver proyectos",
        about_tag: "Sobre mí",
        about_title: "Quién soy",
        about_p1: "Software Engineer & Technical Consultant con más de 8 años de experiencia traduciendo necesidades de negocio en soluciones técnicas escalables: definir arquitectura, construir componentes reutilizables y acompañar la entrega de punta a punta.",
        about_p2: "Actualmente me enfoco en aplicar IA generativa a software empresarial: workflows de desarrollo asistidos por IA, activos de ingeniería reutilizables y diseño de soluciones con criterio técnico para decidir cuándo construir, integrar o descartar.",
        exp_tag: "Experiencia",
        exp_title: "Trayectoria",
        exp1_role: "Independent Software Developer & Technical Consultant",
        exp1_co: "Self-Employed",
        exp1_date: "Oct 2025 – Presente",
        exp1_desc: "Plataforma SaaS multi-tenant en .NET Core, Next.js, PostgreSQL y AWS con RBAC, OAuth2/OIDC, módulos gestionables y pipelines CI/CD.",
        exp2_role: "Software Developer",
        exp2_date: "Mar 2025 – Oct 2025",
        exp2_desc: "Backend y plataforma en Java, Go y Python para productos Fintech a gran escala, con foco en confiabilidad, performance y sistemas distribuidos.",
        exp3_role: "Software Developer",
        exp3_date: "Ene 2021 – Dic 2024",
        exp3_desc: "Aplicaciones empresariales con .NET Framework/Core, React, WPF, SQL Server, Azure Portal, Azure DevOps, AKS y prácticas CI/CD.",
        exp4_role: "Software Developer",
        exp4_date: "Sep 2017 – Dic 2020",
        exp4_desc: "Desarrollo desktop, web y móvil con C#, .NET Framework, WPF, HTML5, Xamarin Android y servicios WCF.",
        exp5_role: "Software Developer",
        exp5_date: "Dic 2016 – Jul 2017",
        exp5_desc: "Soluciones de alertas tempranas con C# y SQL Server; diseño de base de datos, lógica de aplicación y reportería.",
        proj_tag: "Proyectos",
        proj_title: "Casos destacados",
        proj1_title: "SaaS Multi-tenant",
        proj1_desc: "Plataforma con RBAC, módulos gestionables y pipelines CI/CD sobre AWS y .NET Core + Next.js.",
        proj2_title: "Workflows con IA",
        proj2_desc: "Flujos asistidos por LLM para análisis de requisitos, documentación técnica y planeación de tareas.",
        proj3_title: "Auth & APIs",
        proj3_desc: "Servicios de autenticación OAuth2/OIDC, M2M y autorización RBAC para integraciones de terceros.",
        skills_tag: "Stack",
        skills_title: "Skills & tecnologías",
        blog_tag: "Blog",
        blog_title: "Lo que escribo",
        footer_cta: "¿Tienes un proyecto o una vacante? Hablemos.",
    },
    en: {
        nav_about: "About",
        nav_experience: "Experience",
        nav_projects: "Projects",
        nav_blog: "Blog",
        nav_contact: "Contact",
        hero_tag: "Software Engineer · Technical Consultant · GenAI",
        hero_hi: "Hi, I'm",
        hero_lead: "8+ years designing and building web, enterprise and cloud applications. I connect product, architecture and data with .NET, React, AWS and Azure — now focused on applied generative AI for business.",
        hero_cta1: "Work with me",
        hero_cta2: "See projects",
        about_tag: "About",
        about_title: "Who I am",
        about_p1: "Software Engineer & Technical Consultant with 8+ years translating business needs into scalable technical solutions: defining architecture, building reusable components and supporting end-to-end delivery.",
        about_p2: "I currently focus on applying generative AI to enterprise software: AI-assisted development workflows, reusable engineering assets, and solution design with the technical judgment to decide when to build, integrate or discard.",
        exp_tag: "Experience",
        exp_title: "Career",
        exp1_role: "Independent Software Developer & Technical Consultant",
        exp1_co: "Self-Employed",
        exp1_date: "Oct 2025 – Present",
        exp1_desc: "Multi-tenant SaaS platform on .NET Core, Next.js, PostgreSQL and AWS with RBAC, OAuth2/OIDC, managed modules and CI/CD pipelines.",
        exp2_role: "Software Developer",
        exp2_date: "Mar 2025 – Oct 2025",
        exp2_desc: "Backend and platform work in Java, Go and Python for large-scale Fintech products, focused on reliability, performance and distributed systems.",
        exp3_role: "Software Developer",
        exp3_date: "Jan 2021 – Dec 2024",
        exp3_desc: "Enterprise applications with .NET Framework/Core, React, WPF, SQL Server, Azure Portal, Azure DevOps, AKS and CI/CD practices.",
        exp4_role: "Software Developer",
        exp4_date: "Sep 2017 – Dec 2020",
        exp4_desc: "Desktop, web and mobile development with C#, .NET Framework, WPF, HTML5, Xamarin Android and WCF services.",
        exp5_role: "Software Developer",
        exp5_date: "Dec 2016 – Jul 2017",
        exp5_desc: "Early-alert software solutions with C# and SQL Server; database design, application logic and reporting.",
        proj_tag: "Projects",
        proj_title: "Featured work",
        proj1_title: "Multi-tenant SaaS",
        proj1_desc: "Platform with RBAC, managed modules and CI/CD pipelines on AWS with .NET Core + Next.js.",
        proj2_title: "AI Workflows",
        proj2_desc: "LLM-assisted flows for requirements analysis, technical documentation and task planning.",
        proj3_title: "Auth & APIs",
        proj3_desc: "OAuth2/OIDC and M2M authentication services and RBAC authorization for third-party integrations.",
        skills_tag: "Stack",
        skills_title: "Skills & technologies",
        blog_tag: "Blog",
        blog_title: "What I write about",
        footer_cta: "Have a project or a role in mind? Let's talk.",
    },
};

let currentLang = localStorage.getItem('lang') || 'es';

function applyLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const value = i18n[lang] && i18n[lang][key];
        if (value !== undefined) el.innerHTML = value;
    });
    const toggle = document.getElementById('langToggle');
    if (toggle) {
        toggle.innerHTML = lang === 'es'
            ? '<strong>ES</strong> / EN'
            : 'ES / <strong>EN</strong>';
        toggle.setAttribute('aria-label', lang === 'es' ? 'Cambiar idioma' : 'Change language');
    }
    localStorage.setItem('lang', lang);
    if (typeof renderPosts === 'function') renderPosts();
}

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('langToggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            applyLang(currentLang === 'es' ? 'en' : 'es');
        });
    }
    const burger = document.getElementById('navBurger');
    const links = document.querySelector('.nav__links');
    if (burger && links) {
        burger.addEventListener('click', () => {
            const open = links.classList.toggle('open');
            burger.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        links.querySelectorAll('a').forEach(a =>
            a.addEventListener('click', () => {
                links.classList.remove('open');
                burger.setAttribute('aria-expanded', 'false');
            }));
    }
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
    applyLang(currentLang);
});

const posts = [
    {
        tag: "IA",
        slug: "teams-llm-workflows",
        title_es: "Workflows de desarrollo asistidos por LLM en equipos reales",
        title_en: "LLM-assisted development workflows in real teams",
        // external: "https://...",  // opcional: enlace externo (abre en pestaña nueva)
        // minutes: 6,               // opcional: tiempo de lectura manual (úsalo con external)
    },
    {
        tag: ".NET",
        slug: "multi-tenant-architecture-saas",
        title_es: "Arquitectura multi-tenant: lo que aprendí construyendo un SaaS",
        title_en: "Multi-tenant architecture: lessons from building a SaaS",
    },
    {
        tag: "Cloud",
        slug: "rbac-oauth2-oidc",
        title_es: "RBAC y OAuth2/OIDC sin morir en el intento",
        title_en: "RBAC and OAuth2/OIDC without losing your mind",
    },
];

const WORDS_PER_MINUTE = 200;
const readingCache = {};
function readingMinutes(text) {
    const words = (text.trim().match(/\S+/g) || []).length;
    return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

function renderPosts() {
    const grid = document.getElementById('postGrid');
    if (!grid) return;
    const minLabel = currentLang === 'es' ? 'min de lectura' : 'min read';
    grid.innerHTML = posts.map((p, i) => {
        const href = p.external || `./blog/${p.slug}.html`;
        const attrs = p.external ? ' target="_blank" rel="noopener"' : '';
        const title = currentLang === 'es' ? p.title_es : p.title_en;
        const time = p.minutes ? ` · ${p.minutes} ${minLabel}` : '';
        return `
        <a class="post" href="${href}"${attrs} data-post="${i}">
            <div class="post__meta">${p.tag}<span class="post__time">${time}</span></div>
            <h3 class="post__h">${title}</h3>
        </a>`;
    }).join('');
    posts.forEach((p, i) => {
        if (p.external || p.minutes) return;
        const setTime = mins => {
            const el = document.querySelector(`[data-post="${i}"] .post__time`);
            if (el) el.textContent = ` · ${mins} ${minLabel}`;
        };
        if (readingCache[p.slug] != null) { setTime(readingCache[p.slug]); return; }
        fetch(`./blog/${p.slug}.html`)
            .then(r => (r.ok ? r.text() : Promise.reject()))
            .then(html => {
                const body = new DOMParser()
                    .parseFromString(html, 'text/html')
                    .querySelector('.article__body');
                if (!body) return;
                const mins = readingMinutes(body.textContent || '');
                readingCache[p.slug] = mins;
                setTime(mins);
            })
            .catch(() => {});
    });
}
