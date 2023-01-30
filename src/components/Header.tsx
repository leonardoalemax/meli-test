import React from "react";
import "./Header.css";
import Search from "./Search";

function Header() {
	return (
		<div className='meli-header'>
			<div className='meli-header-content'>
				<a href='/' className='meli-logo'>
					Mercado Livre Brasil - Onde comprar e vender de Tudo
				</a>
				<Search />
			</div>
		</div>
	);
}

export default Header;
