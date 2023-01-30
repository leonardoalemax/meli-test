import React from "react";
import "./App.css";
import { Header } from "./components";

function App() {
	return (
		<div className='meli-app'>
			<Header />
			<div className='meli-content'></div>
		</div>
	);
}

export default App;
