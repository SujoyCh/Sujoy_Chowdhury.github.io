// Mobile nav toggle
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Close mobile menu when clicking a link
navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
        navLinks.classList.remove("show");
    }
});

// Smooth scroll (extra safety in case browser doesn't support CSS smooth scroll)
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href").slice(1);
        const target = document.getElementById(targetId);

        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Simple front-end-only contact form handler (just a demo)
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name")?.value || "";
        alert(`Thanks for your message, ${name || "friend"}! (This is a front-end demo only.)`);

        contactForm.reset();
    });
}
