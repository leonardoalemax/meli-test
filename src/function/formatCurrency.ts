const formatCurrency = (
	value: number,
	currency = 'BRL',
	locale = 'pt-BR'
): string => {
	const formatter = new Intl.NumberFormat(locale, {
		style: 'currency',
		currency,
	});
	return formatter.format(value);
};

export default formatCurrency;
