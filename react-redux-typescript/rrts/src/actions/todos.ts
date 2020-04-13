import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from 'actions/types';
export interface TODO {
	id: number;
	title: string;
	completed: boolean;
}

export interface FetchTodosAction {
	type: ActionTypes.fetchTodos;
	payload: TODO[];
}

export interface DeleteTodoAction {
	type: ActionTypes.deleteTodo;
	payload: number;
}
const url = 'https://jsonplaceholder.typicode.com/todos';
export const fetchToDos = () => {
	return async (dispatch: Dispatch) => {
		const response = await axios.get<TODO[]>(url);
		dispatch<FetchTodosAction>({
			type: ActionTypes.fetchTodos,
			payload: response.data,
		});
	};
};

export const deleteTodo = (id: number): DeleteTodoAction => {
	return {
		type: ActionTypes.deleteTodo,
		payload: id,
	};
};
