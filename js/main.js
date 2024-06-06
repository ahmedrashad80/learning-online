const roots = document.querySelectorAll("*");
const changeTheme = document.querySelector(".change");
function toggleDarkMode() {
  const isDarkMode = localStorage.getItem("darkMode") === "true";

  roots.forEach((root) => {
    if (isDarkMode) {
      root.classList.add("themes-dark");
      changeTheme.innerHTML = '<i class="far fa-sun"></i> Light';
    }
  });

  changeTheme.addEventListener("click", function () {
    const newMode = !isDarkMode;
    roots.forEach((root) => {
      root.classList.toggle("themes-dark");
    });
    localStorage.setItem("darkMode", newMode);
    if (newMode) {
      changeTheme.innerHTML = '<i class="far fa-sun"></i> Light';
    } else {
      changeTheme.innerHTML = '<i class="far fa-moon"></i> Night';
    }
  });
}

toggleDarkMode();
