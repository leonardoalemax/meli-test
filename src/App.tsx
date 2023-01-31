import React from "react";
import "./App.css";
import { Header } from "./components";
import { Routes, Route } from "react-router-dom";

import Itens from "./pages/Itens";
import Iten from "./pages/Iten";

function App() {
	return (
		<div className='meli-app'>
			<Header />
			<div className='meli-content'>
				<Routes>
					<Route path='/items' element={<Itens />} />
					<Route path='/items/:productId' element={<Iten />} />
					<Route path='/' element={<p></p>} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
