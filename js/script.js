if (window.innerWidth < 801) {
  const burgerMenu = document.getElementById("burger-menu");
  const menu = document.getElementById("menu");

  burgerMenu.addEventListener("mousedown", (e) => {
    e.stopPropagation();
    menu.classList.toggle("show");
  });

  document.addEventListener("mousedown", (e) => {
    if (!menu.contains(e.target) && !burgerMenu.contains(e.target)) {
      menu.classList.remove("show");
    }
  });
}
