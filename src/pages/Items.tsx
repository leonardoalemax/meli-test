import React from "react";
import { Showcase } from "../components";
import useItens from "../hooks/useItens";
import "./Items.css";

function Items() {
	const { isLoading, itens } = useItens();

	return (
		<>
			{isLoading && (
				<div className='meli-loading-ring'>
					<div />
					<div />
					<div />
					<div />
				</div>
			)}
			{!isLoading && <Showcase itens={itens} />}
		</>
	);
}

export default Items;
