// import { electronicFormatIBAN } from "ibantools";
import { comprobarFormato, limpiarIban, obtenerBanco } from "./regex";
import { vaciarContenedor, addParrafo } from "./ui";
import { ibanObject } from "./modelo";
import { isValidIBAN } from "ibantools";

const mostrarDatos = () => {
	const nombreBanco = obtenerBanco(ibanObject.codigoBanco);
	addParrafo(`Banco: ${nombreBanco}`);
	addParrafo(`Código de sucursal: ${ibanObject.codigoSucursal}`);
	addParrafo(`Dígito de control: ${ibanObject.digitoControlA}`);
	addParrafo(`Número de cuenta: ${ibanObject.numeroCuenta}`);
};

const comprobarIBAN = (iban: string) => {
	if (isValidIBAN(iban)) {
		addParrafo("El IBAN es válido");
		mostrarDatos();
	} else {
		addParrafo("El IBAN no es válido");
	}
};

const validarInput = (iban: string) => {
	const ibanLimpio = limpiarIban(iban);
	const formatoOk = comprobarFormato(ibanLimpio);

	if (!formatoOk) {
		addParrafo("El IBAN no está bien formado");
	} else {
		addParrafo("El IBAN está bien formado");
		comprobarIBAN(ibanLimpio);
	}
};

export const traerValorInput = () => {
	const formValidador = document.getElementById("formValidador");
	if (formValidador && formValidador instanceof HTMLFormElement) {
		formValidador.addEventListener("submit", (e) => {
			e.preventDefault();
			vaciarContenedor();
			const inputIBAN = document.getElementById("inputIBAN");

			if (inputIBAN && inputIBAN instanceof HTMLInputElement) {
				const valorInput = inputIBAN.value;

				if (valorInput) {
					validarInput(valorInput);
				} else {
					addParrafo("Introduce un IBAN");
				}
			}
		});
	}
};
