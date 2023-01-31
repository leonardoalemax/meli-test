import React from "react";
import IProduct from "../interfaces/product";
import Item from "./Item";
import "./Showcase.css";

function Showcase({ itens }: { itens: IProduct[] }) {
	return (
		<div className='meli-showcase'>
			{itens?.map((i) => (
				<Item {...i} key={i.id} />
			))}
			{itens?.length == 0 && (
				<div className='meli-showcase-zero-state'>
					Não há anúncios que correspondem à sua busca.
				</div>
			)}
		</div>
	);
}

export default Showcase;
