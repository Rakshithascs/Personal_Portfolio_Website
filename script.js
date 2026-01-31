// ===== SMOOTH SCROLLING FOR NAVBAR LINKS =====
function showSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        // Scroll to the section smoothly
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ===== TYPING EFFECT =====
const texts = ["AIML Developer", "Python Developer"];
let index = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.getElementById("typing-text");

function typeEffect() {
    const current = texts[index];

    if (!isDeleting) {
        typingText.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
            setTimeout(() => isDeleting = true, 1200);
        }
    } else {
        typingText.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % texts.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();

// ===== CONTACT FORM SUCCESS MESSAGE =====
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const successMsg = document.getElementById("success-msg");
    successMsg.style.display = "block";

    // Reset form
    this.reset();

    // Hide message after 3 seconds
    setTimeout(() => {
        successMsg.style.display = "none";
    }, 3000);
});

