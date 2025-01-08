// Vælg burger-menu knappen og menuen
const burgerMenu = document.getElementById("burger-menu");
const menu = document.getElementById("menu");

// Tilføj en klik-event listener til burger-ikonet
burgerMenu.addEventListener("click", () => {
  menu.classList.toggle("show"); // Tilføj eller fjern 'show'-klassen for at åbne/lukke menuen
});
