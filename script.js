const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const submitButton = contactForm.querySelector('button[type="submit"]');
  submitButton.textContent = "Sending...";
  submitButton.disabled = true;

  const formData = new FormData(contactForm);

  fetch("https://formsubmit.co/naderfkihhassen@gmail.com", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        alert("Message sent successfully!");
        contactForm.reset();
      } else {
        alert("Failed to send message. Please try again.");
      }
    })
    .catch((error) => {
      alert(
        "Error sending message. Please email me directly at naderfkihhassen@gmail.com"
      );
    })
    .finally(() => {
      submitButton.textContent = "Send";
      submitButton.disabled = false;
    });
});

document.getElementById("year").textContent = new Date().getFullYear();
