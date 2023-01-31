import React from "react";
import { Loading, Showcase } from "../components";
import useItens from "../hooks/useItens";

function Itens() {
	const { isLoading, itens } = useItens();

	return (
		<>
			{isLoading && <Loading />}

			{!isLoading && <Showcase itens={itens} />}
		</>
	);
}

export default Itens;
