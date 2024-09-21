// Archivos JSON por idioma
const projectsFiles = {
    es: 'js/db/otherProjects_es.json',
    en: 'js/db/otherProjects_en.json'
};

let currentLanguage = 'es'; // Idioma por defecto

// Función para cambiar el idioma
function toggleLanguage() {
    console.log('toggleLanguage: ');
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    loadProjects(); // Cargar proyectos en el nuevo idioma
}

// Función para cargar los proyectos
function loadProjects() {
    console.log('loadProjects: ');
    const baseFile = 'js/db/otherProjects_base.json'; // Archivo base
    const languageFile = projectsFiles[currentLanguage]; // Archivo por idioma

    // Cargar el archivo base y el archivo del idioma seleccionado
    Promise.all([fetch(baseFile), fetch(languageFile)])
        .then(responses => Promise.all(responses.map(res => res.json())))
        .then(([baseProjects, languageProjects]) => {
            const combinedProjects = combineProjects(baseProjects, languageProjects);
            displayProjects(combinedProjects);
        })
        .catch(error => console.error('Error cargando los proyectos:', error));
}

// Función para combinar los datos del archivo base con los datos traducidos
function combineProjects(baseProjects, languageProjects) {
    return baseProjects.map(baseProject => {
        // Encontrar el proyecto correspondiente en el archivo del idioma
        const languageProject = languageProjects.find(lp => lp.id === baseProject.id);
        
        // Combinar los datos del proyecto base con los traducidos
        return {
            ...baseProject,
            ...languageProject
        };
    });
}

// Función para mostrar los proyectos en la página
function displayProjects(projects) {
    const container = document.getElementById('projects-container');
    container.innerHTML = ''; // Limpiar contenido anterior

    // Crear HTML dinámicamente para cada proyecto
    projects.forEach(project => {
        const imagesHtml = project.images.map(src =>
            project.id === 'nova' ?
            `<div class="swiper-slide justify-content-center"><img loading="lazy" src="${src}" alt="${project.title}"></div>` 
            : `<img loading="lazy" class="swiper-slide" src="${src}" alt="${project.title}">`
        ).join('');

        const tagsHtml = project.tags.map(tag => `<p>${tag}</p>`).join('');
        const descriptionHtml = project.description.map(desc => `<p class="mb-4">${desc}</p>`).join('');
        const technologiesHtml = project.technologies.map(tech => `<h5>${tech}</h5>`).join('<h5>/</h5>');
        
        // Include githubLink from the project
        const projectHtml = `
            <div class="container">
                <div class="row justify-content-between">
                    ${createRegularProjectHtml(project.id, imagesHtml, tagsHtml, project.year, project.title, descriptionHtml, technologiesHtml, project.githubLink)}
                </div>
            </div>
        `;

        const projectSection = document.createElement('section');
        projectSection.classList.add('other-project', project.id);
        projectSection.innerHTML = projectHtml;
        container.appendChild(projectSection);
    });

    // Inicializar Swiper para cada proyecto
    projects.forEach(project => {
        new Swiper(`.swiper-${project.id}`, {
            loop: true,
            pagination: {
                el: `.swiper-pagination-${project.id}`,
                clickable: true,
            },
            navigation: {
                nextEl: `.swiper-button-next-${project.id}`,
                prevEl: `.swiper-button-prev-${project.id}`,
            },
        });
    });
}

// Función para generar HTML regular de los proyectos
function createRegularProjectHtml(projectId, imagesHtml, tagsHtml, year, title, descriptionHtml, technologiesHtml, githubLink) {
    const swiperColumnClass = projectId === 'nova' ? 'col-12 col-lg-6 image-column swiper swiper-nova mobile-nova order-first order-lg-last' : `col-12 col-lg-6 image-column swiper swiper-${projectId}`;
    
    const linksHtml = githubLink ? `
        <div class="mt-8">
            <div class="btn btn-project btn-github">
                <a href="${githubLink}" target="_blank" aria-label="ver en github"><i class="bi bi-github" aria-hidden="true"></i></a>
            </div>
        </div>
    ` : '';

    return `
        <div class="${swiperColumnClass}">
            <div class="swiper-wrapper">${imagesHtml}</div>
            <div class="swiper-pagination swiper-pagination-${projectId}"></div>
            <div class="swiper-button-prev swiper-button-prev-${projectId}"></div>
            <div class="swiper-button-next swiper-button-next-${projectId}"></div>
        </div>
        <div class="col-12 col-lg-5 mt-6 mt-lg-0">
            <div class="row tags">${tagsHtml}</div>
            <h6 class="subtitle">${year}</h6>
            <h4>${title}</h4>
            <div>${descriptionHtml}</div>
            <div class="technologies">${technologiesHtml}</div>
            ${linksHtml}
        </div>
    `;
}

// Cargar los proyectos cuando la página se carga
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();

    // Botón para cambiar el idioma
    document.getElementById('languageButton').addEventListener('click', toggleLanguage);
});
