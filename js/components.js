class Navbar extends HTMLElement {
    connectedCallback() {
        // Determine the current page to highlight the active link
        const currentPath = window.location.pathname;
        const page = currentPath.split("/").pop() || "index.html";

        this.innerHTML = `
            <header class="navbar">
                <div class="nav-container">
                    <a href="index.html" class="logo">
                        <span class="logo-accent">&lt;/</span>Puran<span class="logo-accent">&gt;</span>
                    </a>
                    
                    <button class="menu-toggle" aria-label="Toggle navigation">
                        <span class="hamburger"></span>
                    </button>

                    <nav class="nav-links">
                        <a href="index.html" class="${page === 'index.html' ? 'active' : ''}">Home</a>
                        <a href="skills.html" class="${page === 'skills.html' ? 'active' : ''}">Skills</a>
                        <a href="contact.html" class="${page === 'contact.html' ? 'active' : ''}">Contact</a>
                    </nav>
                </div>
            </header>
        `;

        // Mobile menu toggle logic
        const toggle = this.querySelector('.menu-toggle');
        const nav = this.querySelector('.nav-links');
        
        toggle.addEventListener('click', () => {
            nav.classList.toggle('nav-open');
            toggle.classList.toggle('is-active');
        });
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">
                <div class="footer-content">
                    <p>&copy; ${new Date().getFullYear()} Puran. Built with HTML, CSS, & JS.</p>
                    <div class="footer-links">
                        <a href="#" target="_blank" aria-label="GitHub">GitHub</a>
                        <a href="#" target="_blank" aria-label="LinkedIn">LinkedIn</a>
                    </div>
                </div>
            </footer>
        `;
    }
}

// Define the custom elements
customElements.define('app-navbar', Navbar);
customElements.define('app-footer', Footer);

// Inject them into placeholders if they exist
document.addEventListener("DOMContentLoaded", () => {
    const navContainer = document.getElementById("navbar-container");
    if (navContainer) {
        navContainer.innerHTML = '<app-navbar></app-navbar>';
    }

    const footerContainer = document.getElementById("footer-container");
    if (footerContainer) {
        footerContainer.innerHTML = '<app-footer></app-footer>';
    }
});
