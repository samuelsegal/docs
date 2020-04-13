import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TODO, fetchToDos, deleteTodo } from 'actions';
import { StoreState } from '../reducers/index';

interface AppProps {
	todos: TODO[];
	fetchToDos: Function;
	deleteTodo: typeof deleteTodo;
}

interface AppState {
	fetching: boolean;
}
class _App extends Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);
		this.state = { fetching: false };
	}
	componentDidUpdate(prevProps: AppProps): void {
		if (!prevProps.todos.length && this.props.todos.length) {
			this.setState({ fetching: false });
		}
	}
	onButtonClick = (): void => {
		this.props.fetchToDos();
		this.setState({ fetching: true });
	};
	onTodoClick = (id: number): void => {
		this.props.deleteTodo(id);
	};
	renderList(): JSX.Element[] {
		return this.props.todos.map((todo: TODO) => {
			return (
				<div
					onClick={() => {
						this.onTodoClick(todo.id);
					}}
					key={todo.id}
				>
					{todo.title}
				</div>
			);
		});
	}
	render() {
		console.log(this.props.todos);
		return (
			<div>
				<button onClick={this.onButtonClick}>Fetch</button>
				{this.state.fetching ? 'Loading...' : null}
				{this.renderList()}
			</div>
		);
	}
}

const mapStateToProps = ({ todos }: StoreState): { todos: TODO[] } => {
	return { todos: todos };
};

export const App = connect(
	mapStateToProps,
	{ fetchToDos, deleteTodo }
)(_App);
