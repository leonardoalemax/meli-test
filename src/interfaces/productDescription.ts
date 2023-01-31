export default interface IProductDescription {
	id: string;
	title: string;
	thumbnail_id: string;
	price: number;
	currency_id?: string;
	shipping?: {
		free_shipping: boolean;
	};
	permalink: string;
	warranty: string;
	plain_text: string;
}
