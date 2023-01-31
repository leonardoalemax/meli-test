import React from "react";
import "./Description.css";
import IProductDescription from "../interfaces/productDescription";
import formatCurrency from "../function/formatCurrency";
import Breadcomb from "./Breadcomb";

function Description({ iten }: { iten?: IProductDescription }) {
	const {
		title,
		thumbnail_id,
		plain_text,
		price,
		currency_id,
		shipping,
		permalink,
		warranty,
		category_id,
	} = iten || {};

	return (
		<>
			<Breadcomb
				list={[
					{
						title: "Busca",
						link: `/`,
					},
					{
						title: `${category_id}`,
						link: `/items?search=${category_id}`,
					},
				]}
			/>
			<div className='meli-product-description'>
				<div className='meli-product-header'>
					<div
						data-index='0'
						className='meli-product-description-thumb'
						tabIndex={-1}>
						<img
							width={410}
							height={500}
							decoding='async'
							src={`https://http2.mlstatic.com/D_NQ_NP_2X_${thumbnail_id}-F.webp`}
							alt={title}
						/>
					</div>
					<div className='meli-product-description-attributes'>
						<h4>{title}</h4>
						<h1>{formatCurrency(price || 0, currency_id)}</h1>
						<p>{warranty}</p>
						{shipping?.free_shipping && <h5>Frete grátis</h5>}

						<a href={permalink}>Comprar agora</a>
					</div>
				</div>
				<div className='meli-product-description-text'>
					<h4>Descrição</h4>
					<p>{plain_text}</p>
				</div>
			</div>
		</>
	);
}

export default Description;
