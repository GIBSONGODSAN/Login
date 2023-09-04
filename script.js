document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const emailErrorMessage = document.getElementById("email-error-message");

  emailInput.addEventListener("blur", function () {
    const email = emailInput.value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email === "gomtha") {
      // Redirect to the specified URL
      window.location.href = "https://gibsongodsan.github.io/WebTech/";
      emailInput.value = "";
    } else if (!emailPattern.test(email)) {
      // Invalid email format
      emailErrorMessage.textContent = "Invalid email";
      emailErrorMessage.style.display = "block";
      emailInput.classList.add("invalid");
      emailInput.value = "";
    } else {
      // Valid email format
      emailErrorMessage.style.display = "none";
      emailInput.classList.remove("invalid");
    }
  });
});
