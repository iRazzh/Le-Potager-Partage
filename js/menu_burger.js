/* Animation Burger Menu */
const btn = document.querySelector(".cont-lignes");
const displaySecondMenu = document.querySelector(".inside-navigation");

btn.addEventListener('click', displayMenuBurger);
function displayMenuBurger() {
	btn.classList.toggle('active');
	if(displaySecondMenu.style.display === "block"){
		displaySecondMenu.style.display = "none";
	} else {
		displaySecondMenu.style.display = "block";
	}
}

function listenerResize() {
	if (window.matchMedia("(min-width: 1301px)").matches) {
		displaySecondMenu.style.display = "block";
	} else {
		btn.classList.remove("active");
		displaySecondMenu.style.display = "none";
	}
}
window.addEventListener("resize", listenerResize, false)