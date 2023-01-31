import React from "react";
import formatCurrency from "../function/formatCurrency";
import IProduct from "../interfaces/product";
import "./ShowcaseIten.css";

function ShowcaseIten({
	id,
	title,
	thumbnail_id,
	price,
	currency_id,
	shipping,
	installments,
}: IProduct) {
	return (
		<a className='meli-showcase-iten' href={`items/${id}`}>
			<div
				data-index='0'
				className='meli-showcase-iten-thumb'
				tabIndex={-1}>
				<img
					width={140}
					height={140}
					decoding='async'
					src={`https://http2.mlstatic.com/D_NQ_NP_${thumbnail_id}-V.webp`}
					alt={title}
				/>
			</div>
			<div className='meli-showcase-iten-description'>
				<h4>{title}</h4>
				<h1>{formatCurrency(price, currency_id)}</h1>
				<h5>
					{installments && (
						<>
							<span> em </span>
							{installments?.quantity}x{" "}
							{formatCurrency(
								installments?.amount,
								installments?.currency_id
							)}
							{installments?.rate === 0 && " Sem Juros"}
						</>
					)}
				</h5>

				{shipping?.free_shipping && <h5>Frete grátis</h5>}
			</div>
		</a>
	);
}

export default ShowcaseIten;
