import { useState } from 'react';
// import './App.css';
import { useEffect } from 'react';
import classes from './styles.module.css';
import TodoItem from './components/todoItem';
import TodoDetails from './components/todoDetails';
import { Skeleton } from '@mui/material';

function App() {
	const [loading, setLoading] = useState(false);
	const [todoList, setTodoList] = useState([]);
	const [errorMsg, setErrorMsg] = useState(null);
	const [todoDetail, setTodoDetail] = useState(null);
	const [openDialog, setOpenDialog] = useState(false);

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

	async function fetchDetailOfTodo(currentTodoId) {
		try {
			console.log(currentTodoId);
			const apiResponse = await fetch(`https://dummyjson.com/todos/${currentTodoId}`);
			const result = await apiResponse.json();
			console.log(result);

			if (result) {
				setTodoDetail(result);
				setOpenDialog(true);
			} else {
				setTodoDetail({});
				setOpenDialog(false);
			}
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		fetchListOfTodos();
	}, []);

	if (loading) {
		<Skeleton variant="rectangular" width={210} height={180} />;
	}

	return (
		<div className={classes.mainWrapper}>
			<h1 className={classes.headerTitle}>Simple Todo App using Material UI</h1>
			<div className={classes.todoListWrapper}>
				{
					todoList && todoList?.length > 0 ?
						todoList.map((todoItem, index) => <TodoItem todo={todoItem} fetchDetailOfTodo={fetchDetailOfTodo} key={index} />)
						: null
				}
			</div>
			<TodoDetails openDialog={openDialog} todoDetail={todoDetail} setOpenDialog={setOpenDialog} setTodoDetail={setTodoDetail} />
		</div>
	);
}

export default App;
