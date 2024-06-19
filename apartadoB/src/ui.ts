export const generarImagenes = (arrayImagenes: string[]) => {
	const resultBox = document.getElementById("resultBox");

	arrayImagenes?.forEach((src) => {
		const contenedor = document.createElement("article");

		const imagen = document.createElement("img");
		imagen.src = src;

		contenedor.append(imagen);

		const enlace = document.createElement("a");
		enlace.setAttribute("href", src);
		enlace.setAttribute("target", "_blank");
		enlace.textContent = src;
		contenedor.append(enlace);
		resultBox?.append(contenedor);
	});
};
