document.addEventListener("DOMContentLoaded", function () {
  const dark = document.getElementById("darkMode");

  if (!dark) {
    return;
  }

  let isDark = false;

  dark.addEventListener("click", function () {

    isDark = !isDark;

    document.body.classList.toggle("dark-mode");
  });
});