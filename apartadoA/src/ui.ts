const resultadoVal = document.getElementById("resultadoVal");
export const addParrafo = (texto: string) => {
	const newP = document.createElement("p");
	newP.innerText = texto;
	resultadoVal?.append(newP);
};

export const vaciarContenedor = () => {
	if (resultadoVal) {
		resultadoVal.innerHTML = "";
	}
};
