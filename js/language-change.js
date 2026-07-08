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
            // console.log('textToChange: ', textToChange);

            const section = textToChange.dataset.section;
            const value = textToChange.dataset.value;
            
            textToChange.innerHTML = texts[section][value];
        }
    };

    function updateDownloadLink(language) {
        const downloadLink = document.getElementById('download-link');
    
        if (language === 'es') {
            downloadLink.href = 'https://drive.google.com/uc?export=download&id=12SEq3T5z2Sr5uzvl2sR2JDdXb97ncoVw';
            downloadLink.download = 'cv_MariaEMaspoli_es.pdf';
        } else {
            downloadLink.href = 'https://drive.google.com/uc?export=download&id=1uK2zCLSNKzYTrqmD4C9xQbLpHWjWH8rp';
            downloadLink.download = 'cv_MariaEMaspoli_en.pdf';
        }
    }
});
