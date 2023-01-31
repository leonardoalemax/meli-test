import React from "react";
import "./App.css";
import { Header } from "./components";
import { Routes, Route } from "react-router-dom";
import Items from "./pages/Items";

function App() {
	return (
		<div className='meli-app'>
			<Header />
			<div className='meli-content'>
				<Routes>
					<Route path='/items' element={<Items />} />
					<Route path='/' element={<p></p>} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
