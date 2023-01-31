import React, { useMemo } from "react";
import IProduct from "../interfaces/product";
import ShowcaseIten from "./ShowcaseIten";

import "./Showcase.css";
import Breadcomb from "./Breadcomb";
import IProductCategory from "../interfaces/productCategory";

function Showcase({
	itens,
	categories,
}: {
	itens: IProduct[];
	categories?: IProductCategory[];
}) {
	const breadcombList = useMemo(() => {
		return categories && categories.length >= 1
			? categories[0].path_from_root?.map((cat: { name: string }) => ({
					title: cat?.name,
					link: `/items?search=${cat?.name}`,
			  }))
			: [];
	}, [categories]);

	return (
		<>
			<Breadcomb list={breadcombList} />
			<div className='meli-showcase'>
				{itens?.map((i) => (
					<ShowcaseIten {...i} key={i.id} />
				))}
				{itens?.length == 0 && (
					<div className='meli-showcase-zero-state'>
						Não há anúncios que correspondem à sua busca.
					</div>
				)}
			</div>
		</>
	);
}

export default Showcase;
