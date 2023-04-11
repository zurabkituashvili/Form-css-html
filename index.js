const slider = document.getElementById("myRange");
const value = document.getElementById("num");
const password = document.getElementById("password");
const password1 = document.getElementById("confirm password");
const form = document.getElementById("form");

value.textContent = slider.value;
slider.oninput = function () {
  value.textContent = slider.value;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (password.value !== password1.value) {
    alert("Passwords did not match");
  } else {
    setTimeout(function () {
      form.submit();
      alert("Submitted successfully");
    }, 500);
  }
});
