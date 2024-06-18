import { codigosBancos, ibanObject } from "./modelo";

export const limpiarIban = (iban: string): string => {
	const ibanLimpio = iban.replace(/[\s-]/g, "");
	return ibanLimpio.toUpperCase();
};

export const comprobarFormato = (iban: string): boolean => {
	const regexIban = /^(?<codigoPais>[a-z]{2})(?<digitoControlA>\d\d)(?<codigoBanco>\d{4})(?<codigoSucursal>\d{4})(?<digitoControlB>\d{2})(?<numeroCuenta>\d{10})$/i;

	const coincidencia = regexIban.exec(iban);

	if (coincidencia) {
		const { codigoPais, digitoControlA, codigoBanco, codigoSucursal, digitoControlB, numeroCuenta } = coincidencia.groups as any;

		ibanObject.codigoPais = codigoPais;
		ibanObject.digitoControlA = digitoControlA;
		ibanObject.codigoBanco = codigoBanco;
		ibanObject.codigoSucursal = codigoSucursal;
		ibanObject.digitoControlB = digitoControlB;
		ibanObject.numeroCuenta = numeroCuenta;

		return true;
	} else {
		return false;
	}
};

export const obtenerBanco = (codigo: string): string => {
	const pattern = `${codigo}\\s(?<nombreBanco>.+)`;
	const flags = "m";

	const regexBanco = new RegExp(pattern, flags);
	const coincidencia = regexBanco.exec(codigosBancos);

	if (coincidencia) {
		const { nombreBanco } = coincidencia.groups as any;

		return nombreBanco;
	} else {
		return "error";
	}
};
