import { useState } from 'react';
// import './App.css';
import { useEffect } from 'react';
import classes from './styles.module.css';
import TodoItem from './components/todoItem';

function App() {
	const [loading, setLoading] = useState(false);
	const [todoList, setTodoList] = useState([]);
	const [errorMsg, setErrorMsg] = useState(null);

	async function fetchListOfTodos() {
		try {
			setLoading(true);
			const apiResponse = await fetch('https://dummyjson.com/todos');
			const result = await apiResponse.json();

			console.log(result);
			if (result?.todos && result?.todos?.length > 0) {
				setLoading(false);
				setTodoList(result?.todos);
				setErrorMsg('');
			} else {
				setLoading(false);
				setTodoList([]);
				setErrorMsg('');
			}
		} catch (error) {
			console.log(error);
			setErrorMsg("Some error occured");
		}
	}

	useEffect(() => {
		fetchListOfTodos();
	}, []);

	return (
		<div className={classes.mainWrapper}>
			<h1 className={classes.headerTitle}>Simple Todo App using Material UI</h1>
			<div className={classes.todoListWrapper}>
				{
					todoList && todoList?.length > 0 ?
						todoList.map((todoItem, index) => <TodoItem todo={todoItem} key={index} />)
						: null
				}
			</div>

		</div>
	);
}

export default App;
