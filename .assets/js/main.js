document.addEventListener("DOMContentLoaded", () => {
    /* ====== Theme Toggle Logic ====== */
    const themeToggleBtn = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme");

    // Check localStorage for saved theme, default to dark if nothing is saved
    if (currentTheme === "light") {
        document.body.classList.add("light-theme");
        if (themeToggleBtn) {
            themeToggleBtn.innerHTML = "🌙"; // Show moon icon if light mode is active
            themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("light-theme");
            
            let theme = "dark";
            if (document.body.classList.contains("light-theme")) {
                theme = "light";
                themeToggleBtn.innerHTML = "🌙"; // Moon icon for light mode
                themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
            } else {
                themeToggleBtn.innerHTML = "☀️"; // Sun icon for dark mode
                themeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
            }
            
            localStorage.setItem("theme", theme);
        });
    }

    /* ====== Scroll To Top Button Logic ====== */
    const scrollBtn = document.getElementById("scrollToTopBtn");
    if (scrollBtn) {
        window.onscroll = function() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                scrollBtn.style.display = "flex";
                scrollBtn.classList.add("show");
            } else {
                scrollBtn.style.display = "none";
                scrollBtn.classList.remove("show");
            }
        };

        scrollBtn.onclick = function() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        };
    }
});
