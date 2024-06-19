import { obtenerImgs } from "./regex";
import { generarImagenes } from "./ui";

const extraeTextoImgs = () => {
	const textarea = document.getElementById("textarea");
	if (textarea && textarea instanceof HTMLTextAreaElement) {
		const texto = textarea.value;
		if (texto) {
			const arrayImagenes = obtenerImgs(texto);
			if (arrayImagenes) {
				generarImagenes(arrayImagenes);
			}
		}
	}
};

document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("form");
	if (form && form instanceof HTMLFormElement) {
		form.addEventListener("submit", (e) => {
			e.preventDefault();
			extraeTextoImgs();
		});
	}
});
