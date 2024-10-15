document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('languageButton').addEventListener('click', toggleLanguage);
    
    let currentLanguage = 'en';
    
    function toggleLanguage() {
        currentLanguage = currentLanguage === 'en' ? 'es' : 'en';

        // Actualiza el botón 
        document.getElementById('languageButton').innerHTML = '<i class="bi bi-globe2"></i> ' + currentLanguage;

        changeLanguage(currentLanguage);
        updateDownloadLink(currentLanguage);
    }

    const textsToChange = document.querySelectorAll("[data-section]");

    const changeLanguage = async (language) => {
        const req = await fetch(`./languages/${language}.json`);
        const texts = await req.json();
        
        for (const textToChange of textsToChange) {
            console.log('textToChange: ', textToChange);

            const section = textToChange.dataset.section;
            const value = textToChange.dataset.value;
            
            textToChange.innerHTML = texts[section][value];
        }
    };

    // Nueva función para actualizar el enlace de descarga
    function updateDownloadLink(language) {
        const downloadLink = document.getElementById('download-link');
        let fileUrl = '';

        if (language === 'es') {
            fileUrl = 'assets/docs/cv_MariaEMaspoli_es.pdf'; // Enlace al archivo en español
            downloadLink.download = 'cv_MariaEMaspoli_es.pdf';
        } else {
            fileUrl = 'assets/docs/cv_MariaEMaspoli_en.pdf'; // Enlace al archivo en inglés
            downloadLink.download = 'cv_MariaEMaspoli_en.pdf';
        }

        downloadLink.href = fileUrl;
    }
});
