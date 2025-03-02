document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");

    // 🌙 ダークモードの状態を記録
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        themeIcon.src = "icons/icon-sun.svg";
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            themeIcon.src = "icons/icon-sun.svg";
        } else {
            localStorage.setItem("theme", "dark");
            themeIcon.src = "icons/icon-moon.svg";
        }
    });

    // 🍔 ハンバーガーメニュー開閉
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        hamburger.classList.toggle("active");
    });

    // メニュー内のリンクをクリックしたら閉じる
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            hamburger.classList.remove("active");
        });
    });
});
