document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Message sent! Thank you.");
      form.reset();
    });
  }

  const buttons = document.querySelectorAll(".toggle-btn");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
        button.textContent = "▼ " + button.textContent.slice(2);
      } else {
        content.style.display = "block";
        button.textContent = "▲ " + button.textContent.slice(2);
      }
    });
  });
});
