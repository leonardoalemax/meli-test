import React from "react";
import "./App.css";
import { Header } from "./components";
import { Routes, Route, Navigate } from "react-router-dom";

import Itens from "./pages/Itens";
import Iten from "./pages/Iten";

function App() {
	return (
		<div className='meli-app'>
			<Header />
			<div className='meli-content'>
				<Routes>
					<Route path='/meli-test/items' element={<Itens />} />
					<Route
						path='/meli-test/items/:productId'
						element={<Iten />}
					/>
					<Route path='/meli-test/' element={<p></p>} />
					<Route path='*' element={<Navigate to='/meli-test/' />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
