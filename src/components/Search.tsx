import React from "react";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import "./Search.css";

function Search() {
	const { search: query } = useLocation();

	const search = useMemo(() => {
		const params = new URLSearchParams(query);
		return params?.get("search")?.toString();
	}, [query]);

	return (
		<form className='meli-search' action='items'>
			<input
				type='text'
				className='meli-search-input'
				aria-label='Digite o que você quer encontrar'
				name='search'
				defaultValue={search}
				placeholder='Buscar produtos, marcas e muito mais…'
				max='120'
				autoCapitalize='off'
				autoCorrect='off'
				spellCheck={false}
				autoComplete='off'
				required={true}
				tabIndex={3}
				role='combobox'></input>
			<button type='submit' className='meli-search-cta' tabIndex={4}>
				<div
					role='img'
					aria-label='Buscar'
					className='meli-search-icon'></div>
			</button>
		</form>
	);
}

export default Search;
