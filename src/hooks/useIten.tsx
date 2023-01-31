import axios from "axios";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import IProductDescription from "../interfaces/productDescription";

const useIten = (): {
	iten: IProductDescription;
	error: object;
	isLoading: boolean;
} => {
	const { productId } = useParams();

	const fetcher = async (id: string) => {
		const product = await axios
			.get(`https://api.mercadolibre.com/items/${id}`)
			.then((res) => res.data);

		const description = await axios
			.get(`https://api.mercadolibre.com/items/${id}/description`)
			.then((res) => res.data);

		return {
			...product,
			plain_text: description.plain_text,
		};
	};

	const { data, error, isLoading } = useSWR(productId, fetcher);

	return {
		iten: data,
		error,
		isLoading,
	};
};

export default useIten;
