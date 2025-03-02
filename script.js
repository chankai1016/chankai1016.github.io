document.addEventListener("DOMContentLoaded", () => {
    // ダークモード / ライトモード
    const themeToggle = document.getElementById("theme-toggle");
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        themeToggle.textContent = "☀";
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "☀";
        } else {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "🌙";
        }
    });

    // 言語切り替え
    const languageSelect = document.getElementById("language-select");
    const translations = {
        ja: { welcome: "ポートフォリオへようこそ", skills_title: "スキル", about_text: "私はクリエイティブなWeb開発者です。" },
        zh: { welcome: "歡迎來到我的作品集", skills_title: "技能", about_text: "我是創意的 Web 開發者。" },
        en: { welcome: "Welcome to My Portfolio", skills_title: "My Skills", about_text: "I am a creative web developer." }
    };

    languageSelect.addEventListener("change", (e) => {
        const lang = e.target.value;
        document.querySelectorAll("[data-lang]").forEach(el => {
            const key = el.getAttribute("data-lang");
            el.textContent = translations[lang][key] || el.textContent;
        });
    });
});
