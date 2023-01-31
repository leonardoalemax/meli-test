export default interface IProduct {
	id: string;
	title: string;
	thumbnail_id: string;
	price: number;
	currency_id?: string;
	shipping?: {
		free_shipping: boolean;
	};
	installments?: {
		amount: number;
		currency_id: string;
		quantity: number;
		rate: number;
	};
}
