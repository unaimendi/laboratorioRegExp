export const obtenerImgs = (texto: string) => {
	const regexImg = /<img.*\/>/gm;
	const regexSrc = /src="(?<url>.*)"/;

	const imgArray = texto.match(regexImg);
	console.log(imgArray);

	const srcArray = imgArray?.map((item) => {
		const coincidencia = regexSrc.exec(item);

		if (coincidencia) {
			const { url } = coincidencia.groups as any;
			return url;
		}
	});

	return srcArray;
};
