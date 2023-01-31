import React from "react";
import "./Breadcomb.css";

function Breadcomb({
	list,
}: {
	list: { link?: string; title: string; isDisable?: boolean }[];
}) {
	return (
		<div className='meli-breadcomb'>
			{list.map((iten, index) => (
				<React.Fragment key={iten.title}>
					<a
						aria-disabled={iten.isDisable}
						href={iten.link}
						className='meli-breadcomb-iten'>
						{iten.title}
					</a>
					{index !== list.length - 1 && <span> {">"} </span>}
				</React.Fragment>
			))}
		</div>
	);
}

export default Breadcomb;
