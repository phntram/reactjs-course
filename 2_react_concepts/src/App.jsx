import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ClassBasedComponent from './components/class-based-component';
import FunctionalComponent from './components/functional-component';
import ProductList from './components/products';

function App() {

	return (
		<>
			<h1>ReactJs Concepts 2024</h1>
			{/* <ClassBasedComponent></ClassBasedComponent>
			<FunctionalComponent /> */}

			<ProductList />
		</>
	);
}

export default App;
