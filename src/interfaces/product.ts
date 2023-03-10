import IProductCategory from "./productCategory";

export default interface IProduct {
	id: string;
	title: string;
	thumbnail_id: string;
	price: number;
	currency_id?: string;
	shipping?: {
		free_shipping: boolean;
	};
	filters?: {
		id: string;
		name: string;
		type: string;
		values: IProductCategory[];
	}[];
	seller?: {
		seller_reputation?: {
			level_id?: string;
		};
	};
	seller_address?: {
		state?: {
			name?: string;
		};
	};
	installments?: {
		amount: number;
		currency_id: string;
		quantity: number;
		rate: number;
	};
}
