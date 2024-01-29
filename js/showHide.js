//
//Script para ocultar o mostrar divs en función de donde se clicka

const navButtons = document.querySelectorAll('[id^="showButton"]');
const divContainers = document.querySelectorAll(".content-container");

navButtons.forEach((button, index) => {
	button.addEventListener("click", function () {
		// Oculta el resto de divs
		divContainers.forEach((container) => (container.style.display = "none"));

		// Muestra el div de contenido correspondiente
		divContainers[index].style.display = "flex";
	});
});

// Enseña todos los divs de contenido si se clicka en Todo
document.addEventListener("click", function (event) {
	const target = event.target;
	if (target.id.startsWith("showButtonTodo")) {
		divContainers.forEach((container) => (container.style.display = "block"));
	}
});
