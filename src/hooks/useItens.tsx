import axios from "axios";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import useSWR from "swr";
import IProduct from "../interfaces/product";
import IProductCategory from "../interfaces/productCategory";

const useItens = (): {
	itens: IProduct[];
	categories: IProductCategory[];
	error: object;
	isLoading: boolean;
} => {
	const { search: query } = useLocation();

	const search = useMemo(() => {
		const params = new URLSearchParams(query);
		return params?.get("search")?.toString();
	}, [query]);

	const fetcher = (url: string) => axios.get(url).then((res) => res.data);

	const { data, error, isLoading } = useSWR(
		`https://api.mercadolibre.com/sites/MLB/search?q=${search}&limit=4`,
		fetcher
	);

	return {
		itens: data?.results,
		categories: data?.filters?.filter(
			(e: { id: string }) => e.id === "category"
		)[0]?.values,
		error,
		isLoading,
	};
};

export default useItens;
