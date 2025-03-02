document.addEventListener("DOMContentLoaded", () => {
    const languageSelect = document.getElementById("language-select");

    function loadLanguage(lang) {
        fetch(`lang/${lang}.json`)
            .then(response => response.json())
            .then(data => {
                document.querySelectorAll("[data-lang]").forEach(el => {
                    const key = el.getAttribute("data-lang");
                    if (data[key]) el.textContent = data[key];
                });
            });
    }

    languageSelect.addEventListener("change", (e) => {
        const lang = e.target.value;
        localStorage.setItem("lang", lang);
        loadLanguage(lang);
    });

    const savedLang = localStorage.getItem("lang") || "ja";
    languageSelect.value = savedLang;
    loadLanguage(savedLang);
});
