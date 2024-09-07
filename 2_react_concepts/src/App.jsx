import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ClassBasedComponent from './components/class-based-component';
import FunctionalComponent from './components/functional-component';
import ProductList from './components/products';
import Users from './components/users';
import ComponentButtonContextConcept from './components/context-concept/button';
import ComponentTextContextConcept from './components/context-concept/text';
import UseReducerExample from './components/use-reducer-example';

// Props
const dummyProductData = ["Product 1", "Product 2", "Product 3"];

function App() {

	return (
		<>
			<h1>ReactJs Concepts 2024</h1>
			{/* <ClassBasedComponent></ClassBasedComponent> */}
			{/* <FunctionalComponent /> */}

			{/* <ProductList listOfProducts={dummyProductData} name="Roxy" city="ABC XYZ" /> */}

			{/* <Users /> */}

			{/* context Concept */}
			{/* <ComponentButtonContextConcept /> */}
			{/* <ComponentTextContextConcept /> */}

			{/* useReducer hook */}
			<UseReducerExample />
		</>
	);
}

export default App;
